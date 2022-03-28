import React from "react";
import "./index.scss";
import { support } from "../../copy";

function Support() {
  const { title, patrons, thanks } = support;
  return (
    <section className="support">
      <h4>{title}</h4>
      <ul>
        {patrons.map((p) => (
          <li>{p}</li>
        ))}
      </ul>
      <p>{/* List out sponsors and donors here as they come */}</p>
      <p>{thanks}</p>
    </section>
  );
}

export default Support;
