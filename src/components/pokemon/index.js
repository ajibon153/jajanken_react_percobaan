import React from "react";
import "./pokemon.css";
const Pokemon = () => {
  return (
    <div className="character_pokemon">
      <div className="section_head">
        <div className="head_base">
          <div className="eye">
            <div className="round">
              <div className="shadow"></div>

              <div className="round_layer"></div>
            </div>
            <div className="coak"></div>
            <div className="pupil">
              <div className="blue">
                <div className="black"></div>
                <div className="white"></div>
              </div>
            </div>
          </div>
          <div className="nose"></div>
          <div className="light1"></div>
          <div className="light2"></div>
          <div className="shadow1"></div>
          <div className="shadow2"></div>
        </div>
        <div className="mouth_section">
          <div className="mouth">
            <div className="light"></div>
          </div>
          <div className="coak_front_top"></div>
          <div className="coak_front_bottom"></div>
          <div className="coak_back_bottom_tambal"></div>
        </div>
      </div>
      <div className="section_body">
        <div className="body_base">
          <div className="buletan"></div>
          <div className="buletan2"></div>
        </div>
        <div className="shadow1"></div>
        <div className="shadow2"></div>
        <div className="light"></div>
        <div className="light2"></div>
        <div className="hand">
          <div className="light"></div>
        </div>
        <div className="hand_back"></div>

        <div className="body_upper">
          <div className="shadow"></div>
          <div className="midle">
            <div className="light_inner"></div>
          </div>
          <div className="front">
            <div className="light_inner"></div>
          </div>
          <div className="back">
            <div className="light_inner"></div>
          </div>
          <div className="layer"></div>
          <div className="tail">
            <div className="one">
              <div className="bulu_hide"></div>
              <div className="bulu1"></div>
              <div className="bulu2"></div>
            </div>
            <div className="two">
              <div className="bulu_hide"></div>
              <div className="bulu1"></div>
              <div className="bulu2"></div>
            </div>
          </div>
        </div>
        <div className="front_body"></div>
      </div>
      <div className="section_foot">
        <div className="kanan">
          <div className="layer"></div>
          <div className="lutut"></div>
          <div className="kaki">
            <div className="light"></div>
            <div
              className="jari"
              style={{ left: "78px", top: "13px", transform: "rotate(-53deg)" }}
            ></div>
            <div
              className="jari"
              style={{
                left: "63px",
                top: "-18px",
                transform: "rotate(-53deg)",
              }}
            ></div>
          </div>
        </div>
        <div className="kiri">
          <div className="layer"></div>

          <div className="lutut"></div>
          <div className="kaki">
            <div className="light"></div>
            <div
              className="jari"
              style={{ left: "60px", top: "8px", transform: "rotate(-55deg)" }}
            ></div>
            <div
              className="jari"
              style={{
                left: "43px",
                top: "-25px",
                transform: "rotate(-54deg)",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
