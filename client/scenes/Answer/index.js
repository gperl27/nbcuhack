import React, { useEffect, useState } from "react";

const Answer = () => {
  const [answers, setAnswer] = useState([]);

  socket.on("results", data => {
    console.log(data, "data");
    setAnswer(data);
  });

  return (
    <div>
      <div>answers</div>
      {answers.map((answer, index) => (
        <div key={index}>{answer}</div>
      ))}
    </div>
  );
};

export default Answer;
