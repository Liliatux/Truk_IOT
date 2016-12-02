import React, { Component } from 'react';
import './header.css';

class Header extends Component {

	render(){
		return (
		

			<div className="menu">
			<img id="imgMenu" className="ui image" src="map2menu.png" alt="menu clickable"/>
			<h1 className="ui header">
			<div id="title" className="content">Where i go ? </div>
			</h1>
			</div>

			)
	}

}

export default Header;