import { Header, Footer, Main } from "..";
const { render } = require("@testing-library/react");

describe("components are able to render", () => {
  it("renders header successfully", () => {
    render(<Header />);
  });
  it("renders footer successfully", () => {
    render(<Footer />);
  });
  it("renders main successfully", () => {
    render(<Main />);
  });
});
