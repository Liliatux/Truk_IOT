import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Header extends Component {

	constructor(){
		super();
		this.state = {
			active: false
		}
	}

	toogleMenu(){
		this.setState({
			active : !this.state.active
		});
	}

	render(){
		return (
			<div className="header">
				<i className="content big white icon" onClick={this.toogleMenu.bind(this)} ></i>
				<span className="white title">Map IOT2</span>
				<div className={this.state.active? 'displayBlock slide':'displayNone slide'}>
				<div className="mapslid">
				</div>
					<div className="footer">
                     
					</div>
				</div>
			</div>
		);
	}

}


function matchStateToProps(state){
  return {
      global: state.global
  }
}
export default connect(matchStateToProps)(Header);