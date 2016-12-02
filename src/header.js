import React, { Component } from 'react';
import './header.css';

class Header extends Component {

	render(){
		return (
			<div className="menu">
				<h1 className="ui header">
					<img id="imgMenu" className="ui image" role="presentation" src="./map2menu.png"/>
					<div id="title" className="content">Where i go ? </div>
				</h1>
			</div>

			)
	}

}

export default Header;