import "./index.scss";

function Address({ name, url }) {
  return (
    <a href={url} openInNewTab="true" target="_blank" rel="noopener noreferrer">
      {name}
    </a>
  );
}

export default Address;
