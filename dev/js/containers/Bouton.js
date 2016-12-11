import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Bouton extends Component {
	render() {
    if(this.props.global.phone !== 'NC'){
      return (
       <div className="Bouton">
       <a href={"tel:" + this.props.global.phone}>
       <button id="BtnCall">
       <i id="phone" className="call large icon">
       </i>
       <span id="nom">
       {this.props.global.enterprise}
       </span>
       </button>
       </a>
       </div>
       );
    }else {
      return (
        <div className="Bouton">
        <button id="BtnCallNone">
        <i id="phone" className="call large icon">
        </i>
        </button>
        </div>
        );
    }
  }
}
function matchStateToProps(state){
  return {
    global: state.global
  }
}
export default connect(matchStateToProps)(Bouton);
