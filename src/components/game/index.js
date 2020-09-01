import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

// import { Redirect } from "react-router-dom";

import Card from "../card";
import Score from "../score";
import Finish from "../finish/finish";
import Loading from "../finish/loading";
import Logout from "../finish/logout";
import "./game.css";

let socket;

const Game = ({ location, reload }) => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);
  const [player, setPlayer] = useState("");
  const [oponent, setOponent] = useState("");
  const [scorePlayer, setScorePlayer] = useState(0);
  const [scoreOponent, setScoreOponent] = useState(0);
  const [info, setInfo] = useState("");
  const [next, setNext] = useState(false);
  const [getData, setgetData] = useState(false);
  const [logout, setLogout] = useState(false);
  const [finish, setFinish] = useState(false);
  const [submitCard, setSubmitCard] = useState(false);
  const [calculating, setcalculating] = useState(false);
  const [winner, setWinner] = useState("");
  let positionChoice;

  // const ENDPOINT = "https://jajanken-version1.herokuapp.com/";
  const ENDPOINT = "http://localhost:5000";

  socket = io.connect(ENDPOINT, {
    allowUpgrades: true,
    transports: ["websocket", "polling"],
    // enabledTransports: ["websocket"],
  });
  useEffect(() => {
    window.onbeforeunload = confirmExit();
    function confirmExit() {
      if (reload) {
        alert("Apakah kamu yakin ingin keluar dari game ?");
        window.location = "/";
      }
      // setreload(true);
    }

    const { name } = queryString.parse(location.search);
    setName(name);
    let payload = {
      method: "add user",
      name,
      score: 0,
    };
    socket.emit("send message", payload, function (data) {
      console.log("user baru telah di tambahkan");
      const { name, player, score, error } = data;
      if (player == "one") {
        setPlayer(data);
      }
      if (player == "two") {
        setOponent(data);
      }
      if (error != undefined) {
        alert(error);
        window.location.href = "/";
      }
    });
    if (
      (player !== "" || oponent !== "") &&
      performance.navigation.type === 1
    ) {
      window.location.href = "/";
    }
  }, []);

  socket.on("disconnected", function () {
    let user = checkPosition();
    // setName(name);
    console.log(`Player ${user} keluar dari permainan, permainan selesai`);
    // return <Redirect to="/" />;
    // alert(`${user} keluar dari permainan, permainan selesai`);
    window.location = "/";
    setLoading(false);
    setLogout(true);
  });

  socket.on("get user", function (data) {
    console.log("connect to socket.io");
    data.map((user, i) => {
      if (i == 0) {
        const playerData = {
          name: user.name,
          score: 0,
          player: "one",
        };
        setPlayer(playerData);
        setLoading(true);
      } else if (i == 1) {
        const oponentData = {
          name: user.name,
          score: 0,
          player: "two",
        };
        setOponent(oponentData);
        setLoading(false);
      }
      // else {
      //   alert("Server Penuh");
      //   console.log("server penuh");
      // }
    });
  });

  useEffect(() => {
    socket.on("tie", function (choices) {
      countdown(choices);

      setTimeout(function () {
        setInfo("Hasil Seri");
      }, 5000);

      setSubmitCard(false);
    });

    socket.on("player 1 win", function (choices) {
      countdown(choices, 1);
    });

    socket.on("player 2 win", function (choices) {
      countdown(choices, 2);
    });

    function countdown(choices, a) {
      setcalculating(false);
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
        setInfo(
          choices[0][0]["name"] + " memilih " + choices[0][0]["choice"] + "."
        );
      }, 3000);
      setTimeout(function () {
        setInfo(
          choices[0][1]["name"] + " memilih " + choices[0][1]["choice"] + "."
        );
      }, 4000);
      setTimeout(function () {
        if (a == 1) {
          setScorePlayer(scorePlayer + 1);
          setInfo(choices[0][0]["name"] + " menang!");
          // setWinner(player.name);
          console.log(choices[0][0]["name"] + " menang!");
        } else {
          setScoreOponent(scoreOponent + 1);
          setInfo(choices[0][1]["name"] + " menang!");
          // setWinner(oponent.name);
          console.log(choices[0][1]["name"] + " menang!");
        }

        setTimeout(function () {
          const sethewinner = checkPosition();
          console.log("cek winner ", sethewinner);
        }, 1000);

        setgetData(false);
        setSubmitCard(false);
        setNext(true);
      }, 5000);
    }
  }, [submitCard, winner]);

  function checkPosition() {
    if (scorePlayer >= 2 || scoreOponent >= 2) {
      if (scorePlayer > 3) {
        setWinner(player.name);
      } else if (scoreOponent > 3) {
        console.log("winner 2,oponent.name");
        setWinner(oponent.name);
      }
      setFinish(true);
    }
  }
  function checkPosition() {
    console.log("name musu", name);
    console.log("name player", player.name);
    console.log("name oponent", oponent.name);
    if (name == player.name) {
      positionChoice = player.player;
      return positionChoice;
    } else if (name == oponent.name) {
      positionChoice = oponent.player;
      return positionChoice;
    } else {
      console.log("recheck");
      checkPosition();
      // console.log("musuh telah meninggalkan lapangan permainan");
    }
  }

  // useEffect(()=>)
  function submitChoice(choice) {
    setNext(false);
    console.log("submit pilihan ke server ....");
    if (!submitCard) {
      console.log(submitCard);
      setInfo(`${name} memilih ${choice}`);
      console.log("payload");
      let payload = {
        method: "player choice",
        name,
        player: checkPosition(),
        choice,
      };
      setcalculating(true);
      socket.emit("send message", payload, function (data) {
        const hasil = data;
        console.log("hasil janken", hasil);
        setgetData(true);
        payload = "";
      });
      // setTimeout(() => {
      //   if (!getData) {
      //     console.log("resend choice respon");
      //     socket.emit("send message", payload, function (data) {
      //       const hasil = data;
      //       console.log("hasil janken", hasil);
      //       setgetData(true);
      //     });
      //   }
      // }, 10000);
      setSubmitCard(true);
    } else {
      setInfo("kamu sudah memilih");
    }
  }
  function funcSetNext() {
    console.log("next round");
    setNext(false);
  }
  return (
    <div className="outerContainer">
      <div className="outerContainer">
        {/* {player && oponent ? <Loading /> : ""} */}
        <div className="result">
          {/* {calculating ? (
            <div style={{ position: "absolute" }}>
              {" "}
              <img src={LoadingGif} /> <h5>kalkulasi hasil di server</h5>{" "}
            </div>
          ) : (
            ""
          )} */}
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
            next={next}
            funcSetNext={funcSetNext}
            calculating={calculating}
          />
        </div>
        <br />
        <br />
        <Card
          setInfo={setInfo}
          submitCard={submitCard}
          submitChoice={submitChoice}
        />
      </div>
      {finish ? <Finish winner={winner} /> : ""}
      {loading ? <Loading /> : ""}
      {logout ? <Logout name={name} /> : ""}
    </div>
  );
};

export default Game;
