import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ChangeStatus} from '../actions/index';
import donnees from './donnees';
import {UpdateStage} from '../actions';

class Select extends Component {
  constructor(){
    super();
    this.state = {items:[]}
  }
  componentDidMount(){
   this.setState({
      items: donnees
   })
  }
  update( e ){
    this.props.ChangeStatus(this.props.global, JSON.parse(e.target.value));
    this.props.UpdateStage(this.props.stage, false);
  }
  
  render() {
    let items = this.state.items.map(item => {
      let tab = JSON.stringify([item.Phone,item.Entreprise,item.floor,item.rdc]);
      return <option id="option"  className="item" value={tab} key={item.Entreprise}>{item.Entreprise}</option>
    });
    
    return(
      <div className="Select">
        <div className="vertical-align">
          <label className="labelSelect size" htmlFor='select-enterprise'>Choix entreprises</label>
        </div>
        <div className="vertical-align">
          <select className="selectTel size" id='select-enterprise'onChange={this.update.bind(this)} >
          <option></option>
          {items}
          </select>
        </div>
      </div>
    );
  }
}


function matchStateToProps(state){
  return {
      global: state.global,
      stage: state.stage
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({ChangeStatus : ChangeStatus, UpdateStage:UpdateStage }, dispatch);
}

export default connect(matchStateToProps, matchDispatchToProps)(Select);