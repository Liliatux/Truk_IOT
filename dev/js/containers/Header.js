import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {UpdateMenu} from '../actions';
import donnees from './donnees';
import {ChangeToogle} from '../actions';

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
	
		let items = this.state.items.map(item => {
	 		if(item.Logo !== ""){
	      	 	return (
	      	 		<div>
	      	  			<img className="size-image"src={item.Logo} key={item.Entreprise} onClick={() => this.props.UpdateMenu(this.props.menu, [item.Entreprise, item.Phone, item.Web])} />
	   				</div>
	   			)
	   		}
	    });
		return (
			<div className="header">
				<i className="content big white icon" onClick={() => this.props.ChangeToogle()} ></i>
				<span className="white title">Map IOT2</span>
				<div className={this.props.toogle.active? 'displayBlock slide':'displayNone slide'}>
					<div className="logo-zone">
						{items}
					</div>
					<div className="information">
						<h4 className="nomEntreprise">Nom Entreprise : {this.props.menu.name}</h4>
						<h4 className="numeroTel">Numero de Telephone : {this.props.menu.phone}</h4>
						<h4 className="web">Site Internet : <a href={this.props.menu.web}>{this.props.menu.web}</a></h4>
					</div>
				</div>
			</div>
		);
	}

}

//
function matchStateToProps(state){
	return {
		menu:  state.menu,
		toogle: state.toogle
	}
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({UpdateMenu: UpdateMenu, ChangeToogle:ChangeToogle}, dispatch);
}

export default connect(matchStateToProps, matchDispatchToProps)(Header);