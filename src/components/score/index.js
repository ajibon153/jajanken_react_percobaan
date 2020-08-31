import React from "react";

const Score = ({
  next,
  funcSetNext,
  player,
  oponent,
  info,
  scorePlayer,
  scoreOponent,
}) => {
  // console.log("score pl", scorePlayer);
  // console.log("score op", scoreOponent);
  const nextR = {
    position: " absolute",
    bottom: "-55px",
    left: " 0px",
    background: " orange",
  };
  return (
    <>
      {/* {submitCard ? ( */}
      <h4 style={{ textAlign: "center" }}>{info}</h4>
      {/* ) : (
        <h4 style={{ textAlign: "center" }}>Tentukan Pilihanmu</h4>
      )} */}
      <div className="score-board">
        <div id="user-level" className="badge">
          {player.name}
        </div>
        <div id="computer-level" className="badge">
          {oponent.name}
        </div>
        <span id="user-score">{scorePlayer}</span>:
        <span id="computer-score">{scoreOponent}</span>
        {next ? (
          <div
            id="next"
            style={nextR}
            onClick={() => {
              funcSetNext();
            }}
          >
            <h1>Next Round </h1>
          </div>
        ) : (
          ""
        )}
      </div>
      {/* <p>{hasil ? `Hasil ${hasil}` : "Pilih salah satu"}</p> */}
    </>
  );
};

export default Score;
