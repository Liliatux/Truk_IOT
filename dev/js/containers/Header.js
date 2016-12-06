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
						<i id="icon" className="content huge black icon"></i>
					</a>
				</div>
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