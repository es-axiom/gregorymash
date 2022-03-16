import "./index.scss";

function Disclaimer() {
  return (
    <article className="disclaimer">
      <p>
        This community event is hosted with a goal of mindfulness and
        inclusiveness, and all participants and observers are expected to behave
        with respect for the park, facility, and participants.
      </p>
      <p>
        You will be asked to sign a waiver to participate, and it is expected to
        act in good faith to all other attendees, organizers, and volunteers.
      </p>

      <p>
        Link to waiver:{" "}
        <a href="about:blank" rel>
          Click to Sign
        </a>
      </p>
    </article>
  );
}

export default Disclaimer;
