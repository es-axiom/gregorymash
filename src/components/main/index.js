import "./index.scss";
import { Lore, EventDetails, Support } from "../../modules";

function main() {
  return (
    <section className="maincontent">
      <Lore />
      <EventDetails />
      <Support />
    </section>
  );
}

export default main;
