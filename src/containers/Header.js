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

			<div className="header">
				<img className="logoIot" src="image/logo.png" alt="logoIOT"/>
				<div className="adresse">231 Rue Pierre et Marie Curie 31670 Labège</div>
			</div>
		
		);
	
	}


}




export default Header;