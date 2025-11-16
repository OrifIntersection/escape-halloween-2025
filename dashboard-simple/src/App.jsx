import { useEffect, useState } from "react";
import { socket } from "./socket";

const GAME_ID = "42105597-aa3c-4a44-8a56-f7e679615cf6"; 

function App() {
  const [connected, setConnected] = useState(socket.connected);
  const [storyline, setStoryline] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    function onConnect() {
      setConnected(true);

      // demander le scénario dès la connexion
      socket.emit(
        "get_storyline",
        { gameId: GAME_ID },
        (response) => {
          if (!response) return;
          if (!response.ok) {
            setError(response.error || "Erreur inconnue");
            return;
          }
          setStoryline(response.storyline);
        }
      );
    }

    function onDisconnect() {
      setConnected(false);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    socket.connect();

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.disconnect();
    };
  }, []);

  if (!connected) {
    return <p>Connexion au serveur...</p>;
  }

  if (error) {
    return <p>Erreur : {error}</p>;
  }

  if (!storyline) {
    return <p>Chargement du scénario...</p>;
  }

  // À partir d'ici, `storyline` a le même format que ton fichier JSON d'origine
  return (
    <div style={{ padding: 16 }}>
      <h1>{storyline.title}</h1>
      <p>Durée : {storyline.durationInMinutes} minutes</p>

      {storyline.sections.map((section) => (
        <section key={section.id} style={{ marginTop: 24 }}>
          <h2>{section.name}</h2>
          {section.description && <p>{section.description}</p>}

          <h3>Animations</h3>
          <ul>
            {section.animations.map((anim) => (
              <li key={anim.id}>
                {anim.name} ({anim.durationInSeconds}s)
                {anim.needAnswer && (
                  <span> (débloquée après énigme #{anim.needAnswer})</span>
                )}
              </li>
            ))}
          </ul>

          <h3>Énigmes</h3>
          <ul>
            {section.answers.map((ans) => (
              <li key={ans.id}>
                {ans.name} – solution : {String(ans.solution)}
              </li>
            ))}
          </ul>

          <h3>Indices</h3>
          <ul>
            {section.clues.map((clue) => (
              <li key={clue.id}>
                {clue.content} (après {clue.displayAfter}s)
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

export default App;
