import React from "react";
import "./index.scss";
import { details } from "../../copy";

function EventDetails() {
  const { overline, title, events } = details;
  return (
    <section className="eventDetails">
      <h5>{overline}</h5>
      <h4>{title}</h4>
      <ul>
        {events.map(({ name, description }) => (
          <li>
            <h5>{name}</h5>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default EventDetails;
