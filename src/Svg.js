import React, { Component } from 'react';
import './svg.css';

class Svg extends Component {
	render() {
		return (
			<div className="Svg">
				<svg width="100%" height="100vh" xmlns="http://www.w3.org/2000/svg">
				    <line className="Line" x1="2.5%" y1="0.1%" x2="95%" y2="0.1%"/>
				    <line className="Line" x1="2.5%" y1="0.1%" x2="2.5%" y2="95%"/>
				</svg>
			</div>
		);
	}
}

export default Svg;