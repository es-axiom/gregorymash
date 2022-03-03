import { Header, Main, Footer } from "./components";

function App() {
  return (
    <div class="app">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Hubballi&display=swap"
          rel="stylesheet"
        />
      </head>
      <Header />
      <Main />

      {/* Includes disclaimer */}
      <Footer />
    </div>
  );
}

export default App;
