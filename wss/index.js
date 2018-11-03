module.exports = io => {
  let answers = [];

  io.on("connection", function(socket) {
    socket.on("answer", data => {
      answers.push(data);

      console.log(answers, "data 1");

      io.emit("results", answers);
    });

    // socket.on("is typing", ({ ideaId, uid }) => {
    //   socket.to(ideaId).emit("is typing", { uid });
    // });

    // socket.on("done typing", ({ ideaId, uid }) => {
    //   socket.to(ideaId).emit("done typing", { uid });
    // });

    console.log(answers, "data 2");

    io.emit("results", answers);
  });
};
