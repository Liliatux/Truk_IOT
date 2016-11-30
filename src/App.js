import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {items:[]}
  }
  componentWillMount(){
    fetch ('/mapInfos.json')
    .then( direrction => direrction.json())
    .then( ({direrction: items}) => this.setState({items}))
  }
  render() {
    let items = this.state.items
    return (
      <div className="App">
      <select>
      {items.map(item =>
        <option key={item.Entreprise} > {item.Entreprise}</option>)}
      </select>
      </div>
      );
  }
}

export default App;
