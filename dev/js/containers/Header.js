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
				<i className="content big white icon" onClick={this.toogleMenu.bind(this)} ></i>
				<span className="white title">Map IOT2</span>
				<div className={this.state.active? 'displayBlock slide':'displayNone slide'}>
					<div className="footer">
						<div className="information">
							<h4 className="nomEntreprise">Nom Entreprise : [NomEntreprise]</h4>
							<h4 className="numeroTel">Numero de Telephone : [NumeroTel]</h4>
							<h4 className="web">Site Internet : [siteWeb]</h4>
							<h4 className="mail">Email : [mailto]</h4>
						</div>
					</div>
					<div className="mapslid"></div>
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