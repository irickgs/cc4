import logo from './logocc.png';
import './App.css';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
      </header>
      <Footer />
    </div>
  );
}

export default App;
