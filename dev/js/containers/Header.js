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
				<div onClick={this.toogleMenu.bind(this)}>
					<a href="#">
						<i className="content huge black icon"></i>
					</a>
				</div>
				<div className={this.state.active? 'displayBlock slide':'displayNone slide'}>
					<h2>{this.props.global.test}</h2>
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