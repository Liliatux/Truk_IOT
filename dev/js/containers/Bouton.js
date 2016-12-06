import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Bouton extends Component {
	render() {
		return (
			<div className="Bouton">
     			<a href={"tel:" + this.props.global.phone}>
            <button id="BtnCall">
              <i id="phone" className="call large icon"></i>
              <span id="nom">{this.props.global.test}</span>
            </button>
          </a>
     		</div>
     	);
	}
}
function matchStateToProps(state){
  return {
      global: state.global
  }
}
export default connect(matchStateToProps)(Bouton);
