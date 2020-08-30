import React from "react";
// import queryString from "query-string";
// import io from "socket.io-client";

import Kertas from "../../assets/new/paper.png";
import Batu from "../../assets/new/rock.png";
import Gunting from "../../assets/new/scissors.png";

import "./card.css";

// let socket;

const Card = ({ setInfo, submitChoice, submitCard }) => {
  // const [compName, setCompName] = useState("");
  // const [hasil, setHasil] = useState("");
  // const [scorePlayer, setScorePlayer] = useState(0);
  // const [scoreComputer, setScoreComputer] = useState(0);

  // const [playerCard, setPlayerCard] = useState("");
  // const [musuhCard, setMusuhCard] = useState("");
  // // const [timeOut, setTimeOut] = useState(false);
  // const [play, setPlay] = useState(true);
  // const [show, setShow] = useState(false);
  // // const [next, setNext] = useState(false);
  // const [selesai, setSelesai] = useState(false);

  // const [getHasil, setGetHasil] = useState(false);
  // const [getRandomChoice, setGetRandomChoice] = useState(false);
  // const totalScore = 3;
  let inlineBlock;
  // let batuGeser, kertasGeser, guntingGeser;
  // let isSentByCurrentUser = false;

  // const trimedName = name.trim().toLowerCase();
  // if (user === trimedName) {
  //   isSentByCurrentUser = true;
  // }

  // const ENDPOINT = "https://project-chat-application.herokuapp.com/";

  //STAR Play Game

  // if (scorePlayer >= 3 || scoreComputer >= 3) {
  //   console.log("Reastart game or stop");
  // } else if (play) {
  //   // console.log("play ", play);
  //   const pilihanPlayer = document.querySelectorAll(".choice img");
  //   pilihanPlayer.forEach(function (pil) {
  //     pil.addEventListener("click", function () {
  //       setPlay(false);
  //       random();
  //       const pilihanPlayer = pil.className;
  //       setPlayerCard(pilihanPlayer);
  //       let pilihanComputer;
  //       if (musuhCard === "") {
  //         pilihanComputer = getRandomChoice;
  //         setMusuhCard(pilihanComputer);
  //       }
  //       console.log(pilihanComputer);
  //       animateChoice(pilihanComputer, pilihanPlayer, pil.id);
  //       setTimeout(function () {
  //         const hasil = getHasil(pilihanPlayer, pilihanComputer);
  //         const imgComp = document.querySelector(".computer-choices");
  //         const code = translate(pilihanComputer);
  //         imgComp.setAttribute("src", `${code}`);

  //         setHasil(hasil);
  //         setNext(false);
  //         if (scorePlayer >= 2 || scoreComputer >= 2) {
  //           setSelesai(true);
  //           console.log("Reastart game or stop");
  //         }
  //       }, 3050);
  //     });
  //   });
  // }
  // //END Play Game

  // function getHasil(play, comp) {
  //   if (play == comp) return "SERI";
  //   if (play == "batu") {
  //     if (comp == "gunting") {
  //       let newScorePlayer = scorePlayer + 1;
  //       setScorePlayer(newScorePlayer);
  //       return "MENANG !";
  //     } else if (comp == "kertas") {
  //       let newScoreComputer = scoreComputer + 1;
  //       setScoreComputer(newScoreComputer);
  //       return "KALAH !";
  //     }
  //   }

  //   if (play == "kertas") {
  //     if (comp == "batu") {
  //       let newScorePlayer = scorePlayer + 1;
  //       setScorePlayer(newScorePlayer);
  //       return "MENANG !";
  //     } else if (comp == "gunting") {
  //       let newScoreComputer = scoreComputer + 1;
  //       setScoreComputer(newScoreComputer);
  //       return "KALAH !";
  //     }
  //   }
  //   if (play == "gunting") {
  //     if (comp == "kertas") {
  //       let newScorePlayer = scorePlayer + 1;
  //       setScorePlayer(newScorePlayer);
  //       return "MENANG !";
  //     } else if (comp == "batu") {
  //       let newScoreComputer = scoreComputer + 1;
  //       setScoreComputer(newScoreComputer);
  //       return "KALAH !";
  //     }
  //   }
  // }
  // function getRandomChoice() {
  //   const comp = Math.random();
  //   console.log(comp);
  //   if (comp >= 0 && comp < 0.34) {
  //     return "batu";
  //   } else if (comp >= 0.34 && comp <= 0.67) {
  //     return "kertas";
  //   } else {
  //     return "gunting";
  //   }
  // }

  // function animateChoice(com, play) {
  //   let element = document.getElementById(play);
  //   const elementPlayer = document.querySelectorAll("#player .choice");

  //   elementPlayer.forEach(function (pil) {
  //     pil.classList.remove("chosed");
  //     pil.classList.add("fade-out");
  //     pil.addEventListener("click", function () {
  //       pil.classList.remove("fade-out");
  //       const idComp = document.getElementById("computer");
  //       inlineBlock = {
  //         display: "inline-block",
  //       };
  //       setTimeout(function () {
  //         setShow(true);
  //         idComp.classList.add("show");
  //         document.getElementById("batu").classList.add("geserBatu");
  //         document.getElementById("kertas").classList.add("geserKertas");
  //         document.getElementById("gunting").classList.add("geserGunting");
  //         // idComp.classList.remove("fade-out");

  //         batuGeser = {
  //           left: "249px",
  //         };
  //         kertasGeser = {
  //           left: "-195px",
  //         };
  //         guntingGeser = {
  //           left: "-640px",
  //         };
  //       }, 1000);
  //     });
  //     //   return false;
  //   });
  //   element.classList.add("chosed");
  // }

  // function translate(kode) {
  //   if (kode == "gunting") return `${Gunting}`;
  //   if (kode == "kertas") return `${Kertas}`;
  //   if (kode == "batu") return `${Batu}`;
  // }

  // function random() {
  //   const imgComp = document.querySelector(".computer-choices");
  //   const gambar = [`${Gunting}`, `${Kertas}`, `${Batu}`];
  //   let i = 0;
  //   const start = new Date().getTime();
  //   setInterval(function () {
  //     if (new Date().getTime() - start > 3000) {
  //       // clearInterval;
  //       return;
  //     }
  //     imgComp.setAttribute("src", gambar[i++]);
  //     if (i == gambar.length) {
  //       i = 0;
  //     }
  //   }, 100);
  // }
  function start(el) {
    // if (!submitCard) {
    submitChoice(el);
    // } else {
    // setInfo("kamu sudah memilih, mohon tunggu player lain memilih");
    // }
  }
  return (
    <>
      {/* {isSentByCurrentUser ? ( */}
      <div className="choices" id="player">
        <div
          className="choice"
          id="batu"
          // onMouseOver={() => setMessage("batu")}
          onClick={() => start("batu")}
        >
          <img src={Batu} className="batu" alt="ROCK" />
        </div>
        <div
          className="choice"
          id="kertas"
          // onMouseOver={() => setMessage("kertas")}
          onClick={() => start("kertas")}
        >
          <img src={Kertas} className="kertas" alt="PAPER" />
        </div>
        <div
          className="choice"
          id="gunting"
          // onMouseOver={() => setMessage("gunting")}
          onClick={() => start("gunting")}
        >
          <img src={Gunting} className="gunting" alt="SCISSORS" />
        </div>
        <div id="computer" style={inlineBlock}>
          <img src={Gunting} className="computer-choices" />
        </div>
      </div>
      {/* ) : (
        ""
      )} */}
    </>
  );
};

export default Card;
