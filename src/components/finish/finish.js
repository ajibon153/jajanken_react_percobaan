import React from "react";
import { Link } from "react-router-dom";
import "./finish.css";
const Finish = ({ winner }) => {
  //   let reloadRoute = () => {
  //     router.push({ pathname: "/empty" });
  //     router.replace({ pathname: "/route-to-refresh" });
  //   };
  return (
    <div className="selesai">
      <div className="container-popup">
        <div className="box">
          <div className="content">
            <div className="title">
              <h1>Permainan selesa selesai</h1>
            </div>
            <div className="body">Pemenangnya adalah {winner}</div>
            <div className="footer">
              {/* <Redirect
                // onClick={this.reloadRoute()}
                to={`/game?name=${name}&room=${room}`}
              >
                <button className="button mt-20">Main Lagi</button>
              </Redirect> */}
              <Link to="/">
                <button className="buttonFn mt-20 logout">Selesai</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finish;
