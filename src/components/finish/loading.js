import React from "react";
// import { Link, BrowserRouter as Router, Redirect } from "react-router-dom";
import "./finish.css";
import Pokemon from "../pokemon";
const Loading = () => {
  //   let reloadRoute = () => {
  //     router.push({ pathname: "/empty" });
  //     router.replace({ pathname: "/route-to-refresh" });
  //   };
  return (
    <div className="selesai">
      <div className="title">
        <h1 style={{ color: "white", marginTop: "-60px" }}>
          Menunggu Pemain lain...
        </h1>
      </div>
      <div className="pokemon">
        <Pokemon />
      </div>
    </div>
  );
};

export default Loading;
