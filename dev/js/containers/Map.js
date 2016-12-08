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
							{this.props.stage.default ? <Floor>{Parser(this.props.global.floor)}</Floor> : <RDC>{Parser(this.props.global.rdc)}</RDC>}		
						</svg>
					</div>
				</section>
			);
		}else {
			return(
				<section>
					<div className="map-container bck-white">
						<h3 id="titleMap">{this.props.stage.name}</h3>
						<button id="titleMap" className="circular ui button" onClick={() => this.props.UpdateStage(this.props.stage, !this.props.stage.default)}><i className={this.props.stage.icon}></i></button>
						<svg version="1.1"  width="100%" height="100%" viewBox="0 0 1000 1000"  >
							{this.props.stage.default ?<Floor>{Parser(this.props.global.floor)}</Floor> : <RDC>{Parser(this.props.global.rdc)}</RDC>}
						</svg>
					</div>
				</section>
			);
		}
	}
}

class RDC extends Component {
	render(){
		return (
			<svg version="1.1"  width="100%" height="100%" viewBox="0 0 1000 1000" >
				<rect x="2.55%" y="11%" width="6.5%" height="40%"   className="enterprise black-stroke"   strokeWidth="0.5" />
				<rect x="2.55%" y="67%" width="38%" height="28%"  className="enterprise black-stroke"    strokeWidth="0.5" />
				<rect x="2.55%" y="0.2%" width="35.5%" height="7%"   className="sanitaire black-stroke"   strokeWidth="0.01"/>
				<rect x="34.5%" y="0.2%" width="7%" height="7%"   className="sanitaire black-stroke"   strokeWidth="0.5"/>
				<rect x="50%" y="0.2%" width="7%" height="7%"   className="sanitaire black-stroke"   strokeWidth="0.5"/>
				<rect x="2.55%" y="7%" width="6.5%" height="4%"   className="sanitaire black-stroke"   strokeWidth="0.001" />
				<rect x="13%" y="13%" width="10%" height="7%"   className="sanitaire black-stroke"   strokeWidth="0.5"/>
				<rect x="11%" y="20%" width="6%" height="15%"  className="sanitaire black-stroke"    strokeWidth="0.5" />
			    <rect x="54%" y="20%" width="12%" height="38%"   className="enterprise black-stroke"    strokeWidth="0.5"/>
			    <rect x="11%" y="35%" width="6%" height="16%"  className="enterprise black-stroke"    strokeWidth="0.5" />
				<rect x="2.5%" y="51%" width="14.5%" height="16%"  className="enterprise black-stroke"    strokeWidth="0.5" />
				<rect x="54%" y="67%" width="43.5%" height="28%"   className="enterprise black-stroke"    strokeWidth="0.01"/>
				<rect x="84%" y="55%" width="13.5%" height="13%"   className="enterprise black-stroke"    strokeWidth="0.01"/>
				<rect x="84%" y="55%" width="13.5%" height="13%"   className="enterprise black-stroke"    strokeWidth="0.01"/>
				<rect x="84%" y="7%" width="13.5%" height="48%"   className="enterprise black-stroke"    strokeWidth="0.5"/>
			
				<rect x="40%" y="20%" width="14%" height="75%"  stroke="black" fill="white" strokeWidth="1.5"/>

				<line x1="53.9%" y1="95%" x2="40.05%" y2="95%" stroke="white" strokeWidth="3"/>
				<line x1="54%" y1="61%" x2="54%" y2="64%" stroke="white" strokeWidth="3"/>

				<rect x="17%" y="20%" width="6%" height="50%" stroke="black"  className="rdc" strokeWidth="1.5"/>
				<rect x="67%" y="67%" width="17%" height="12%" stroke="#fff"  fill="#fff" strokeWidth="0.001"/>
			 	<line x1="2.5%" y1="0.1%" x2="97.5%" y2="0.1%" stroke="black" strokeWidth="1.5"/>
				<line x1="2.5%" y1="0.1%" x2="2.5%" y2="95%" stroke="black" strokeWidth="1.5"/>
				<line x1="40%" y1="95%" x2="2.5%" y2="95%" stroke="black" strokeWidth="1.5"/>
				<line x1="54%" y1="95%" x2="97.5%" y2="95%" stroke="black" strokeWidth="1.5"/>
				<line x1="97.5%" y1="0.1%" x2="97.5%" y2="95%" stroke="black" strokeWidth="1.5"/>
				<line x1="67%" y1="67%" x2="67%" y2="79%" stroke="black" strokeWidth="1.5"/>
				<line x1="70%" y1="67%" x2="70%" y2="79%" stroke="black" strokeWidth="1.5"/>
				<line x1="67%" y1="79%" x2="70%" y2="79%" stroke="black" strokeWidth="1.5"/>
				<line x1="67%" y1="67.4%" x2="70%" y2="67.4%" stroke="green" strokeWidth="1"/>
				<line x1="67%" y1="67.8%" x2="70%" y2="67.8%" stroke="green" strokeWidth="1"/>
				<line x1="67%" y1="68.2%" x2="70%" y2="68.2%" stroke="green" strokeWidth="1"/>
				<line x1="67%" y1="68.6%" x2="70%" y2="68.6%" stroke="green" strokeWidth="1"/>
				<line x1="67%" y1="69%" x2="70%" y2="69%" stroke="green" strokeWidth="1"/>
				<line x1="67%" y1="69.4%" x2="70%" y2="69.4%" stroke="green" strokeWidth="1"/>
				<line x1="67%" y1="69.8%" x2="70%" y2="69.8%" stroke="green" strokeWidth="1"/>
				<line x1="67%" y1="70.2%" x2="70%" y2="70.2%" stroke="green" strokeWidth="1"/>
				<line x1="67%" y1="70.6%" x2="70%" y2="70.6%" stroke="green" strokeWidth="1"/>
				<line x1="67%" y1="71%" x2="70%" y2="71%" stroke="green" strokeWidth="1"/>
				<line x1="67%" y1="71.4%" x2="70%" y2="71.4%" stroke="green" strokeWidth="1"/>
				<line x1="67%" y1="71.8%" x2="70%" y2="71.8%" stroke="green" strokeWidth="1"/>
				<line x1="67%" y1="72.2%" x2="70%" y2="72.2%" stroke="green" strokeWidth="1"/>
				<line x1="67%" y1="72.6%" x2="70%" y2="72.6%" stroke="green" strokeWidth="1"/>
				<line x1="67%" y1="73%" x2="70%" y2="73%" stroke="green" strokeWidth="1"/>
				<line x1="67%" y1="73.4%" x2="70%" y2="73.4%" stroke="green" strokeWidth="1"/>
				<line x1="67%" y1="73.8%" x2="70%" y2="73.8%" stroke="green" strokeWidth="1"/>
				<line x1="67%" y1="74.2%" x2="70%" y2="74.2%" stroke="green" strokeWidth="1"/>
				<line x1="67%" y1="74.6%" x2="70%" y2="74.6%" stroke="green" strokeWidth="1"/>
				<line x1="67%" y1="75%" x2="70%" y2="75%" stroke="green" strokeWidth="1"/>
				<line x1="43%" y1="2%" x2="45%" y2="2%" stroke="black" strokeWidth="1.5"/>
				<line x1="41.5%" y1="4%" x2="45%" y2="4%" stroke="black" strokeWidth="1.5"/>
				<line x1="45%" y1="0.1%" x2="45%" y2="2%" stroke="black" strokeWidth="1.5"/>
				<line x1="44.8%" y1="0.1%" x2="44.8%" y2="4%" stroke="green" strokeWidth="0.5"/>
				<line x1="44.6%" y1="0.1%" x2="44.6%" y2="4%" stroke="green" strokeWidth="0.5"/>
				<line x1="44.4%" y1="0.1%" x2="44.4%" y2="4%" stroke="green" strokeWidth="0.5"/>
				<line x1="44.2%" y1="0.1%" x2="44.2%" y2="4%" stroke="green" strokeWidth="0.5"/>
				<line x1="44%" y1="0.1%" x2="44%" y2="4%" stroke="green" strokeWidth="0.5"/>
				<line x1="43.8%" y1="0.1%" x2="43.8%" y2="4%" stroke="green" strokeWidth="0.5"/>
				<line x1="43.6%" y1="0.1%" x2="43.6%" y2="4%" stroke="green" strokeWidth="0.5"/>
				<line x1="43.4%" y1="0.1%" x2="43.4%" y2="4%" stroke="green" strokeWidth="0.5"/>
				<line x1="43.2%" y1="0.1%" x2="43.2%" y2="4%" stroke="green" strokeWidth="0.5"/>
				<line x1="43%" y1="0.1%" x2="43%" y2="4%" stroke="green" strokeWidth="0.5"/>

				<rect x="57%" y="0.2%" width="11%" height="7%"   className="sanitaire black-stroke"   strokeWidth="0.5"/>
				<rect x="68%" y="0.2%" width="12%" height="7%"   className="sanitaire black-stroke"   strokeWidth="0.5"/>
				<rect x="80%" y="0.2%" width="17.5%" height="7%"   className="sanitaire black-stroke"   strokeWidth="0.5"/>
				<path className="path1" d="M385 21c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"></path>
				<path className="path2" d="M385 25h-6c-1.105 0-2 0.895-2 2v10h2v12h2.5v-12h1v12h2.5v-12h2v-10c0-1.105-0.895-2-2-2z"></path>
				<path className="path1" d="M535 21c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"></path>
				<path className="path2" d="M539.5 33l1.531-1.109-4.165-6.441c-0.185-0.281-0.499-0.45-0.835-0.45h-8c-0.336 0-0.65 0.169-0.835 0.45l-4.165 6.441 1.531 1.109 3.458-4.487 1.202 2.804-4.191 7.683h3.833l0.667 10h2v-10h1v10h2l0.667-10h3.833l-4.191-7.683 1.202-2.804 3.458 4.487z"></path>
				<path className="red-fill" fill="red" d="M520 600c-5.523 0-10 4.477-10 10 0 10 10 22 10 22s10-12 10-22c0-5.523-4.477-10-10-10zM520 616c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z"></path>
				{this.props.children}
				<line x1="84%" y1="55%" x2="84%" y2="79%" className="black-stroke" strokeWidth="0.5"/>
				<line x1="84%" y1="79%" x2="69%" y2="79%" className="black-stroke" strokeWidth="0.5"/>
				<line x1="83%" y1="67%" x2="69%" y2="67%" stroke="#fff" strokeWidth="2"/>
				<line x1="67%" y1="67%" x2="54%" y2="67%" className="black-stroke" strokeWidth="0.5"/>
				<line x1="9%" y1="7.1%" x2="34.5%" y2="7.1%" className="black-stroke" strokeWidth="0.5"/>
				<line x1="9.1%" y1="7.1%" x2="9.1%" y2="11%" className="black-stroke" strokeWidth="0.5"/>

				
			</svg>
			)
	}
}

