const http = require("http");
const express = require("express");
const { Server } = require("socket.io");
const { getStoryline } = require("./services/storyline");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3001", "http://localhost:3002", "http://localhost:3003", "http://localhost:3004", "http://localhost:3005"],
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("Client connecté :", socket.id);

  // le client peut envoyer : { gameId: "...." }
  socket.on("get_storyline", async (payload, callback) => {
    try {
      const gameId = payload && payload.gameId;
      if (!gameId) {
        throw new Error("gameId manquant");
      }

      const storyline = await getStoryline(gameId);
      
      if (typeof callback === "function") {
        return callback({ ok: true, storyline });
      }

      // 2) ou émettre un event
      // socket.emit("storyline", storyline);
    } catch (err) {
      console.error("Erreur get_storyline:", err);
      if (typeof callback === "function") {
        return callback({ ok: false, error: err.message });
      }
      socket.emit("storyline_error", err.message);
    }
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log("Server listening on", PORT);
});
