import React from "react";
import "../App.css";
export default function Finish(props) {
  console.log("from finish component");
  return (
    <div>
      <h1 className="heading">Finish</h1>
      <div className="container">
        <p className="contactParagraph">Score: {props.score}</p>
        <p className="contactParagraph">Accuracy: {props.accuracy}%</p>
        <p className="contactParagraph">WMP: {props.wordsPerMin}</p>
      </div>
      <button
        className="introButton"
        onClick={() => {
          props.setGameStart("start");
        }}
      >
        Replay
      </button>
    </div>
  );
}
