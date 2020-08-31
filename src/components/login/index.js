import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./login.css";
// import io from "socket.io-client";
// import Game from "../game";

// import Loading from "../finish/loading";
// let socket;

const Login = () => {
  const [text, setText] = useState("");
  const [game, setGame] = useState(false);
  const [alert, setAlert] = useState(false);
  const [reload, setreload] = useState(false);
  // const [loading, setLoading] = useState(false);

  function popUp(e) {
    e.preventDefault();
    // setAlert(true);
  }

  function submitName(e) {
    e.preventDefault();
    // setLoading(true);
    setreload(false);
    console.log(text);
    if (text) {
      setAlert(false);
    }
    setGame(true);
  }

  return (
    <>
      {/* {redirect ? (
        <Redirect to="/game" user={vata} />
      ) : ( */}
      <div className="joinOuterContainer" id="userFormArea">
        {/* {loading ? (
          <h1
            style={{
              position: "absolute",
              top: "50px",
              left: "50px",
              color: "white",
            }}
          >
            Menunggu Pemain Lain...
          </h1>
        ) : (
          ""
        )} */}

        <form id="userForm">
          <div className="joinInnerContainer">
            <h1 className="heading">Join The Game</h1>
            <div>
              <input
                placeholder="Nama Kamu"
                className="joinInput"
                type="text"
                id="username"
                onChange={(event) => setText(event.target.value)}
              />
            </div>
            <button
              className={"button mt-20"}
              type="submit"
              onClick={(e) => (!text ? popUp(e) : submitName(e))}
            >
              Sign In
            </button>
            {alert ? (
              <p className="heading alert">Server sudah penuh</p>
            ) : (
              // <p className="heading alert">Pastikan nama kamu tidak sama</p>
              ""
            )}
            {game ? (
              <Redirect push to={`/game?name=${text}`} reload={reload} />
            ) : (
              ""
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
