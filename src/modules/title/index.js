import React from "react";
import "./index.scss";
import { main } from "../../copy";

function Title() {
  return (
    <section className="titleSection">
      <h1 className="mainTitle">{main.title}Gregory MASH</h1>
      <h4 className="showUp">Show up,</h4>
      <h4>If you dare.</h4>
      <img
        height="500"
        width="300"
        alt=""
        src={process.env.PUBLIC_URL + "/hider.svg"}
      />
    </section>
  );
}

export default Title;
