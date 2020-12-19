import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <div className="App-name">Smart City Solution</div>
      <Button onClick="ad1">1/1</Button>
      <Button className="ad2">1/2</Button>
      <Button className="ad3">1/3</Button>
      <Button className="ad4">1/4</Button>
      <Button className="ad5">1/5</Button>
      <Button className="ad6">1/6</Button>
      <Button className="ad7">1/7</Button>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
