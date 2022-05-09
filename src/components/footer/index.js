import "./index.scss";
import { Disclaimer } from "../../modules";

function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.fayetteville-ar.gov/3552/Gregory-Park"
          >
            Gregory Park
          </a>
        </li>
        <li>
          <a href="https://forms.gle/gAjU2wPHsFJZ8xWFA"> Sign Up</a>
        </li>
      </ul>

      <Disclaimer />
    </footer>
  );
}

export default Footer;
