import React, { Component } from 'react';
import donnees from './donnees';


class Header extends Component {

	constructor(){
		super();
		this.state = {
			active: false,
			items : [],
		}
	}

	toogleMenu(){
		this.setState({
			active : !this.state.active
		});
	}

	componentDidMount(){
		this.setState({
			items: donnees 
		})
	}

	render(){
		
		return (
			<div className="header center">
				<img className="logoIot" src="image/logo2.png"/>
				<h1 className="white size">231 Rue Pierre et Marie Curie 31670 Labège</h1>
			</div>
		
		);
	
	}


}




export default Header;