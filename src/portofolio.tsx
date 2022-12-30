import React from "react";
import './cvku.css';
import "./cvku.css";
import Alertuser from "./alert";
const Foto = require("./pict/Profil.jpg");


function Porto() {
  return (
        <div className="cvku">
        <div id="pict">
          <img src={Foto} className="Profile"></img>
          <div id="line"></div>
        </div>

        <div className="nama">
          <h1>
            <span>Gde Ngurah </span>Yudiantara
          </h1>
        </div>

        <div id="title">
          <h2>Software Engineering Major.</h2>
        </div>

        <div className="deskripsi">
        <div id="porto">
            <h1>Ryuku Ramen</h1>
            <p>
            RyukuRamen is my first website project,inspired by a ramen restaurant and it's
concept took a japanese traditional store.
            </p>

            <a href="https://ryuuxy.github.io/RyukuRamen/">Link</a>
          </div>
        
          <div id="line2"></div>

        <div id="contact">
        <Alertuser />
        </div>
        </div>
    </div>
  );
}

export default Porto;
