import logo from './logo.svg';
import './App.css';
import classes from './classes';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      class: 'Warrior',
      spec: 'Arms',
    };
    this.handleClassSelect = this.handleClassSelect.bind(this);
    this.handleSpecSelect = this.handleSpecSelect.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClassSelect(e) {
    console.log("class changed!");
    this.setState({
      class: e.target.value,
      spec: classes[e.target.value][0]
    });
  }
  handleSpecSelect(e) {
    console.log("spec changed!");
    this.setState({
      spec: e.target.value
    });
  }
  handleClick(e) {
    console.log(`Generating for ${this.state.class}, ${this.state.spec}!`);
  }
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo-left" />
          <h1 className="App-title">ULTIMATE BRAVERY</h1>
          <img src={logo} className="App-logo-right" />
        </header>
        <form className="App-controls">
          <select name="class-select" value={this.state.class} onChange={this.handleClassSelect}>
            {/** option for each key in classes */}
            {Object.keys(classes).map(key => (
              <option value={key}>
                {key.toUpperCase()}
              </option>
            ))}
          </select>
          <select name="spec-select" value={this.state.spec} onChange={this.handleSpecSelect}>
            {/** option for each spec of the selected class */}
            {classes[this.state.class].map(spec => (
              <option value={spec}>
                {spec.toUpperCase()}
              </option>
            ))}
          </select>

          <input type="button" name="button" value="ROLL" onClick={this.handleClick} />
        </form>
        <div className="App-body">
          
        </div>
      </div>
    );
  }
}

export default App;

/**
 * <form>
          <input type="select">  
            {Object.keys(classes).map(key => (
              <option>{key}</option>
            ))}
          </input>
        </form>
 */
