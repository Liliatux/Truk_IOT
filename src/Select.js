import React, { Component } from 'react';
import './App.css';

class Select extends Component {
  constructor(){
    super();
    this.state = {items:[]}
  }
  componentDidMount(){
    fetch ('/mapInfos.json')
    .then( direrction => direrction.json())
    .then( ({direrction: items}) => this.setState({items}))
  }
  render() {
    let items = this.state.items.map(item => {
        return <option key={item.Entreprise}>{item.Entreprise}</option>
    });
    
    return(
      <div className="Select">
        <select>
          {items}
        </select>
      </div>
    );
  }
}

export default Select;
