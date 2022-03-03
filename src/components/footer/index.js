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
            Gregory Park link
          </a>
        </li>
        <li>
          <a href="about:blank"> Sign Up</a>
        </li>
        {/* TODO: Add document link here or just add content to page */}
        <li>Rules & Guidance</li>
      </ul>

      <Disclaimer />
    </footer>
  );
}

export default Footer;
