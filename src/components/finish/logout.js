import React from "react";
// import { Link, BrowserRouter as Router, Redirect } from "react-router-dom";
import "./finish.css";
import Pokemon from "../pokemon";
const Logout = ({ name }) => {
  //   let reloadRoute = () => {
  //     router.push({ pathname: "/empty" });
  //     router.replace({ pathname: "/route-to-refresh" });
  //   };
  return (
    <div className="selesai">
      <div className="title">
        <h1 style={{ color: "white", marginTop: "-60px" }}>
          {name} telah keluar dari permainan
        </h1>
      </div>
    </div>
  );
};

export default Logout;
