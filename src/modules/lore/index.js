import React from "react";
import "./index.scss";
import { lore } from "../../copy";

function Lore() {
  return (
    <section>
      <h4>{lore.title}</h4>
      {lore.description.map((l) => (
        <p>{l}</p>
      ))}
    </section>
  );
}

export default Lore;
