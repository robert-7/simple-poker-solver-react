import React from "react";
import { ToggleButtonGroup } from "react-bootstrap";
import { ToggleButton } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

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
    this.setAnteValue = this.setAnteValue.bind(this);
    this.setBetValue = this.setBetValue.bind(this);
    this.setNumCards = this.setNumCards.bind(this);
  }

  handleSubmit(event) {
    // why should we have to disable something that should be auto-disabled?
    event.preventDefault();
    alert("A name was submitted: " + this.state.value);
  }

  setRadioValue(value) {
    this.setState({ algorithm: value });
  }

  setAnteValue(event) {
      this.setState({ anteValue: event.target.value });
  }

  setBetValue(event) {
      this.setState({ betValue: event.target.value });
  }

  setNumCards(event) {
      this.setState({ numCards: event.target.value })
  }

  render() {
    return (
      <section>
        <Form onSubmit={this.handleSubmit}>
          <ToggleButtonGroup
            name="games"
            type="radio"
            value={this.state.algorithm}
            onChange={this.setRadioValue}
          >
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

          <Form.Group className="mb-3" controlId="handform.Ante">
            <Form.Label>Ante Value:</Form.Label>
            <Form.Control type="number" placeholder="0" onChange={this.setAnteValue}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="handform.Bet">
            <Form.Label>Bet Value:</Form.Label>
            <Form.Control type="number" placeholder="0" onChange={this.setBetValue}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="handform.Deck">
            <Form.Label>Number of Cards In Deck:</Form.Label>
            <Form.Control type="number" placeholder="0" onChange={this.setNumCards}/>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

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
