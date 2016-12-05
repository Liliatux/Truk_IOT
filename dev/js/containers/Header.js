import React, { Component } from 'react';


class Header extends Component {

	render(){
		return (
			<div>
				<div className="menu">
					<div onClick={this.onItemClick}><a href="#"><i id="menu" className="list Content large icon"></i></a></div>
					<img id="imgMenu" className="ui image" src="../image/logo.png" alt="menu clickable"/>
				</div>
				<div className="slide">
					<h1>teste</h1>
				</div>
			</div>
			);
	}

}


export default Header;