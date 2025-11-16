const { supabase } = require("../utils/supabase/client");

// TEMPORAIRE : adapte les données pour correspondre à la structure du mock JSON. À retravailler.  
async function getStoryline(gameId) {
  const { data, error } = await supabase
    .from("games")
    .select(`
      id,
      title,
      total_duration_minutes,
      sections (
        id,
        slug,
        name,
        description,
        type,
        difficulty,
        duration_minutes,
        order_index,
        animations (
          id,
          external_id,
          name,
          duration_seconds,
          position,
          need_puzzle_id
        ),
        puzzles (
          id,
          external_id,
          name,
          solution_text,
          solution_number,
          solution_type,
          clues (
            id,
            external_id,
            content,
            display_after_seconds,
            order_index
          )
        )
      )
    `)
    .eq("id", gameId)
    .single();

  if (error || !data) {
    console.error("Erreur Supabase getStoryline:", error);
    throw error || new Error("Game not found");
  }

  const game = data;

  const sections = (game.sections || []).sort(
    (a, b) => (a.order_index || 0) - (b.order_index || 0)
  );

  const sectionsJson = sections.map((section) => {
    const puzzles = section.puzzles || [];

    const answers = puzzles
      .slice()
      .sort((a, b) => (a.external_id || 0) - (b.external_id || 0))
      .map((puzzle) => {
        let solution;
        if (puzzle.solution_type === "number" && puzzle.solution_number != null) {
          solution = Number(puzzle.solution_number);
        } else {
          solution = puzzle.solution_text;
        }

        return {
          id: puzzle.external_id,
          name: puzzle.name,
          solution,
        };
      });

    const clues = puzzles
      .flatMap((p) => p.clues || [])
      .sort(
        (a, b) =>
          (a.display_after_seconds || 0) -
          (b.display_after_seconds || 0)
      )
      .map((clue) => ({
        id: clue.external_id,
        content: clue.content,
        displayAfter: clue.display_after_seconds,
      }));

    const animations = (section.animations || [])
      .slice()
      .sort((a, b) => (a.position || 0) - (b.position || 0))
      .map((anim) => {
        let needAnswer = null;

        if (anim.need_puzzle_id) {
          const linkedPuzzle = puzzles.find(
            (p) => p.id === anim.need_puzzle_id
          );
          if (linkedPuzzle) {
            needAnswer = linkedPuzzle.external_id;
          }
        }

        const base = {
          id: anim.external_id,
          name: anim.name,
          durationInSeconds: anim.duration_seconds,
        };

        if (anim.position != null) base.position = anim.position;
        if (needAnswer != null) base.needAnswer = needAnswer;

        return base;
      });

    return {
      id: section.slug, 
      name: section.name,
      description: section.description,
      type: section.type,
      difficulty: section.difficulty,
      durationInMinutes: section.duration_minutes,
      animations,
      clues,
      answers,
    };
  });

  return {
    title: game.title,
    durationInMinutes: game.total_duration_minutes,
    sections: sectionsJson,
  };
}

module.exports = { getStoryline };
