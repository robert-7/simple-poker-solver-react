//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="container">
        <h1>Simplified Poker Game Solver</h1>
        <p>Given an ante/check value, a bet value, and the number of cards in a Simplified Poker Game, this program will give the optimal strategies for that game.</p>
        <div id="form">
          <h2>Horizontal form</h2>

          <div class="form-group">
            <label class="control-label col-sm-2">Enter Ante Value (NOT IMPLEMENTED YET):</label>
            <div class="col-sm-10">
            <input class="form-control" id="ante" placeholder="Enter ante value"></input>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2">Enter Bet Value (NOT IMPLEMENTED YET):</label>
            <div class="col-sm-10">
            <input class="form-control" id="bet" placeholder="Enter bet value"></input>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2">Enter # of Cards (NOT IMPLEMENTED YET):</label>
            <div class="col-sm-10">
            <input class="form-control" id="numCards" placeholder="Enter # of cards"></input>
            </div>
          </div>
          <div class="form-group">        
            <div class="col-sm-offset-2 col-sm-10">
            <button id="ok" type="button">Click Me!</button>
            </div>
          </div>
        </div>

        <div id="table">
          <h2>Striped Rows</h2>
          <p>The .table-striped class adds zebra-stripes to a table:</p>            
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Player 1 Strategy</th>
                <th>Player 2 Strategy</th>
                <th>Player 1's Payoff</th>
              </tr>
            </thead>
            <tbody id="rows">
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
