import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Parser from 'html-react-parser';
import {UpdateStage} from '../actions';

class Map extends Component {

	render(){
		if(this.props.global.floor === 'none'){
			return(
				<section>
					<div className="map-container bck-white">
						<svg version="1.1"  width="100%" height="100%" viewBox="0 0 1000 1000"  >
							{this.props.stage.depart ? <Floor>{Parser(this.props.global.floor)}</Floor> : <RDC>{Parser(this.props.global.rdc)}</RDC>}		
						</svg>
					</div>
				</section>
			);
		}else {
			return(
				<section>
					<div className="map-container bck-white">
						<div className="titleMap">
							<div className="titleDivMap">
								<h5>{this.props.stage.name}</h5>
							</div>
							<div>
								<button id='colorPurple'className='circular ui icon button'
								onClick={() => this.props.UpdateStage(this.props.stage, !this.props.stage.depart)}
								><i className={this.props.stage.icon}></i></button>
							</div>
						</div>
						<svg version="1.1"  width="100%" height="100%" viewBox="0 0 1000 1000"  >
							{this.props.stage.depart ?<Floor>{Parser(this.props.global.floor)}</Floor> : <RDC>{Parser(this.props.global.rdc)}</RDC>}
						</svg>
					</div>
				</section>
			);
		}
	}
}
//
class RDC extends Component {
	render(){
		return (
			<svg version="1.1"  width="100%" height="100%" viewBox="0 0 1000 1000" >
				<line x1="1%" y1="0.1%" x2="99%" y2="0.1%" className="train"/>
				<line x1="1%" y1="3%" x2="99%" y2="3%" className="train"/>
				<line x1="2%" y1="0.1%" x2="2%" y2="3%" className="train"/>
				<line x1="3%" y1="0.1%" x2="3%" y2="3%" className="train"/>
				<line x1="4%" y1="0.1%" x2="4%" y2="3%" className="train"/>
				<line x1="5%" y1="0.1%" x2="5%" y2="3%" className="train"/>
				<line x1="6%" y1="0.1%" x2="6%" y2="3%" className="train"/>
				<line x1="7%" y1="0.1%" x2="7%" y2="3%" className="train"/>
				<line x1="8%" y1="0.1%" x2="8%" y2="3%" className="train"/>
				<line x1="9%" y1="0.1%" x2="9%" y2="3%" className="train"/>
				<line x1="10%" y1="0.1%" x2="10%" y2="3%" className="train"/>
				<line x1="11%" y1="0.1%" x2="11%" y2="3%" className="train"/>
				<line x1="12%" y1="0.1%" x2="12%" y2="3%" className="train"/>
				<line x1="13%" y1="0.1%" x2="13%" y2="3%" className="train"/>
				<line x1="14%" y1="0.1%" x2="14%" y2="3%" className="train"/>
				<line x1="15%" y1="0.1%" x2="15%" y2="3%" className="train"/>
				<line x1="16%" y1="0.1%" x2="16%" y2="3%" className="train"/>
				<line x1="17%" y1="0.1%" x2="17%" y2="3%" className="train"/>
				<line x1="18%" y1="0.1%" x2="18%" y2="3%" className="train"/>
				<line x1="19%" y1="0.1%" x2="19%" y2="3%" className="train"/>
				<line x1="20%" y1="0.1%" x2="20%" y2="3%" className="train"/>
				<line x1="21%" y1="0.1%" x2="21%" y2="3%" className="train"/>
				<line x1="22%" y1="0.1%" x2="22%" y2="3%" className="train"/>
				<line x1="23%" y1="0.1%" x2="23%" y2="3%" className="train"/>
				<line x1="24%" y1="0.1%" x2="24%" y2="3%" className="train"/>
				<line x1="25%" y1="0.1%" x2="25%" y2="3%" className="train"/>
				<line x1="26%" y1="0.1%" x2="26%" y2="3%" className="train"/>
				<line x1="27%" y1="0.1%" x2="27%" y2="3%" className="train"/>
				<line x1="28%" y1="0.1%" x2="28%" y2="3%" className="train"/>
				<line x1="29%" y1="0.1%" x2="29%" y2="3%" className="train"/>
				<line x1="30%" y1="0.1%" x2="30%" y2="3%" className="train"/>
				<line x1="31%" y1="0.1%" x2="31%" y2="3%" className="train"/>
				<line x1="32%" y1="0.1%" x2="32%" y2="3%" className="train"/>
				<line x1="33%" y1="0.1%" x2="33%" y2="3%" className="train"/>
				<line x1="34%" y1="0.1%" x2="34%" y2="3%" className="train"/>
				<line x1="35%" y1="0.1%" x2="35%" y2="3%" className="train"/>
				<line x1="36%" y1="0.1%" x2="36%" y2="3%" className="train"/>
				<line x1="37%" y1="0.1%" x2="37%" y2="3%" className="train"/>
				<line x1="38%" y1="0.1%" x2="38%" y2="3%" className="train"/>
				<line x1="39%" y1="0.1%" x2="39%" y2="3%" className="train"/>
				<line x1="40%" y1="0.1%" x2="40%" y2="3%" className="train"/>
				<line x1="41%" y1="0.1%" x2="41%" y2="3%" className="train"/>
				<line x1="42%" y1="0.1%" x2="42%" y2="3%" className="train"/>
				<line x1="43%" y1="0.1%" x2="43%" y2="3%" className="train"/>
				<line x1="44%" y1="0.1%" x2="44%" y2="3%" className="train"/>
				<line x1="45%" y1="0.1%" x2="45%" y2="3%" className="train"/>
				<line x1="46%" y1="0.1%" x2="46%" y2="3%" className="train"/>
				<line x1="47%" y1="0.1%" x2="47%" y2="3%" className="train"/>
				<line x1="48%" y1="0.1%" x2="48%" y2="3%" className="train"/>
				<line x1="49%" y1="0.1%" x2="49%" y2="3%" className="train"/>
				<line x1="50%" y1="0.1%" x2="50%" y2="3%" className="train"/>
				<line x1="51%" y1="0.1%" x2="51%" y2="3%" className="train"/>
				<line x1="52%" y1="0.1%" x2="52%" y2="3%" className="train"/>
				<line x1="53%" y1="0.1%" x2="53%" y2="3%" className="train"/>
				<line x1="54%" y1="0.1%" x2="54%" y2="3%" className="train"/>
				<line x1="55%" y1="0.1%" x2="55%" y2="3%" className="train"/>
				<line x1="56%" y1="0.1%" x2="56%" y2="3%" className="train"/>
				<line x1="57%" y1="0.1%" x2="57%" y2="3%" className="train"/>
				<line x1="58%" y1="0.1%" x2="58%" y2="3%" className="train"/>
				<line x1="59%" y1="0.1%" x2="59%" y2="3%" className="train"/>
				<line x1="60%" y1="0.1%" x2="60%" y2="3%" className="train"/>
				<line x1="61%" y1="0.1%" x2="61%" y2="3%" className="train"/>
				<line x1="62%" y1="0.1%" x2="62%" y2="3%" className="train"/>
				<line x1="63%" y1="0.1%" x2="63%" y2="3%" className="train"/>
				<line x1="64%" y1="0.1%" x2="64%" y2="3%" className="train"/>
				<line x1="65%" y1="0.1%" x2="65%" y2="3%" className="train"/>
				<line x1="66%" y1="0.1%" x2="66%" y2="3%" className="train"/>
				<line x1="67%" y1="0.1%" x2="67%" y2="3%" className="train"/>
				<line x1="68%" y1="0.1%" x2="68%" y2="3%" className="train"/>
				<line x1="69%" y1="0.1%" x2="69%" y2="3%" className="train"/>
				<line x1="70%" y1="0.1%" x2="70%" y2="3%" className="train"/>
				<line x1="71%" y1="0.1%" x2="71%" y2="3%" className="train"/>
				<line x1="72%" y1="0.1%" x2="72%" y2="3%" className="train"/>
				<line x1="73%" y1="0.1%" x2="73%" y2="3%" className="train"/>
				<line x1="74%" y1="0.1%" x2="74%" y2="3%" className="train"/>
				<line x1="75%" y1="0.1%" x2="75%" y2="3%" className="train"/>
				<line x1="76%" y1="0.1%" x2="76%" y2="3%" className="train"/>
				<line x1="77%" y1="0.1%" x2="77%" y2="3%" className="train"/>
				<line x1="78%" y1="0.1%" x2="78%" y2="3%" className="train"/>
				<line x1="79%" y1="0.1%" x2="79%" y2="3%" className="train"/>
				<line x1="80%" y1="0.1%" x2="80%" y2="3%" className="train"/>
				<line x1="81%" y1="0.1%" x2="81%" y2="3%" className="train"/>
				<line x1="82%" y1="0.1%" x2="82%" y2="3%" className="train"/>
				<line x1="83%" y1="0.1%" x2="83%" y2="3%" className="train"/>
				<line x1="84%" y1="0.1%" x2="84%" y2="3%" className="train"/>
				<line x1="85%" y1="0.1%" x2="85%" y2="3%" className="train"/>
				<line x1="86%" y1="0.1%" x2="86%" y2="3%" className="train"/>
				<line x1="87%" y1="0.1%" x2="87%" y2="3%" className="train"/>
				<line x1="88%" y1="0.1%" x2="88%" y2="3%" className="train"/>
				<line x1="89%" y1="0.1%" x2="89%" y2="3%" className="train"/>
				<line x1="90%" y1="0.1%" x2="90%" y2="3%" className="train"/>
				<line x1="91%" y1="0.1%" x2="91%" y2="3%" className="train"/>
				<line x1="92%" y1="0.1%" x2="92%" y2="3%" className="train"/>
				<line x1="93%" y1="0.1%" x2="93%" y2="3%" className="train"/>
				<line x1="94%" y1="0.1%" x2="94%" y2="3%" className="train"/>
				<line x1="95%" y1="0.1%" x2="95%" y2="3%" className="train"/>
				<line x1="96%" y1="0.1%" x2="96%" y2="3%" className="train"/>
				<line x1="97%" y1="0.1%" x2="97%" y2="3%" className="train"/>
				<line x1="98%" y1="0.1%" x2="98%" y2="3%" className="train"/>
				<line x1="4%" y1="10%" x2="1%" y2="95%" className="border-map"/>
				<line x1="4%" y1="10%" x2="14%" y2="10%" className="border-map"/>
				<line x1="14%" y1="8%" x2="14%" y2="10%" className="border-map"/>
				<line x1="14%" y1="8%" x2="33%" y2="8.5%" className="border-map"/>
				<line x1="33%" y1="8.5%" x2="33%" y2="10.5%" className="border-map"/>
				<line x1="33%" y1="10.5%" x2="65%" y2="10.5%" className="border-map"/>
				<line x1="65%" y1="8%" x2="65%" y2="10.5%" className="border-map"/>
				<line x1="65%" y1="8%" x2="85%" y2="8.5%" className="border-map"/>
				<line x1="85%" y1="8.5%" x2="85%" y2="10.5%" className="border-map"/>
				<line x1="85%" y1="10.5%" x2="95%" y2="10.5%" className="border-map"/>
				<line x1="95%" y1="10.5%" x2="95%" y2="90%" className="border-map"/>
				<line x1="73%" y1="89.8%" x2="95%" y2="90%" className="border-map"/>
				<line x1="73%" y1="89.8%" x2="73%" y2="83%" className="border-map"/>
				<line x1="70.5%" y1="83%" x2="73%" y2="83%" className="border-map"/>
				<line x1="70.5%" y1="88.8%" x2="70.5%" y2="83%" className="border-map"/>
				<line x1="58%" y1="88.8%" x2="70.5%" y2="88.8%" className="border-map"/>
				<line x1="58.2%" y1="56%" x2="58.2%" y2="50%" className="border-map"/>
				<line x1="58%" y1="88.8%" x2="58.2%" y2="58%" className="border-map"/>
				<line x1="40%" y1="25%" x2="58.2%" y2="25%" className="border-map"/>
				<line x1="36%" y1="92%" x2="40%" y2="22.5%" className="border-map"/>
				<line x1="25%" y1="91.8%" x2="36%" y2="92%" className="border-map"/>
				<line x1="25%" y1="91.8%" x2="25.3%" y2="88%" className="border-map"/>
				<line x1="22%" y1="88%" x2="25.3%" y2="88%" className="border-map"/>
				<line x1="22%" y1="88%" x2="21.5%" y2="95.4%" className="border-map"/>
				<line x1="1%" y1="95%" x2="21.5%" y2="95.4%" className="border-map"/>
				<line x1="75%" y1="70%" x2="75%" y2="62%" className="border-int"/>
				<line x1="72%" y1="72%" x2="72%" y2="62%" className="border-int"/>
				<line x1="72%" y1="62%" x2="75%" y2="62%" className="escalier"/>
				<line x1="72%" y1="62.6%" x2="75%" y2="62.6%" className="escalier"/>
				<line x1="72%" y1="63.2%" x2="75%" y2="63.2%" className="escalier"/>
				<line x1="72%" y1="63.8%" x2="75%" y2="63.8%" className="escalier"/>
				<line x1="72%" y1="64.4%" x2="75%" y2="64.4%" className="escalier"/>
				<line x1="72%" y1="65%" x2="75%" y2="65%" className="escalier"/>
				<line x1="72%" y1="65.6%" x2="75%" y2="65.6%" className="escalier"/>
				<line x1="72%" y1="66.1%" x2="75%" y2="66.1%" className="escalier"/>
				<line x1="72%" y1="66.7%" x2="75%" y2="66.7%" className="escalier"/>
				<line x1="72%" y1="67.3%" x2="75%" y2="67.3%" className="escalier"/>
				<line x1="72%" y1="67.9%" x2="75%" y2="67.9%" className="escalier"/>
				<line x1="72%" y1="68.5%" x2="75%" y2="68.5%" className="escalier"/>
				<line x1="72%" y1="69.1%" x2="75%" y2="69.1%" className="escalier"/>
				<line x1="72%" y1="69.7%" x2="75%" y2="69.7%" className="escalier"/>
				<rect x="58.2%" y="22.5%" width="14%" height="31%"   className="entreprise" />
				<line x1="19.8%" y1="27.8%" x2="24.8%" y2="28%" className="jardin"/>
				<line x1="25%" y1="23%" x2="21.8%" y2="75.2%" className="jardin"/>
				<line x1="20%" y1="27.6%" x2="17%" y2="75%" className="jardin"/>
				<line x1="17%" y1="75%" x2="22%" y2="75.2%" className="jardin"/>
				<line x1="47.5%" y1="15%" x2="47.5%" y2="10.5%" className="escalier"/>
				<line x1="47%" y1="15%" x2="47%" y2="10.5%" className="escalier"/>
				<line x1="46.5%" y1="15%" x2="46.5%" y2="10.5%" className="escalier"/>
				<line x1="46%" y1="15%" x2="46%" y2="10.5%" className="escalier"/>
				<line x1="45.5%" y1="15%" x2="45.5%" y2="10.5%" className="escalier"/>
				<line x1="45%" y1="15%" x2="45%" y2="10.5%" className="escalier"/>
				<line x1="44.5%" y1="15%" x2="44.5%" y2="10.5%" className="escalier"/>
				<line x1="44%" y1="15%" x2="44%" y2="10.5%" className="escalier"/>
				<line x1="43.5%" y1="15%" x2="43.5%" y2="10.5%" className="escalier"/>
				<line x1="43%" y1="15%" x2="43%" y2="10.5%" className="escalier"/>
				<line x1="43%" y1="12.6%" x2="47.5%" y2="12.6%" className="jardin"/>
				<line x1="58%" y1="62%" x2="72%" y2="62%" className="jardin"/>
				<line x1="72%" y1="72%" x2="81%" y2="72%" className="jardin"/>
				<line x1="81%" y1="72%" x2="81%" y2="20%" className="jardin"/>
				<line x1="58%" y1="62%" x2="72%" y2="62%" className="jardin"/>
				<line x1="95%" y1="54%" x2="81%" y2="54%" className="jardin"/>
				<line x1="95%" y1="20%" x2="58%" y2="20%" className="jardin"/>
				<line x1="73%" y1="8%" x2="73%" y2="20%" className="jardin"/>
				<line x1="69%" y1="8%" x2="69%" y2="20%" className="jardin"/>
				<line x1="65%" y1="8%" x2="65%" y2="20%" className="jardin"/>
				<line x1="69%" y1="14%" x2="65%" y2="14%" className="jardin"/>
				<line x1="61%" y1="10.5%" x2="61%" y2="20%" className="jardin"/>
				<line x1="65%" y1="16%" x2="61%" y2="16%" className="jardin"/>
				<line x1="63%" y1="16%" x2="63%" y2="20%" className="jardin"/>
				<line x1="53%" y1="20%" x2="56%" y2="20%" className="jardin"/>
				<line x1="56%" y1="16%" x2="56%" y2="20%" className="jardin"/>
				<line x1="56%" y1="18%" x2="58%" y2="18%" className="jardin"/>
				<line x1="53%" y1="16%" x2="58%" y2="16%" className="jardin"/>
				<line x1="58%" y1="16%" x2="58%" y2="10.5%" className="jardin"/>
				<line x1="53%" y1="13%" x2="53%" y2="20%" className="jardin"/>
				<line x1="55%" y1="13%" x2="55%" y2="10.5%" className="accenseur"/>
				<line x1="53%" y1="13%" x2="55%" y2="13%" className="accenseur"/>
				<line x1="53%" y1="10.5%" x2="55%" y2="10.5%" className="accenseur"/>
				<line x1="40%" y1="10.5%" x2="40%" y2="15%" className="jardin"/>
				<line x1="40%" y1="15%" x2="47.5%" y2="15%" className="jardin"/>
				<line x1="43%" y1="15%" x2="43%" y2="20%" className="jardin"/>
				<line x1="43%" y1="20%" x2="47.5%" y2="20%" className="jardin"/>
				<line x1="46%" y1="15%" x2="46%" y2="20%" className="jardin"/>
				<line x1="37%" y1="10.5%" x2="37%" y2="20%" className="jardin"/>
				<line x1="37%" y1="20%" x2="40%" y2="20%" className="jardin"/>
				<line x1="40%" y1="18%" x2="43%" y2="18%" className="jardin"/>
				<line x1="33%" y1="10.5%" x2="33%" y2="20%" className="jardin"/>
				<line x1="14%" y1="20%" x2="37%" y2="20%" className="jardin"/>
				<line x1="14%" y1="10%" x2="14%" y2="23%" className="jardin"/>
				<line x1="3.5%" y1="23%" x2="14%" y2="23%" className="jardin"/>
				<line x1="18%" y1="23%" x2="25%" y2="23%" className="jardin"/>
				<line x1="18%" y1="23%" x2="17.9%" y2="26%" className="jardin"/>
				<line x1="12%" y1="26%" x2="18%" y2="26%" className="jardin"/>
				<line x1="12%" y1="26%" x2="11.2%" y2="51%" className="jardin"/>
				<line x1="11.5%" y1="37%" x2="19.3%" y2="37.2%" className="jardin"/>
				<line x1="2.8%" y1="51%" x2="18.6%" y2="51.2%" className="jardin"/>
				<line x1="9%" y1="23%" x2="8.2%" y2="51%" className="jardin"/>
				<line x1="2.3%" y1="62%" x2="18%" y2="62.2%" className="jardin"/>
				<line x1="22.5%" y1="62%" x2="37.8%" y2="62.2%" className="jardin"/>
				<line x1="32%" y1="52.5%" x2="38.3%" y2="52.7%" className="jardin"/>
				<line x1="32%" y1="52.5%" x2="31.6%" y2="57.5%" className="jardin"/>
				<line x1="75.5%" y1="68%" x2="75.5%" y2="62%" className="jardin"/>
				<line x1="79.5%" y1="68%" x2="79.5%" y2="62%" className="jardin"/>
				<line x1="78.2%" y1="68%" x2="78.2%" y2="64%" className="jardin"/>
				<line x1="76.8%" y1="68%" x2="76.8%" y2="64%" className="jardin"/>
				<line x1="76.8%" y1="64%" x2="78.2%" y2="64%" className="jardin"/>
				<line x1="75.5%" y1="62%" x2="79.5%" y2="62%" className="jardin"/>
				<line x1="75.5%" y1="68%" x2="76.8%" y2="68%" className="jardin"/>
				<line x1="78.2%" y1="68%" x2="79.5%" y2="68%" className="jardin"/>
				<line x1="35%" y1="21.2%" x2="72.5%" y2="21.2%" className="couloir-min-haut"/>	
				<line x1="25%" y1="21.2%" x2="14.1%" y2="21.2%" className="couloir-min-haut"/>
				<line x1="25%" y1="21.7%" x2="14.1%" y2="21.7%" className="couloir-min-haut"/>
				<line x1="17.8%" y1="23.5%" x2="14.1%" y2="23.5%" className="couloir-min-haut"/>
				<line x1="17.8%" y1="24.2%" x2="9%" y2="24.2%" className="couloir-min-haut"/>
				<line x1="17.8%" y1="24.8%" x2="9%" y2="24.8%" className="couloir-min-haut"/>
				<line x1="10.1%" y1="24.8%" x2="9.4%" y2="51%" className="couloir-min-haut"/>
				<line x1="10.6%" y1="24.8%" x2="9.9%" y2="51%" className="couloir-min-haut"/>
				<line x1="40%" y1="23%" x2="58.2%" y2="23%" className="couloir-min-haut"/>
				<line x1="40%" y1="23.8%" x2="58.2%" y2="23.8%" className="couloir-min-haut"/>
				<line x1="50%" y1="10.6%" x2="50%" y2="21%" className="couloir-min-haut"/>
				<line x1="48.6%" y1="10.6%" x2="48.6%" y2="21%" className="couloir-min-haut"/>
				<line x1="51.7%" y1="10.6%" x2="51.7%" y2="21%" className="couloir-min-haut"/>
				<rect x="44%" y="95%" width="4.5%" height="4.5%"   className="parking" />
				<rect x="44%" y="95%" width="4.5%" height="4.5%"   className="parking-border" />
				<text x="453" y="983" className='parking-text'>P</text>  
				<path className="path1" d="M560 550c-5.523 0-10 4.477-10 10 0 10 10 22 10 22s10-12 
				10-22c0-5.523-4.477-10-10-10zM560 566c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 
				6 6-2.686 6-6 6z" className="marker-start"></path>
				
				{this.props.children} 
			</svg>
		)

	}
}

