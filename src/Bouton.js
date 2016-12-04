import React, {Component} from 'react';
import './bouton.css';



class Bouton extends Component {
	render() {
		return (
			<div className="Bouton">
     			<a href="tel:+33601648735"><button id="BtnCall"><i id="phone" className="call large icon"></i><span id="nom">[nomEntreprise]</span></button></a>
     		</div>
     	);
	}
}

export default Bouton;
