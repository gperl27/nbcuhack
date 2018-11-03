module.exports = io => {
  io.on("connection", function(socket) {
    // socket.on("is typing", ({ ideaId, uid }) => {
    //   socket.to(ideaId).emit("is typing", { uid });
    // });

    // socket.on("done typing", ({ ideaId, uid }) => {
    //   socket.to(ideaId).emit("done typing", { uid });
    // });

    console.log("connected");
  });
};
