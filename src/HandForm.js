import React from "react";
import { ToggleButtonGroup } from "react-bootstrap";
import { ToggleButton } from "react-bootstrap";

class HandForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      algorithm: 1,
      anteValue: 0,
      betValue: 0,
      numCards: 0,
      answer: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.setRadioValue = this.setRadioValue.bind(this);
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  setRadioValue(value) {
    this.setState({ algorithm: value });
  }

  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          Poker Game:
          <ToggleButtonGroup name="games" type="radio" value={this.state.algorithm} onChange={this.setRadioValue}>
            <ToggleButton id="tbg-radio-1" value={1}>
              Borel
            </ToggleButton>
            <ToggleButton id="tbg-radio-2" value={2}>
              Von Neumann
            </ToggleButton>
            <ToggleButton id="tbg-radio-3" value={3}>
              Game3 3
            </ToggleButton>
          </ToggleButtonGroup>
          <div className="form-group">
            <label className="control-label col-sm-2">Enter Ante Value:</label>
            <div className="col-sm-10">
              <input
                className="form-control"
                id="ante"
                placeholder="Enter ante value"
                value={this.state.anteValue}
              ></input>
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2">Enter Bet Value:</label>
            <div className="col-sm-10">
              <input
                className="form-control"
                id="bet"
                placeholder="Enter bet value"
                value={this.state.betValue}
              ></input>
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2">Enter # of Cards:</label>
            <div className="col-sm-10">
              <input
                className="form-control"
                id="numCards"
                placeholder="Enter # of cards"
                value={this.state.numCards}
              ></input>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>

        <div id="table">
          <h2>Results</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Player 1 Strategy</th>
                <th>Player 2 Strategy</th>
                <th>Player 1's Payoff</th>
              </tr>
            </thead>
            <tbody id="rows"></tbody>
          </table>
        </div>
      </section>
    );
  }
}

export default HandForm;
