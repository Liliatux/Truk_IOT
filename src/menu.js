import React, {Component} from 'react';
import './menu.css';



class Menu extends Component {

	onItemClick(event) {
    
console.log("bloublou");

}
	render() {
		return (
			<div onClick={this.onItemClick}><a href="#"><i id="menu" className="list Content large icon"></i></a></div>
     	);
	}
}

export default Menu;