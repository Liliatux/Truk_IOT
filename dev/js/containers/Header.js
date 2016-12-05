import React, { Component } from 'react';


class Header extends Component {

	render(){
		return (
			<div className="Header">
				<img id="imgMenu" className="ui image" src="../image/logo.png" alt="menu clickable"/>
				<h1 className="ui header">
					<div id="title" className="content">Where i go ? </div>
				</h1>
			</div>

		);
	}

}

export default Header;