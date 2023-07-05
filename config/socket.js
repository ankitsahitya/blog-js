const Socket = require('socket.io')
let io;

exports.createIo = (server) => {
  io = Socket(server, {
    cors: {}
  })

  io.on("connection", (socket) => {
    console.log("New Client connected");
    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });
  });
}

exports.sendMessage = (key, message) => {
  io.emit(key, message)
}

