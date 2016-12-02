import React, { Component } from 'react';
import './Select.css';

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
  update( e ){
    this.setState({phone: e.target.value})
  }
  
  render() {
    let items = this.state.items.map(item => {
      return <option id="option" className="item" value={item.Phone} key={item.Entreprise}>{item.Entreprise}</option>
    });
    
    return(
      <div className="Select">  
        <div id="selectTel" onChange={this.update.bind(this)} className="ui compact menu">
          <div id="selector" className="ui simple dropdown item">Choisi ton chemin<i className="dropdown icon"></i><div className="menu">
          {items}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Select;
