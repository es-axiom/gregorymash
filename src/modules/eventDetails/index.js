import React from "react";
import "./index.scss";

function EventDetails() {
  return (
    <section className="eventDetails">
      <h5>3rd Friday, Every Month || Gregory Park</h5>
      <h4>Time to dust off those moves and get rowdy in the woods.</h4>
      <ul>
        <li>
          <h5>Best Trick</h5>
          <p>
            Find yourself throwing the best whip over the last jump on Tailwind.
            Judged more on style than difficulty.
          </p>
        </li>
        <li>
          <h5>Best Tailwind</h5>
          <p>
            Find your rhythm and show your flow through the Tailwind, style out
            with your own flavor.
          </p>
        </li>
        <li>
          <h5>Roundabout</h5>
          <p>
            Head-to-Head racing. Starting at either Blue or Green, go down them
            both, with a frantic climb up the return trail!
          </p>
        </li>
        <li>
          <h5>Choice Is Yours</h5>
          <p>
            Head-to-Head racing, with a twist. Choose a lane and face your doom.
          </p>
        </li>
      </ul>
    </section>
  );
}

export default EventDetails;
