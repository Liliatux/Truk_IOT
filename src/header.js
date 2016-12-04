import React, { Component } from 'react';
import './header.css';

class Header extends Component {

	render(){
		return (
			<div className="menu">
				<img id="imgMenu" className="ui image" src="logo.png" alt="menu clickable"/>
			</div>

		);
	}

}

export default Header;