import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter';
import Buttons from './components/Buttons';

class App extends Component {
  state = {
    counters: [0]
  }

  componentDidMount() {
    this.printCurrentState();
  }

  editCounters = (action) => {
    let updatedCounters = this.state.counters;

    switch(action) {
      case 'add':
        updatedCounters.push(0);
        break;
      case 'remove':
        updatedCounters.splice(-1, 1);
        break;
      default:
        console.log('Não aconteceu nada.');
    }
    this.setState({ counters: updatedCounters }, this.printCurrentState);
  }

  operate = (index, value) => {
    let counters = this.state.counters;
    counters[index] = counters[index] + value;
    this.setState({ counters }, function () {
      this.printCurrentState();
    });
  }

  printCurrentState() {
    console.log("-------------");
    console.log("current state:");
    console.log(this.state.counters);
  }

  render() {
    return (
      <div className="App">
        {this.state.counters.map((counter, index) => (
          <div key={index}>
            <Counter counter={counter} index={index} operate={this.operate} />
          </div>
        ))}
        <Buttons editCounters={this.editCounters} />
      </div>
    );
  }
}

export default App;
