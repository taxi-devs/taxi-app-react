import "./App.css";

import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Home />
        <Footer />
      </header>
    </div>
  );
}

export default App;
