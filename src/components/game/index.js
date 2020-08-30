import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

// import Kertas from "../../assets/new/paper.png";
// import Batu from "../../assets/new/rock.png";
// import Gunting from "../../assets/new/scissors.png";

import Score from "../score";
import Card from "../card";
import "./game.css";
// import Finish from "../finish/finish";

let socket;

const Game = ({ user }) => {
  const [name, setName] = useState("");
  console.log("game ", user);
  // const [player, setPlayer] = useState([]);
  // const [oponent, setOponent] = useState([]);

  // const [message, setMessage] = useState("");
  // const [messages, setMessages] = useState([]);

  // const [next, setNext] = useState(false);

  // const [score, setScore] = useState("");
  // const [scores, setScores] = useState([]);
  // useEffect(() => {
  //   const { name, room } = queryString.parse(location.search);
  //   setRoom(room);
  //   setName(name);
  //   console.log(name);
  //   console.log(room);
  //   socket = io(ENDPOINT);

  //   socket.emit("join", { name, room }, ({ error }) => {
  //     if (error) {
  //       alert(error);
  //       window.location = "/";
  //     }
  //   });
  //   return () => {
  //     socket.emit("disconnect");
  //     socket.off();
  //   };
  // }, [ENDPOINT, location.search]);

  // useEffect(() => {
  //   socket.on("message", (message) => {
  //     setMessages([...messages, message]);
  //   });
  //   console.log(messages);
  // const asda = messages.map((mes, i) => {
  //   if(mes.useData && !player){
  //     setPlayer(mes.userData);
  //   } else if(mes.useData && player){
  //     setOponent(mes.)
  //   }
  //   console.log("mse", mes.userData);
  // });

  //   socket.on("roomData", ({ users }) => {
  //     // setUsers(users);
  //   });
  // }, [messages]);

  // const sendMessage = (event) => {
  //   // event.preventDefault();
  //   // console.log("event", event);
  //   setMessage(event);
  //   // console.log("message", message);
  //   if (message != "") {
  //     socket.emit("sendMessage", event, () => setMessage(""));
  //   }
  //   console.log(messages);
  // };

  // function nextRound() {
  //   document.getElementById("computer").classList.remove("show");
  //   setTimeout(function () {
  //     const getElement = document.querySelectorAll(".choice");
  //     getElement.forEach(function (el) {
  //       el.removeAttribute("class");
  //       el.classList.add("choice");
  //     });
  //     // setScorePlayer(scorePlayer);
  //     // setScoreComputer(scoreComputer);
  //     // setHasil("");
  //   }, 500);
  //   // setPlay(true);
  //   setNext(false);
  //   // setMusuhCard("");
  // }
  return (
    <div className="outerContainer">
      <div className="result">
        <div className="listPlayer">
          <h4>Online User</h4>
          <ul
            className="list-group"
            id="users"
            // dangerouslySetInnerHTML={{ __html: user.liUser }}
          ></ul>
        </div>
        {/* <Score
          name={name}
          room={room}
          scorePlayer={score}
          scoreComputer={scores}
          nextRound={() => nextRound()}
          // next={next}
        /> */}

        {/* <p>{hasil ? `Hasil ${hasil}` : "Pilih salah satu"}</p> */}
      </div>
      {/* <Card
        setScore={setScore}
        sendMessage={sendMessage}
        setMessage={setMessage}
        setNext={setNext}
        name={name}
      /> */}
      {/* {selesai ? <Finish hasil={hasil} name={name} room={room} /> : ""} */}
    </div>
  );
};

export default Game;
