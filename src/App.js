import './App.css';
import Handform from './HandForm';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Simplified Poker Game Solver</h1>
        <p>Given an ante/check value, a bet value, and the number of cards in a Simplified Poker Game, this program will give the optimal strategies for that game.</p>
        <Handform />
      </div>
    </div>
  );
}

export default App;
