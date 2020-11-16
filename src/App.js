import './App.css';
import Header from './components/Header';
import Body from './components/Body'
import Footer from './components/Footer'

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
