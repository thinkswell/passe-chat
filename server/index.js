const http = require("http");
const socketio = require("socket.io");
const express = require("express");

const { addUser, getUser, removeUser, getNumber } = require("./user");

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on("connection", (socket) => {
  console.log("New Connection!!");

  socket.on("join", ({ room, name }) => {
    const user = addUser({ id: socket.id, room, name });

    socket.emit("message", {
      name: "admin",
      text: `Hi ${user.name}, Welcome to the room ${user.room}`,
    });
    socket.broadcast
      .to(user.room)
      .emit("message", { name: "admin", text: `${user.name}, had joined.` });

    socket.join(user.room);
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit("message", { name: user.name, text: message });

    callback();
  });

  socket.on("disconnect", ({ room, name }) => {
    console.log("User had left!");

    removeUser(socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`Listening to ${PORT}....`);
});
