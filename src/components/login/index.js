import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import "./login.css";
import io from "socket.io-client";
import Score from "../score";
import Card from "../card";
import Finish from "../finish/finish";
// import Loading from "../finish/loading";
let socket;

const Login = () => {
  const [name, setName] = useState("");
  const [usersData, setUsersData] = useState([]);
  const [player, setPlayer] = useState("");
  const [oponent, setOponent] = useState("");
  const [scorePlayer, setScorePlayer] = useState(0);
  const [scoreOponent, setScoreOponent] = useState(0);
  const [login, setLogin] = useState(true);
  const [game, setGame] = useState(false);
  const [alert, setAlert] = useState(false);
  const [next, setNext] = useState(false);
  const [finish, setFinish] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitCard, setSubmitCard] = useState(false);
  const [info, setInfo] = useState("");
  const [winner, setwinner] = useState("");
  let vata = [];
  let newScore = 0;
  const ENDPOINT = "https://jajanken-version1.herokuapp.com/";
  // const ENDPOINT = "http://localhost:5000";
  socket = io(ENDPOINT);
  useEffect(() => {
    let lasttime = Date.now();
    // console.log(lasttime);
    // if (lasttime - Date.now() > 1000) {
    console.log("oponent", oponent);
    // if (oponent === "") {
    socket.on("get user", function (data) {
      console.log("connect to socket.io");
      console.log(data);
      // console.log("datauser", data);
      if (data !== "") {
        setUsersData(data);
        // console.log(data);

        data.map((user, i) => {
          // setName(user);
          if (i === 0) {
            const playerData = {
              name: user,
              score: 0,
            };
            setPlayer(user);
            setLoading(true);
          } else if (i === 1) {
            const oponentData = {
              name: user,
              score: 0,
            };
            setLoading(true);
            setOponent(user);
          } else {
            // alert("Server Penuh");
            console.log("server penuh");
          }
        });
      }
      console.log(loading);
    });
    // }
    //
    socket.on("disconnected", function (name) {
      console.log(`${name} keluar dari permainan, permainan selesai`);
      return <Redirect to="/" />;
      // alert(`${name} keluar dari permainan, permainan selesai`);
    });
    // socket.on("connected", function (username) {
    //   setInfo(username + " joined the room.");
    //   console.log(info);
    // });
    if (player !== "" && oponent !== "") {
      // console.log("tes");
      setLogin(false);
      setLoading(false);
      setGame(true);
    }
    // }
  }, [ENDPOINT, game, oponent, loading]);

  useEffect(() => {
    socket.on("game start", function () {
      setGame(true);
      setInfo("Tentukan pilihanmu");
      console.log(info);
    });

    socket.on("tie", function (choices) {
      countdown(choices);

      setTimeout(function () {
        setInfo("Hasil Seri");
      }, 5000);
      console.log(info);

      setSubmitCard(false);
    });

    socket.on("player 1 win", function (choices) {
      countdown(choices, 1);

      // setScorePlayer(scorePlayer);
      newScore = scorePlayer + 1;
      // incrementP(newScore);

      setTimeout(function () {
        // p1win();
        setScorePlayer(scorePlayer + 1);

        setInfo(choices[0]["user"] + " menang!");
        setwinner(choices[0]["user"]);
        console.log(player.name + " menang!");
        console.log(choices[0]["user"] + " menang!");
      }, 5000);

      setSubmitCard(false);
    });

    socket.on("player 2 win", function (choices) {
      countdown(choices, 2);
      // setScoreOponent(scorePlayer);
      newScore = scoreOponent + 1;
      // incrementC(newScore);

      setTimeout(function () {
        // p2win();
        setInfo(choices[1]["user"] + " menang!");
        setScoreOponent(scoreOponent + 1);
        setwinner(choices[1]["user"]);
        console.log(choices[1]["user"] + " menang!");
        // setScoreOponent(scorePlayer);
        console.log(oponent.name + " menang!");
        // $info.append("<br />" + choices[1]["user"] + " wins!");
      }, 5000);

      setSubmitCard(false);
    });

    function countdown(choices, a) {
      // if (a === 1) {
      //   setScorePlayer(scorePlayer);
      // } else {
      //   setScoreOponent(scoreOponent);
      // }
      setTimeout(function () {
        setInfo("3...");
      }, 0);
      setTimeout(function () {
        setInfo("2...");
      }, 1000);
      setTimeout(function () {
        setInfo("1...");
      }, 2000);
      setTimeout(function () {
        setInfo(choices[0]["user"] + " memilih " + choices[0]["choice"] + ".");
      }, 3000);
      setTimeout(function () {
        setInfo(choices[1]["user"] + " memilih " + choices[1]["choice"] + ".");
        setSubmitCard(false);
        setNext(true);
      }, 4000);
    }
    if (scorePlayer === 3 || scoreOponent === 3) {
      setFinish(true);
    }
  }, [player, oponent, info, next]);

  function popUp(e) {
    e.preventDefault();
    setAlert(true);
  }

  function submitName(e) {
    e.preventDefault();

    console.log(name);
    socket.emit("add user", name, function (data) {
      // console.log("add user");
    });
    // console.log("usersData", usersData);
  }
  function submitChoice(choice) {
    console.log("klik");
    if (!submitCard) {
      setInfo(`${name} memilih ${choice}`);
      console.log("saya memilih", choice);
      setSubmitCard(true);
      socket.emit("player choice", name, choice);
    } else {
      console.log("kamu sudah memilih");
      setInfo("kamu sudah memilih");
      // alert("Kamu sudah memilih , Mohon pemain lain memilih");
      // $info.html("You have already made a choice!");
    }
  }
  // function p1win(count) {
  //   setScorePlayer((count) => count + 1);
  // }
  // function p2win(count) {
  //   setScoreOponent((count) => count + 1);
  // }
  return (
    <>
      {/* {redirect ? (
        <Redirect to="/game" user={vata} />
      ) : ( */}
      {login ? (
        <div className="joinOuterContainer" id="userFormArea">
          {loading ? (
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
          )}

          <form id="userForm">
            <div className="joinInnerContainer">
              <h1 className="heading">Join The Game</h1>
              <div>
                <input
                  placeholder="Nama Kamu"
                  className="joinInput"
                  type="text"
                  id="username"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <button
                className={"button mt-20"}
                type="submit"
                onClick={(e) => (!name ? popUp(e) : submitName(e))}
              >
                Sign In
              </button>
              {alert ? (
                <p className="heading alert">
                  Jangan kosongkan kolom Nama kamu
                </p>
              ) : null}
            </div>
          </form>
        </div>
      ) : (
        ""
      )}
      {game ? (
        <div className="outerContainer">
          {/* {player && oponent ? <Loading /> : ""} */}
          <div className="result">
            {/* <div className="listPlayer">
              <h4>Online User</h4>
              <ul className="list-group" id="users">
                {usersData.map((user, i) => {
                  return <li key={i}>{user}</li>;
                })}
              </ul>
            </div> */}
            <Score
              name={name}
              player={player}
              oponent={oponent}
              submitCard={submitCard}
              scorePlayer={scorePlayer}
              scoreOponent={scoreOponent}
              info={info}
              // room={room}
              // scorePlayer={score}
              // scoreComputer={scores}
              // nextRound={() => nextRound()}
              // next={next}
            />
            {/* <p>{hasil ? `Hasil ${hasil}` : "Pilih salah satu"}</p> */}
          </div>
          <Card
            // setScore={setScore}
            setInfo={setInfo}
            submitCard={submitCard}
            submitChoice={submitChoice}
            // setMessage={setMessage}
            // setNext={setNext}
            // name={name}
          />
          {/* {selesai ? <Finish hasil={hasil} name={name} room={room} /> : ""} */}
        </div>
      ) : (
        ""
      )}
      {finish ? <Finish /> : ""}
    </>
  );
};

export default Login;
