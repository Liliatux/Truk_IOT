import React, { Component } from 'react';


class Select extends Component {
  constructor(){
    super();
    this.state = {items:[]}
  }
  componentDidMount(){
    fetch ('../image/mapInfos.json')
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
      
      <select id="selectTel" onChange={this.update.bind(this)} >
      {items}
      </select>
      </div>
    );
  }
}

export default Select;
