import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {UpdateMenu} from '../actions';
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
		console.log(this.state.items)
		let items = this.state.items.map(item => {
	 		if(item.Logo !== ""){
	      	  return <img className="ui image"src={'../logo/'+ item.Logo} key={item.Entreprise} onClick={() => this.props.UpdateMenu(this.props.menu, [item.Entreprise, item.Phone, item.Web])} />
	   		}
	    });
		return (
			<div className="header">
				<i className="content big white icon" onClick={this.toogleMenu.bind(this)} ></i>
				<span className="white title">Map IOT2</span>
				<div className={this.state.active? 'displayBlock slide':'displayNone slide'}>
					<div className="footer">
						<div className="logo-zone">
							<div className="ui tiny images centered">
								{items}
							</div>
						</div>
						<div className="information">
							<h4 className="nomEntreprise">Nom Entreprise : {this.props.menu.name}</h4>
							<h4 className="numeroTel">Numero de Telephone : {this.props.menu.phone}</h4>
							<h4 className="web">Site Internet : {this.props.menu.web}</h4>
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
		menu:  state.menu
	}
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({UpdateMenu: UpdateMenu}, dispatch);
}

export default connect(matchStateToProps, matchDispatchToProps)(Header);