class Floor extends Component {
	render(){
		return (
			<svg>							
				<line x1="1%" y1="0.1%" x2="99%" y2="0.1%" className="train"/>
				<line x1="1%" y1="3%" x2="99%" y2="3%" className="train"/>
				<line x1="2%" y1="0.1%" x2="2%" y2="3%" className="train"/>
				<line x1="3%" y1="0.1%" x2="3%" y2="3%" className="train"/>
				<line x1="4%" y1="0.1%" x2="4%" y2="3%" className="train"/>
				<line x1="5%" y1="0.1%" x2="5%" y2="3%" className="train"/>
				<line x1="6%" y1="0.1%" x2="6%" y2="3%" className="train"/>
				<line x1="7%" y1="0.1%" x2="7%" y2="3%" className="train"/>
				<line x1="8%" y1="0.1%" x2="8%" y2="3%" className="train"/>
				<line x1="9%" y1="0.1%" x2="9%" y2="3%" className="train"/>
				<line x1="10%" y1="0.1%" x2="10%" y2="3%" className="train"/>
				<line x1="11%" y1="0.1%" x2="11%" y2="3%" className="train"/>
				<line x1="12%" y1="0.1%" x2="12%" y2="3%" className="train"/>
				<line x1="13%" y1="0.1%" x2="13%" y2="3%" className="train"/>
				<line x1="14%" y1="0.1%" x2="14%" y2="3%" className="train"/>
				<line x1="15%" y1="0.1%" x2="15%" y2="3%" className="train"/>
				<line x1="16%" y1="0.1%" x2="16%" y2="3%" className="train"/>
				<line x1="17%" y1="0.1%" x2="17%" y2="3%" className="train"/>
				<line x1="18%" y1="0.1%" x2="18%" y2="3%" className="train"/>
				<line x1="19%" y1="0.1%" x2="19%" y2="3%" className="train"/>
				<line x1="20%" y1="0.1%" x2="20%" y2="3%" className="train"/>
				<line x1="21%" y1="0.1%" x2="21%" y2="3%" className="train"/>
				<line x1="22%" y1="0.1%" x2="22%" y2="3%" className="train"/>
				<line x1="23%" y1="0.1%" x2="23%" y2="3%" className="train"/>
				<line x1="24%" y1="0.1%" x2="24%" y2="3%" className="train"/>
				<line x1="25%" y1="0.1%" x2="25%" y2="3%" className="train"/>
				<line x1="26%" y1="0.1%" x2="26%" y2="3%" className="train"/>
				<line x1="27%" y1="0.1%" x2="27%" y2="3%" className="train"/>
				<line x1="28%" y1="0.1%" x2="28%" y2="3%" className="train"/>
				<line x1="29%" y1="0.1%" x2="29%" y2="3%" className="train"/>
				<line x1="30%" y1="0.1%" x2="30%" y2="3%" className="train"/>
				<line x1="31%" y1="0.1%" x2="31%" y2="3%" className="train"/>
				<line x1="32%" y1="0.1%" x2="32%" y2="3%" className="train"/>
				<line x1="33%" y1="0.1%" x2="33%" y2="3%" className="train"/>
				<line x1="34%" y1="0.1%" x2="34%" y2="3%" className="train"/>
				<line x1="35%" y1="0.1%" x2="35%" y2="3%" className="train"/>
				<line x1="36%" y1="0.1%" x2="36%" y2="3%" className="train"/>
				<line x1="37%" y1="0.1%" x2="37%" y2="3%" className="train"/>
				<line x1="38%" y1="0.1%" x2="38%" y2="3%" className="train"/>
				<line x1="39%" y1="0.1%" x2="39%" y2="3%" className="train"/>
				<line x1="40%" y1="0.1%" x2="40%" y2="3%" className="train"/>
				<line x1="41%" y1="0.1%" x2="41%" y2="3%" className="train"/>
				<line x1="42%" y1="0.1%" x2="42%" y2="3%" className="train"/>
				<line x1="43%" y1="0.1%" x2="43%" y2="3%" className="train"/>
				<line x1="44%" y1="0.1%" x2="44%" y2="3%" className="train"/>
				<line x1="45%" y1="0.1%" x2="45%" y2="3%" className="train"/>
				<line x1="46%" y1="0.1%" x2="46%" y2="3%" className="train"/>
				<line x1="47%" y1="0.1%" x2="47%" y2="3%" className="train"/>
				<line x1="48%" y1="0.1%" x2="48%" y2="3%" className="train"/>
				<line x1="49%" y1="0.1%" x2="49%" y2="3%" className="train"/>
				<line x1="50%" y1="0.1%" x2="50%" y2="3%" className="train"/>
				<line x1="51%" y1="0.1%" x2="51%" y2="3%" className="train"/>
				<line x1="52%" y1="0.1%" x2="52%" y2="3%" className="train"/>
				<line x1="53%" y1="0.1%" x2="53%" y2="3%" className="train"/>
				<line x1="54%" y1="0.1%" x2="54%" y2="3%" className="train"/>
				<line x1="55%" y1="0.1%" x2="55%" y2="3%" className="train"/>
				<line x1="56%" y1="0.1%" x2="56%" y2="3%" className="train"/>
				<line x1="57%" y1="0.1%" x2="57%" y2="3%" className="train"/>
				<line x1="58%" y1="0.1%" x2="58%" y2="3%" className="train"/>
				<line x1="59%" y1="0.1%" x2="59%" y2="3%" className="train"/>
				<line x1="60%" y1="0.1%" x2="60%" y2="3%" className="train"/>
				<line x1="61%" y1="0.1%" x2="61%" y2="3%" className="train"/>
				<line x1="62%" y1="0.1%" x2="62%" y2="3%" className="train"/>
				<line x1="63%" y1="0.1%" x2="63%" y2="3%" className="train"/>
				<line x1="64%" y1="0.1%" x2="64%" y2="3%" className="train"/>
				<line x1="65%" y1="0.1%" x2="65%" y2="3%" className="train"/>
				<line x1="66%" y1="0.1%" x2="66%" y2="3%" className="train"/>
				<line x1="67%" y1="0.1%" x2="67%" y2="3%" className="train"/>
				<line x1="68%" y1="0.1%" x2="68%" y2="3%" className="train"/>
				<line x1="69%" y1="0.1%" x2="69%" y2="3%" className="train"/>
				<line x1="70%" y1="0.1%" x2="70%" y2="3%" className="train"/>
				<line x1="71%" y1="0.1%" x2="71%" y2="3%" className="train"/>
				<line x1="72%" y1="0.1%" x2="72%" y2="3%" className="train"/>
				<line x1="73%" y1="0.1%" x2="73%" y2="3%" className="train"/>
				<line x1="74%" y1="0.1%" x2="74%" y2="3%" className="train"/>
				<line x1="75%" y1="0.1%" x2="75%" y2="3%" className="train"/>
				<line x1="76%" y1="0.1%" x2="76%" y2="3%" className="train"/>
				<line x1="77%" y1="0.1%" x2="77%" y2="3%" className="train"/>
				<line x1="78%" y1="0.1%" x2="78%" y2="3%" className="train"/>
				<line x1="79%" y1="0.1%" x2="79%" y2="3%" className="train"/>
				<line x1="80%" y1="0.1%" x2="80%" y2="3%" className="train"/>
				<line x1="81%" y1="0.1%" x2="81%" y2="3%" className="train"/>
				<line x1="82%" y1="0.1%" x2="82%" y2="3%" className="train"/>
				<line x1="83%" y1="0.1%" x2="83%" y2="3%" className="train"/>
				<line x1="84%" y1="0.1%" x2="84%" y2="3%" className="train"/>
				<line x1="85%" y1="0.1%" x2="85%" y2="3%" className="train"/>
				<line x1="86%" y1="0.1%" x2="86%" y2="3%" className="train"/>
				<line x1="87%" y1="0.1%" x2="87%" y2="3%" className="train"/>
				<line x1="88%" y1="0.1%" x2="88%" y2="3%" className="train"/>
				<line x1="89%" y1="0.1%" x2="89%" y2="3%" className="train"/>
				<line x1="90%" y1="0.1%" x2="90%" y2="3%" className="train"/>
				<line x1="91%" y1="0.1%" x2="91%" y2="3%" className="train"/>
				<line x1="92%" y1="0.1%" x2="92%" y2="3%" className="train"/>
				<line x1="93%" y1="0.1%" x2="93%" y2="3%" className="train"/>
				<line x1="94%" y1="0.1%" x2="94%" y2="3%" className="train"/>
				<line x1="95%" y1="0.1%" x2="95%" y2="3%" className="train"/>
				<line x1="96%" y1="0.1%" x2="96%" y2="3%" className="train"/>
				<line x1="97%" y1="0.1%" x2="97%" y2="3%" className="train"/>
				<line x1="98%" y1="0.1%" x2="98%" y2="3%" className="train"/>
				<line x1="4%" y1="10%" x2="1%" y2="95%" className="border-map"/>
				<line x1="4%" y1="10%" x2="14%" y2="10%" className="border-map"/>
				<line x1="14%" y1="8%" x2="14%" y2="10%" className="border-map"/>
				<line x1="14%" y1="8%" x2="33%" y2="8.5%" className="border-map"/>
				<line x1="33%" y1="8.5%" x2="33%" y2="10.5%" className="border-map"/>
				<line x1="33%" y1="10.5%" x2="65%" y2="10.5%" className="border-map"/>
				<line x1="65%" y1="8%" x2="65%" y2="10.5%" className="border-map"/>
				<line x1="65%" y1="8%" x2="85%" y2="8.5%" className="border-map"/>
				<line x1="85%" y1="8.5%" x2="85%" y2="10.5%" className="border-map"/>
				<line x1="85%" y1="10.5%" x2="95%" y2="10.5%" className="border-map"/>
				<line x1="95%" y1="10.5%" x2="95%" y2="90%" className="border-map"/>
				<line x1="73%" y1="89.8%" x2="95%" y2="90%" className="border-map"/>
				<line x1="73%" y1="89.8%" x2="73%" y2="83%" className="border-map"/>
				<line x1="70.5%" y1="83%" x2="73%" y2="83%" className="border-map"/>
				<line x1="70.5%" y1="88.8%" x2="70.5%" y2="83%" className="border-map"/>
				<line x1="58%" y1="88.8%" x2="70.5%" y2="88.8%" className="border-map"/>
				<line x1="58%" y1="88.8%" x2="58.2%" y2="25%" className="border-map"/>
				<line x1="40%" y1="25%" x2="58.2%" y2="25%" className="border-map"/>
				<line x1="36%" y1="92%" x2="40%" y2="22.5%" className="border-map"/>
				<line x1="25%" y1="91.8%" x2="36%" y2="92%" className="border-map"/>
				<line x1="25%" y1="91.8%" x2="25.3%" y2="88%" className="border-map"/>
				<line x1="22%" y1="88%" x2="25.3%" y2="88%" className="border-map"/>
				<line x1="22%" y1="88%" x2="21.5%" y2="95.4%" className="border-map"/>
				<line x1="1%" y1="95%" x2="21.5%" y2="95.4%" className="border-map"/>
				<line x1="46%" y1="19.2%" x2="50%" y2="19.2%" className="couloir"/>
				<line x1="46%" y1="17.5%" x2="50%" y2="17.5%" className="couloir"/>
				<line x1="46%" y1="16.2%" x2="50%" y2="16.2%" className="couloir"/>
				<line x1="17.5%" y1="57%" x2="58%" y2="57%" className="couloir"/>
				<line x1="31.5%" y1="57%" x2="34%" y2="20%" className="couloir"/>
				<line x1="12%" y1="19%" x2="33.2%" y2="20%" className="couloir-min"/>
				<line x1="33%" y1="20%" x2="89%" y2="19.8%" className="couloir-min"/>
				<line x1="33%" y1="21.5%" x2="72.2%" y2="21.5%" className="couloir-min"/>
				<line x1="50%" y1="21.5%" x2="50%" y2="10.5%" className="couloir large-haut"/>
				<line x1="89%" y1="19%" x2="89%" y2="82%" className="couloir-min"/>
				<line x1="65%" y1="82%" x2="89.9%" y2="82%" className="couloir-min"/>
				<line x1="75%" y1="82%" x2="75%" y2="89.7%" className="couloir large-bas"/>
				<line x1="65%" y1="72%" x2="65%" y2="82.9%" className="couloir-min"/>
				<rect x="58.1%" y="60%" width="6%" height="11%"   className="entreprise" />
				<rect x="58.1%" y="71%" width="6%" height="6%"   className="entreprise" />
				<rect x="58.1%" y="76.8%" width="6%" height="6%"   className="entreprise" />
				<rect x="58.1%" y="82.8%" width="7%" height="6%"   className="entreprise" />
				<rect x="65%" y="82.8%" width="2.8%" height="6%"   className="entreprise" />
				<rect x="67.8%" y="82.8%" width="2.8%" height="6%"   className="entreprise" />
				<rect x="77%" y="82.8%" width="4%" height="7%"   className="entreprise" />
				<rect x="81%" y="82.8%" width="4%" height="7%"   className="entreprise" />
				<rect x="85%" y="82.8%" width="9.8%" height="7%"   className="entreprise" />
				<rect x="70%" y="74%" width="13%" height="7%"   className="entreprise" />
				<rect x="83%" y="74%" width="3%" height="7%"   className="entreprise" />
				<rect x="86%" y="74%" width="2%" height="7%"   className="entreprise" />
				<line x1="80%" y1="30%" x2="80%" y2="74%" className="border-int"/>
				<line x1="72%" y1="30%" x2="80%" y2="30%" className="border-int"/>
				<line x1="80%" y1="30%" x2="80%" y2="74%" className="border-int"/>
				<line x1="75%" y1="74%" x2="75%" y2="62%" className="border-int"/>
				<line x1="72%" y1="60%" x2="80%" y2="60%" className="border-int"/>
				<line x1="72%" y1="70%" x2="72%" y2="60%" className="border-int"/>
				<line x1="58%" y1="56%" x2="80%" y2="56%" className="border-int"/>
				<line x1="72%" y1="62%" x2="75%" y2="62%" className="escalier"/>
				<line x1="72%" y1="62.6%" x2="75%" y2="62.6%" className="escalier"/>
				<line x1="72%" y1="63.2%" x2="75%" y2="63.2%" className="escalier"/>
				<line x1="72%" y1="63.8%" x2="75%" y2="63.8%" className="escalier"/>
				<line x1="72%" y1="64.4%" x2="75%" y2="64.4%" className="escalier"/>
				<line x1="72%" y1="65%" x2="75%" y2="65%" className="escalier"/>
				<line x1="72%" y1="65.6%" x2="75%" y2="65.6%" className="escalier"/>
				<line x1="72%" y1="66.1%" x2="75%" y2="66.1%" className="escalier"/>
				<line x1="72%" y1="66.7%" x2="75%" y2="66.7%" className="escalier"/>
				<line x1="72%" y1="67.3%" x2="75%" y2="67.3%" className="escalier"/>
				<line x1="72%" y1="67.9%" x2="75%" y2="67.9%" className="escalier"/>
				<line x1="72%" y1="68.5%" x2="75%" y2="68.5%" className="escalier"/>
				<line x1="72%" y1="69.1%" x2="75%" y2="69.1%" className="escalier"/>
				<line x1="72%" y1="69.7%" x2="75%" y2="69.7%" className="escalier"/>
				<rect x="66%" y="74%" width="4%" height="7%"   className="entreprise" />
				<rect x="58.2%" y="22.5%" width="14%" height="33.5%"   className="entreprise" />
				<line x1="20%" y1="25%" x2="32.2%" y2="25.4%" className="jardin"/>
				<line x1="25%" y1="25%" x2="23%" y2="55.8%" className="jardin"/>
				<line x1="20%" y1="25%" x2="18%" y2="55.8%" className="jardin"/>
				<line x1="18%" y1="58.2%" x2="17%" y2="75%" className="jardin"/>
				<line x1="23%" y1="58.2%" x2="22%" y2="75%" className="jardin"/>
				<line x1="17%" y1="75%" x2="22%" y2="75.2%" className="jardin"/>
				<line x1="18%" y1="58.2%" x2="58%" y2="58.2%" className="jardin"/>
				<line x1="18%" y1="55.8%" x2="23%" y2="55.8%" className="jardin"/>
				<line x1="2%" y1="57.5%" x2="18%" y2="58.1%" className="jardin"/>
				<line x1="3.4%" y1="24.5%" x2="20%" y2="25.1%" className="jardin"/>
				<line x1="11%" y1="47.8%" x2="18.4%" y2="48.1%" className="jardin"/>
				<line x1="11%" y1="47.8%" x2="10.8%" y2="54.1%" className="jardin"/>
				<line x1="10.8%" y1="54.1%" x2="12.1%" y2="54.1%" className="jardin"/>
				<line x1="32.5%" y1="56%" x2="35%" y2="22.4%" className="jardin"/>
				<line x1="32.5%" y1="55.8%" x2="58%" y2="56%" className="jardin"/>
				<line x1="33%" y1="50.8%" x2="38.5%" y2="50.8%" className="jardin"/>
				<line x1="33.2%" y1="45.8%" x2="38.8%" y2="45.8%" className="jardin"/>
				<line x1="33.6%" y1="40.8%" x2="39%" y2="40.8%" className="jardin"/>
				<line x1="34.2%" y1="32.8%" x2="39.5%" y2="32.8%" className="jardin"/>
				<line x1="35%" y1="22.4%" x2="40.2%" y2="22.4%" className="jardin"/>
				<line x1="40%" y1="22.4%" x2="58.2%" y2="22.4%" className="border-map"/>
				<line x1="30.2%" y1="56%" x2="32.6%" y2="20.8%" className="jardin"/>
				<line x1="23%" y1="55.8%" x2="30.2%" y2="56%" className="jardin"/>
				<line x1="23.5%" y1="48.8%" x2="30.7%" y2="49%" className="jardin"/>
				<line x1="24%" y1="40.8%" x2="31.1%" y2="41%" className="jardin"/>
				<line x1="47.5%" y1="15%" x2="47.5%" y2="10.5%" className="escalier"/>
				<line x1="47%" y1="15%" x2="47%" y2="10.5%" className="escalier"/>
				<line x1="46.5%" y1="15%" x2="46.5%" y2="10.5%" className="escalier"/>
				<line x1="46%" y1="15%" x2="46%" y2="10.5%" className="escalier"/>
				<line x1="45.5%" y1="15%" x2="45.5%" y2="10.5%" className="escalier"/>
				<line x1="45%" y1="15%" x2="45%" y2="10.5%" className="escalier"/>
				<line x1="44.5%" y1="15%" x2="44.5%" y2="10.5%" className="escalier"/>
				<line x1="44%" y1="15%" x2="44%" y2="10.5%" className="escalier"/>
				<line x1="43.5%" y1="15%" x2="43.5%" y2="10.5%" className="escalier"/>
				<line x1="43%" y1="15%" x2="43%" y2="10.5%" className="escalier"/>
				<line x1="12%" y1="19.8%" x2="32.6%" y2="20.8%" className="jardin"/>
				<line x1="22%" y1="20.2%" x2="21.8%" y2="25%" className="jardin"/>
				<line x1="12%" y1="18%" x2="11.8%" y2="25%" className="jardin"/>
				<line x1="3.8%" y1="17.8%" x2="33%" y2="19.2%" className="jardin"/>
				<line x1="33%" y1="10%" x2="33%" y2="19.2%" className="jardin"/>
				<line x1="14%" y1="10%" x2="14%" y2="18.2%" className="jardin"/>
				<line x1="32%" y1="19.2%" x2="40%" y2="19.2%" className="jardin"/>
				<line x1="36.5%" y1="10.5%" x2="36.5%" y2="19.2%" className="jardin"/>
				<line x1="41%" y1="10.5%" x2="41%" y2="15%" className="jardin"/>
				<line x1="41%" y1="15%" x2="47.5%" y2="15%" className="jardin"/>
				<line x1="41%" y1="17.5%" x2="43%" y2="17.5%" className="jardin"/>
				<line x1="43%" y1="15%" x2="43%" y2="19.2%" className="jardin"/>
				<line x1="46%" y1="15%" x2="46%" y2="19.2%" className="jardin"/>
				<line x1="43%" y1="19.2%" x2="46%" y2="19.2%" className="jardin"/>
				<line x1="43%" y1="12.6%" x2="47.5%" y2="12.6%" className="jardin"/>
				<line x1="52.4%" y1="15%" x2="52.4%" y2="19.2%" className="jardin"/>
				<line x1="52.4%" y1="19.1%" x2="55%" y2="19.1%" className="jardin"/>
				<line x1="52.4%" y1="15%" x2="57%" y2="15%" className="jardin"/>
				<line x1="57%" y1="10.5%" x2="57%" y2="15%" className="jardin"/>
				<line x1="54%" y1="10.5%" x2="54%" y2="12.5%" className="accenseur"/>
				<line x1="52.4%" y1="12.5%" x2="54%" y2="12.5%" className="accenseur"/>
				<line x1="52.4%" y1="10.5%" x2="54%" y2="10.5%" className="accenseur"/>
				<line x1="52.4%" y1="12.5%" x2="52.4%" y2="17.5%" className="jardin"/>
				<line x1="55%" y1="15%" x2="55%" y2="19.2%" className="jardin"/>
				<line x1="55%" y1="17.5%" x2="57%" y2="17.5%" className="jardin"/>
				<line x1="57%" y1="19.1%" x2="95%" y2="19.1%" className="jardin"/>
				<line x1="61.5%" y1="10.5%" x2="61.5%" y2="19.1%" className="jardin"/>
				<line x1="65%" y1="10.5%" x2="65%" y2="19.1%" className="jardin"/>
				<line x1="85%" y1="10.5%" x2="85%" y2="19.1%" className="jardin"/>
				<line x1="88.5%" y1="10.5%" x2="88.5%" y2="19.1%" className="jardin"/>
				<line x1="72.2%" y1="20.8%" x2="72.2%" y2="22.6%" className="jardin"/>
				<line x1="89.8%" y1="19.1%" x2="89.8%" y2="82.8%" className="jardin"/>
				<line x1="89.8%" y1="32%" x2="95%" y2="32%" className="jardin"/>
				<line x1="89.8%" y1="40%" x2="95%" y2="40%" className="jardin"/>
				<line x1="89.8%" y1="45%" x2="95%" y2="45%" className="jardin"/>
				<line x1="89.8%" y1="53%" x2="95%" y2="53%" className="jardin"/>
				<line x1="89.8%" y1="65%" x2="95%" y2="65%" className="jardin"/>
				<line x1="89.8%" y1="70%" x2="95%" y2="70%" className="jardin"/>
				<line x1="89.8%" y1="76%" x2="95%" y2="76%" className="jardin"/>
				<rect x="44%" y="95%" width="4.5%" height="4.5%"   className="parking" />
				<rect x="44%" y="95%" width="4.5%" height="4.5%"   className="parking-border" />
				<text x="453" y="983"  className='parking-text'>P</text>
			    {this.props.children}
			</svg>
		)
	}
}

function matchStateToProps(state){
  return {
      global: state.global,
      stage: state.stage,
  }
}

function matchDispatchToProps(dispatch){
	return bindActionCreators({UpdateStage:UpdateStage}, dispatch)
}
export default connect(matchStateToProps,matchDispatchToProps)(Map);