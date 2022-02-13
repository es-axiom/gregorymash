import "./index.scss";
import { Address } from "../../modules";

function Header() {
  return (
    <section class="headercontent">
      <h1>Gregory Mash</h1>
      <h4>
        An event for everyone to flex their bike finesse at{" "}
        <Address
          name="Gregory Park"
          link="https://www.fayetteville-ar.gov/3552/Gregory-Park"
        />
      </h4>
      {/* <img
        alt=""
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWoCsXyeuf7oTtiVrUpx_djRD7WudbZnnBIRCQ9x9O7bGhDMiiJO-daaoviz9xDsZ8iT4&usqp=CAU"
        height="200"
        width="200"
      /> */}
    </section>
  );
}

export default Header;
