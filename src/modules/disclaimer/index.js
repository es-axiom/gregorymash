import "./index.scss";
import { disclaimer } from "../../copy";

function Disclaimer() {
  return (
    <article className="disclaimer">
      <h5>{disclaimer.title}</h5>
      {disclaimer.description.map((d, i) => (
        <p key={i}>{d}</p>
      ))}
    </article>
  );
}

export default Disclaimer;