class Floor extends Component {
	render(){
		return (
			<svg>
				<rect x="23.05%" y="20%" width="6%" height="15%" className="reunion"    stroke="#000" strokeWidth ="0.5" />
				<rect x="23.05%" y="35%" width="6%" height="15%"   className="reunion"  stroke="#000" strokeWidth ="0.5" />
				<rect x="23.05%" y="50%" width="6%" height="12%"   className="reunion"  stroke="#000" strokeWidth ="0.5" />
				<rect x="16.05%" y="13%" width="13%" height="7%"   className="reunion"  stroke="#000" strokeWidth ="0.5"/>
				<rect x="9%" y="13%" width="7.05%" height="7%"   className="reunion"  stroke="#000" strokeWidth ="0.5"/>
				<rect x="33.95%" y="53%" width="6%" height="9%"   className="reunion"  stroke="#000" strokeWidth ="0.5"/>
				<rect x="33.95%" y="45%" width="6%" height="9%"   className="reunion"  stroke="#000" strokeWidth ="0.5"/>
				<rect x="33.95%" y="37%" width="6%" height="9%"   className="reunion"  stroke="#000" strokeWidth ="0.5"/>
				<rect x="33.95%" y="29%" width="6%" height="9%"   className="reunion"  stroke="#000" strokeWidth ="0.5"/>
				<rect x="33.95%" y="20%" width="6%" height="9%"   className="reunion"  stroke="#000" strokeWidth ="0.5"/>
				<rect x="2.55%" y="0.2%" width="10.5%" height="7%"   className="enterprise" stroke="#000" strokeWidth ="0.5"/>
				<rect x="12.55%" y="0.2%" width="16.5%" height="7%"   className="enterprise" stroke="#000" strokeWidth ="0.5"/>
				<rect x="2.55%" y="7.2%" width="6.5%" height="12.8%"   className="enterprise"  stroke="#000" strokeWidth ="0.5" />
				<rect x="2.55%" y="20%" width="14.4%" height="47%"  className="enterprise"   stroke="#000" strokeWidth ="0.5" />
				<rect x="2.55%" y="67%" width="38%" height="28%"  className="enterprise"   stroke="#000" strokeWidth ="0.5" />
				<rect x="29%" y="0.2%" width="5.5%" height="7%"   className="sanitaire"  stroke="#000" strokeWidth ="0.5"/>
				<rect x="34.5%" y="0.2%" width="7%" height="7%"   className="sanitaire"  stroke="#000" strokeWidth ="0.5"/>
				<rect x="50%" y="0.2%" width="7%" height="7%"   className="sanitaire"  stroke="#000" strokeWidth ="0.5"/>
				<rect x="63%" y="79%" width="7%" height="6%"   className="sanitaire"  stroke="#000" strokeWidth ="0.5"/>
			    <rect x="54%" y="20%" width="12%" height="42%"   className="enterprise"   stroke="#000" strokeWidth ="0.5"/>
				<rect x="54%" y="67%" width="4.5%" height="9%"   className="enterprise"   stroke="#000" strokeWidth ="0.5"/>
				<rect x="54%" y="76%" width="4.5%" height="6%"   className="enterprise"   stroke="#000" strokeWidth ="0.5"/>
				<rect x="54%" y="82%" width="4.5%" height="6%"   className="enterprise"  stroke="#000" strokeWidth ="0.5"/>
				<rect x="54%" y="88%" width="7%" height="7%"   className="enterprise"   stroke="#000" strokeWidth ="0.5"/>
				<rect x="61%" y="88%" width="6%" height="7%"   className="enterprise"   stroke="#000" strokeWidth ="0.5"/>
				<rect x="67%" y="88%" width="6%" height="7%"   className="enterprise"   stroke="#000" strokeWidth ="0.5"/>
				<rect x="73%" y="88%" width="6%" height="7%"   className="enterprise"   stroke="#000" strokeWidth ="0.5"/>
				<rect x="79%" y="88%" width="10%" height="7%"   className="enterprise"   stroke="#000" strokeWidth ="0.5"/>
				<rect x="70%" y="79%" width="9.5%" height="6%"   className="enterprise"   stroke="#000" strokeWidth ="0.5"/>
				<rect x="79.5%" y="79%" width="5%" height="6%"   className="enterprise"   stroke="#000" strokeWidth ="0.5"/>
				<rect x="84.5%" y="79%" width="4.5%" height="6%"   className="enterprise"   stroke="#000" strokeWidth ="0.5"/>
				<rect x="40%" y="20%" width="14%" height="42%" stroke="black"  fill="#fff" strokeWidth ="1.5"/>
				<rect x="40%" y="67%" width="14%" height="28%" stroke="black"  fill="#fff" strokeWidth ="1.5"/>
				<rect x="17%" y="67%" width="6%" height="4%" stroke="black"  className="rdc" strokeWidth ="1.5"/>
				<rect x="17%" y="20%" width="6%" height="42%" stroke="black"  className="rdc" strokeWidth ="1.5"/>
				<rect x="66%" y="20%" width="15%" height="42%" stroke="black"  className="rdc" strokeWidth ="1.5"/>
				<rect x="70%" y="67%" width="11%" height="12%" stroke="black"  className="rdc" strokeWidth ="1.5"/>
			 	<line x1="2.5%" y1="0.1%" x2="97.5%" y2="0.1%" stroke="black" strokeWidth="1.5"/>
				<line x1="2.5%" y1="0.1%" x2="2.5%" y2="95%" stroke="black" strokeWidth="1.5"/>
				<line x1="40%" y1="95%" x2="2.5%" y2="95%" stroke ="black" strokeWidth="1.5"/>
				<line x1="54%" y1="95%" x2="97.5%" y2="95%" stroke="black" strokeWidth = "1.5"/>
				<line x1="97.5%" y1="0.1%" x2="97.5%" y2="95%" stroke="black" strokeWidth = "1.5"/>
				<line x1="67%" y1="67%" x2="67%" y2="75%" stroke="black" strokeWidth = "1.5"/>
				<line x1="67%" y1="67%" x2="70%" y2="67%" stroke="black" strokeWidth = "1.5"/>
				<line x1="67%" y1="67.4%" x2="70%" y2="67.4%" className="green-line"/>
				<line x1="67%" y1="67.8%" x2="70%" y2="67.8%" className="green-line"/>
				<line x1="67%" y1="68.2%" x2="70%" y2="68.2%" className="green-line"/>
				<line x1="67%" y1="68.6%" x2="70%" y2="68.6%" className="green-line"/>
				<line x1="67%" y1="69%" x2="70%" y2="69%" className="green-line"/>
				<line x1="67%" y1="69.4%" x2="70%" y2="69.4%" className="green-line"/>
				<line x1="67%" y1="69.8%" x2="70%" y2="69.8%" className="green-line"/>
				<line x1="67%" y1="70.2%" x2="70%" y2="70.2%" className="green-line"/>
				<line x1="67%" y1="70.6%" x2="70%" y2="70.6%" className="green-line"/>
				<line x1="67%" y1="71%" x2="70%" y2="71%" className="green-line"/>
				<line x1="67%" y1="71.4%" x2="70%" y2="71.4%" className="green-line"/>
				<line x1="67%" y1="71.8%" x2="70%" y2="71.8%" className="green-line"/>
				<line x1="67%" y1="72.2%" x2="70%" y2="72.2%" className="green-line"/>
				<line x1="67%" y1="72.6%" x2="70%" y2="72.6%" className="green-line"/>
				<line x1="67%" y1="73%" x2="70%" y2="73%" className="green-line"/>
				<line x1="67%" y1="73.4%" x2="70%" y2="73.4%" className="green-line"/>
				<line x1="67%" y1="73.8%" x2="70%" y2="73.8%" className="green-line"/>
				<line x1="67%" y1="74.2%" x2="70%" y2="74.2%" className="green-line"/>
				<line x1="67%" y1="74.6%" x2="70%" y2="74.6%" className="green-line"/>
				<line x1="67%" y1="75%" x2="70%" y2="75%" className="green-line"/>
				<line x1="43%" y1="2%" x2="45%" y2="2%"  stroke="black" strokeWidth = "1.5"/>
				<line x1="41.5%" y1="4%" x2="45%" y2="4%"  stroke="black" strokeWidth = "1.5"/>
				<line x1="45%" y1="0.1%" x2="45%" y2="2%"  stroke="black" strokeWidth = "1.5"/>
				<line x1="44.8%" y1="0.1%" x2="44.8%" y2="4%" className="green-line"/>
				<line x1="44.6%" y1="0.1%" x2="44.6%" y2="4%" className="green-line"/>
				<line x1="44.4%" y1="0.1%" x2="44.4%" y2="4%" className="green-line"/>
				<line x1="44.2%" y1="0.1%" x2="44.2%" y2="4%" className="green-line"/>
				<line x1="44%" y1="0.1%" x2="44%" y2="4%" className="green-line"/>
				<line x1="43.8%" y1="0.1%" x2="43.8%" y2="4%" className="green-line"/>
				<line x1="43.6%" y1="0.1%" x2="43.6%" y2="4%" className="green-line"/>
				<line x1="43.4%" y1="0.1%" x2="43.4%" y2="4%" className="green-line"/>
				<line x1="43.2%" y1="0.1%" x2="43.2%" y2="4%" className="green-line"/>
				<line x1="43%" y1="0.1%" x2="43%" y2="4%" className="green-line"/>
				<rect x="57%" y="0.2%" width="7%" height="7%"   className="sanitaire"  stroke="#000" strokeWidth ="0.5"/>
				<rect x="64%" y="0.2%" width="10%" height="7%"   className="reunion"  stroke="#000" strokeWidth ="0.5"/>
				<rect x="74%" y="0.2%" width="8%" height="7%"   className="enterprise"  stroke="#000" strokeWidth ="0.5"/>
				<rect x="82%" y="0.2%" width="8%" height="7%"   className="enterprise"  stroke="#000" strokeWidth ="0.5"/>
				<rect x="90%" y="0.2%" width="7.5%" height="7%"   className="enterprise"  stroke="#000" strokeWidth ="0.5"/>
				<line x1="66%" y1="7.3%" x2="66%" y2="20%"  stroke="black" strokeWidth = "0.5"/>
				<line x1="81%" y1="60%" x2="81%" y2="79%"  stroke="black" strokeWidth = "0.5"/>
				<line x1="89%" y1="79%" x2="89%" y2="95%"  stroke="black" strokeWidth = "0.5"/>
				<path className="path1" d="M385 21c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"></path>
				<path className="path2" d="M385 25h-6c-1.105 0-2 0.895-2 2v10h2v12h2.5v-12h1v12h2.5v-12h2v-10c0-1.105-0.895-2-2-2z"></path>
				<path className="path1" d="M535 21c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"></path>
				<path className="path2" d="M539.5 33l1.531-1.109-4.165-6.441c-0.185-0.281-0.499-0.45-0.835-0.45h-8c-0.336 0-0.65 0.169-0.835 0.45l-4.165 6.441 1.531 1.109 3.458-4.487 1.202 2.804-4.191 7.683h3.833l0.667 10h2v-10h1v10h2l0.667-10h3.833l-4.191-7.683 1.202-2.804 3.458 4.487z"></path>
				<path className="path1" d="M660 807c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"></path>
				<path className="path2" d="M675 807c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"></path>
				<path className="path3" d="M660 810h-6c-1.105 0-2 0.895-2 2v10h2v12h2.5v-12h1v12h2.5v-12h2v-10c0-1.105-0.895-2-2-2z"></path>
				<path className="path4" d="M679.469 818l1.531-1.109-4.165-6.441c-0.185-0.281-0.499-0.45-0.835-0.45h-8c-0.336 0-0.65 0.169-0.835 0.45l-4.165 6.441 1.531 1.109 3.458-4.487 1.202 2.804-4.191 7.683h3.833l0.667 10h2v-10h1v10h2l0.667-10h3.833l-4.191-7.683 1.202-2.804 3.458 4.487z"></path>
				{this.props.children}
				<line x1="53.9%" y1="95%" x2="40.1%" y2="95%" stroke="white" strokeWidth="3"/>
			</svg>
		)
	}
}

function matchStateToProps(state){
  return {
      global: state.global,
      stage: state.stage
  }
}

function matchDispatchToProps(dispatch){
	return bindActionCreators({UpdateStage:UpdateStage}, dispatch)
}
export default connect(matchStateToProps,matchDispatchToProps)(Map);