import './App.css';
import Header from './Components/Header';
import Body from './Components/Body'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Body />
        <Footer />
      </header>
    </div>
  );
}

export default App;
