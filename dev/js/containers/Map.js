import React, {Component} from 'react';

class Map extends Component {
	constructor(){
		super();
		this.state = {
			content : 
				<svg width="100%" height="100vh">
				    
				    <line className="animate_last red-line"  x1="10.8%" y1="11.5%" x2="10.8%" y2="6.5%" />
					<line className="animate_fifth red-line" x1="31.5%" y1="11.5%" x2="10.8%" y2="11.5%" />
					<line className="animate_fourth red-line" x1="31.5%" y1="57.5%" x2="31.5%" y2="11.5%" />
					<line className="animate_third red-line" x1="68%" y1="57.5%" x2="31.5%" y2="57.5%" />
					<line className="animate_second red-line" x1="68%" y1="74.5%" x2="68%" y2="57.5%" />
					<line className="animate_first red-line" x1="73%" y1="74.5%" x2="68%" y2="74.5%" />
					<circle cx="10.8%" cy="6.2%" r="0.3%" fill="red" />
					
				    <line x1="2.5%" y1="0.1%" x2="97.5%" y2="0.1%" className="black-line"/>
					<line x1="2.5%" y1="0.1%" x2="2.5%" y2="95%" className="black-line"/>
					<line x1="40%" y1="95%" x2="2.5%" y2="95%" className="black-line"/>
					<line x1="40%" y1="15%" x2="40%" y2="56%" className="black-line"/>
					<line x1="40%" y1="59%" x2="40%" y2="95%" className="black-line"/>
					<line x1="40%" y1="16%" x2="60%" y2="16%" className="black-line"/>
					<line x1="60%" y1="13%" x2="60%" y2="56%" className="black-line"/>
					<line x1="60%" y1="59%" x2="60%" y2="95%" className="black-line"/>
					<line x1="60%" y1="95%" x2="74%" y2="95%" className="black-line"/>
					<line x1="97.5%" y1="0.1%" x2="97.5%" y2="97.5%" className="black-line"/>
					<line x1="73.5%" y1="88%" x2="76%" y2="88%" className="black-line"/>
					<line x1="76%" y1="97.5%" x2="97.5%" y2="97.5%" className="black-line"/>
					<line x1="76%" y1="88%" x2="76%" y2="97.5%" className="black-line"/>

					<line x1="34%" y1="55%" x2="60%" y2="55%" className="black-line"/>
					<line x1="39%" y1="60%" x2="60%" y2="60%" className="black-line"/>

					<line x1="23%" y1="59%" x2="23%" y2="75%" className="black-line"/>
					<line x1="18.5%" y1="59%" x2="18.5%" y2="75%" className="black-line"/>
					<line x1="23%" y1="23%" x2="23%" y2="56%" className="black-line"/>
					<line x1="18.5%" y1="14%" x2="18.5%" y2="56%" className="black-line"/>
					<line x1="10%" y1="14%" x2="29%" y2="14%" className="black-line"/>
					<line x1="18.5%" y1="75%" x2="23%" y2="75%" className="black-line"/>

					<line x1="18.5%" y1="55%" x2="29%" y2="55%" className="black-line"/>
					<line x1="2.5%" y1="60%" x2="36%" y2="60%" className="black-line"/>

					<line x1="34%" y1="52%" x2="34%" y2="55%" className="black-line"/>
					<line x1="34%" y1="47%" x2="34%" y2="49%" className="black-line"/>
					<line x1="34%" y1="48%" x2="40%" y2="48%" className="black-line"/>

					<line x1="34%" y1="38%" x2="34%" y2="44%" className="black-line"/>
					<line x1="34%" y1="41%" x2="40%" y2="41%" className="black-line"/>

					<line x1="34%" y1="30%" x2="34%" y2="35%" className="black-line"/>
					<line x1="34%" y1="34%" x2="40%" y2="34%" className="black-line"/>
					
					<line x1="34%" y1="27%" x2="34%" y2="25%" className="black-line"/>
					<line x1="34%" y1="15%" x2="34%" y2="22%" className="black-line"/>
					<line x1="34%" y1="26%" x2="40%" y2="26%" className="black-line"/>

					<line x1="34%" y1="15%" x2="40%" y2="15%" className="black-line"/>

					
					<line x1="29%" y1="52%" x2="29%" y2="55%" className="black-line"/>
					<line x1="29%" y1="47%" x2="29%" y2="49%" className="black-line"/>
					<line x1="29%" y1="48%" x2="23%" y2="48%" className="black-line"/>

					<line x1="29%" y1="34%" x2="23%" y2="34%" className="black-line"/>
					<line x1="29%" y1="37%" x2="29%" y2="45%" className="black-line"/>
					
					<line x1="29%" y1="26%" x2="29%" y2="35%" className="black-line"/>
					<line x1="29%" y1="23%" x2="2.5%" y2="23%" className="black-line"/>
					<line x1="29%" y1="22%" x2="29%" y2="24%" className="black-line"/>
					<line x1="29%" y1="14%" x2="29%" y2="20%" className="black-line"/>
					
					<line x1="10%" y1="12%" x2="10%" y2="23%" className="black-line"/>

					<line x1="10%" y1="8%" x2="10%" y2="10%" className="black-line"/>
					<line x1="10%" y1="8%" x2="2.5%" y2="8%" className="black-line"/>
					<line x1="29%" y1="8%" x2="29%" y2="0.1%" className="black-line"/>
					<line x1="12%" y1="8%" x2="12%" y2="0.1%" className="black-line"/>
					<line x1="11.5%" y1="8%" x2="12.5%" y2="8%" className="black-line"/>
					<line x1="14%" y1="8%" x2="27%" y2="8%" className="black-line"/>
					<line x1="28.5%" y1="8%" x2="31%" y2="8%" className="black-line"/>

					
					<text x="37%" y="4%">WC</text>

					<line x1="33%" y1="8%" x2="43%" y2="8%" className="black-line"/>
					<line x1="34%" y1="8%" x2="34%" y2="0.1%" className="black-line"/>
					<line x1="44%" y1="5%" x2="44%" y2="0.1%" className="black-line"/>
					<line x1="42%" y1="5%" x2="44%" y2="5%" className="black-line"/>
					<line x1="44%" y1="8%" x2="44%" y2="5%" className="black-line"/>
					<line x1="46%" y1="8%" x2="46%" y2="6.5%" className="black-line"/>
					<line x1="44%" y1="4%" x2="47%" y2="4%" className="black-line"/>
					<line x1="44%" y1="8%" x2="46%" y2="8%" className="black-line"/>
					<line x1="46%" y1="4%" x2="46%" y2="5%" className="black-line"/>
					<line x1="48%" y1="2%" x2="48%" y2="0.1%" className="black-line"/>
					<line x1="45%" y1="2%" x2="48%" y2="2%" className="black-line"/>
					
					
					<line x1="45.6%" y1="2%" x2="45.6%" y2="0.1%" className="green-line"/>	
					<line x1="45.8%" y1="2%" x2="45.8%" y2="0.1%" className="green-line"/>
					<line x1="46%" y1="2%" x2="46%" y2="0.1%" className="green-line"/>
					<line x1="46.2%" y1="2%" x2="46.2%" y2="0.1%" className="green-line"/>
					<line x1="46.4%" y1="2%" x2="46.4%" y2="0.1%" className="green-line"/>
					<line x1="46.6%" y1="2%" x2="46.6%" y2="0.1%" className="green-line"/>
					<line x1="46.8%" y1="2%" x2="46.8%" y2="0.1%" className="green-line"/>
					<line x1="47%" y1="2%" x2="47%" y2="0.1%" className="green-line"/>
					<line x1="47.2%" y1="2%" x2="47.2%" y2="0.1%" className="green-line"/>
					<line x1="47.4%" y1="2%" x2="47.4%" y2="0.1%" className="green-line"/>
					<line x1="47.6%" y1="2%" x2="47.6%" y2="0.1%" className="green-line"/>
					<line x1="47.8%" y1="2%" x2="47.8%" y2="0.1%" className="green-line"/>


					<line x1="45.6%" y1="4%" x2="45.6%" y2="2%" className="green-line"/>	
					<line x1="45.8%" y1="4%" x2="45.8%" y2="2%" className="green-line"/>
					<line x1="46%" y1="4%" x2="46%" y2="2%" className="green-line"/>
					<line x1="46.2%" y1="4%" x2="46.2%" y2="2%" className="green-line"/>
					<line x1="46.4%" y1="4%" x2="46.4%" y2="2%" className="green-line"/>
					<line x1="46.6%" y1="4%" x2="46.6%" y2="2%" className="green-line"/>
					<line x1="46.8%" y1="4%" x2="46.8%" y2="2%" className="green-line"/>
					<line x1="47%" y1="4%" x2="47%" y2="2%" className="green-line"/>
					
					<text x="56.5%" y="4%">WC</text>

					<line x1="51%" y1="5%" x2="51%" y2="0.1%" className="black-line"/>
					<line x1="51%" y1="8%" x2="51%" y2="7%" className="black-line"/>
					<line x1="51%" y1="8%" x2="53%" y2="8%" className="black-line"/>

					<line x1="53%" y1="8%" x2="53%" y2="0.1%" className="black-line"/>
					<line x1="51%" y1="3%" x2="53%" y2="3%" className="black-line"/>

					<line x1="51%" y1="3%" x2="53%" y2="0.1%"  className="red-line"/>
					<line x1="53%" y1="3%" x2="51%" y2="0.1%"  className="red-line"/>

					<line x1="53%" y1="5%" x2="55%" y2="5%" className="black-line"/>

					<line x1="54%" y1="8%" x2="83%" y2="8%" className="black-line"/>
					<line x1="62%" y1="8%" x2="62%" y2="0.1%" className="black-line"/>


					<line x1="72.5%" y1="13%" x2="72.5%" y2="55%" className="black-line"/>
					<line x1="68%" y1="55%" x2="72.5%" y2="55%" className="black-line"/>
					<line x1="60%" y1="55%" x2="65%" y2="55%" className="black-line"/>
					<line x1="60%" y1="13%" x2="83%" y2="13%" className="black-line"/>



					
					<line x1="60%" y1="62%" x2="65%" y2="62%" className="black-line"/>
					<line x1="65%" y1="62%" x2="65%" y2="63%" className="black-line"/>
					<line x1="65%" y1="65%" x2="65%" y2="78%" className="black-line"/>
					<line x1="60%" y1="74%" x2="65%" y2="74%" className="black-line"/>


				    <line x1="60%" y1="81%" x2="65%" y2="81%" className="black-line"/>
					<line x1="65%" y1="80%" x2="65%" y2="85%" className="black-line"/>
					<line x1="60%" y1="88%" x2="66%" y2="88%" className="black-line"/>
					<line x1="65%" y1="87%" x2="65%" y2="88%" className="black-line"/>
					
					
					<line x1="67.5%" y1="88%" x2="70%" y2="88%" className="black-line"/>
					<line x1="68%" y1="88%" x2="68%" y2="95%" className="black-line"/>
					<line x1="71%" y1="88%" x2="71%" y2="95%" className="black-line"/>
					<line x1="74%" y1="88%" x2="74%" y2="95%" className="black-line"/>
					<line x1="71%" y1="88%" x2="72.5%" y2="88%" className="black-line"/>
					
					<text x="68.5%" y="80%">WC</text>
					<line x1="67.5%" y1="84%" x2="72%" y2="84%" className="black-line"/>
					<line x1="67.5%" y1="76%" x2="67.5%" y2="82%" className="black-line"/>
					<line x1="67.5%" y1="76%" x2="97.5%" y2="76%" className="black-line"/>
					<line x1="72%" y1="76%" x2="72%" y2="84%" className="black-line"/>

					<line x1="72%" y1="60%" x2="72%" y2="73%" className="black-line"/>
					<line x1="72%" y1="60%" x2="83%" y2="60%" className="black-line"/>
					<line x1="72%" y1="55%" x2="83%" y2="55%" className="black-line"/>
					<line x1="83%" y1="60%" x2="83%" y2="76%" className="black-line"/>
					<line x1="74%" y1="63%" x2="74%" y2="76%" className="black-line"/>

					<line x1="72%" y1="63%" x2="74%" y2="63%" className="green-line"/>
					<line x1="72%" y1="63.4%" x2="74%" y2="63.4%" className="green-line"/>
					<line x1="72%" y1="63.8%" x2="74%" y2="63.8%" className="green-line"/>
					<line x1="72%" y1="64.2%" x2="74%" y2="64.2%" className="green-line"/>
					<line x1="72%" y1="64.6%" x2="74%" y2="64.6%" className="green-line"/>
					<line x1="72%" y1="65%" x2="74%" y2="65%" className="green-line"/>
					<line x1="72%" y1="65.4%" x2="74%" y2="65.4%" className="green-line"/>
					<line x1="72%" y1="65.8%" x2="74%" y2="65.8%" className="green-line"/>
					<line x1="72%" y1="66.2%" x2="74%" y2="66.2%" className="green-line"/>
					<line x1="72%" y1="66.6%" x2="74%" y2="66.6%" className="green-line"/>
					<line x1="72%" y1="67%" x2="74%" y2="67%" className="green-line"/>
					<line x1="72%" y1="67.4%" x2="74%" y2="67.4%" className="green-line"/>
					<line x1="72%" y1="67.8%" x2="74%" y2="67.8%" className="green-line"/>
					<line x1="72%" y1="68.2%" x2="74%" y2="68.2%" className="green-line"/>
					<line x1="72%" y1="68.6%" x2="74%" y2="68.6%" className="green-line"/>
					<line x1="72%" y1="69%" x2="74%" y2="69%" className="green-line"/>
					<line x1="72%" y1="69.4%" x2="74%" y2="69.4%" className="green-line"/>
					<line x1="72%" y1="69.8%" x2="74%" y2="69.8%" className="green-line"/>
					<line x1="72%" y1="70.2%" x2="74%" y2="70.2%" className="green-line"/>
					<line x1="72%" y1="70.6%" x2="74%" y2="70.6%" className="green-line"/>
					<line x1="72%" y1="71%" x2="74%" y2="71%" className="green-line"/>
					<line x1="72%" y1="71.4%" x2="74%" y2="71.4%" className="green-line"/>
					<line x1="72%" y1="71.8%" x2="74%" y2="71.8%" className="green-line"/>
					<line x1="72%" y1="72.2%" x2="74%" y2="72.2%" className="green-line"/>
					<line x1="72%" y1="72.6%" x2="74%" y2="72.6%" className="green-line"/>
					<line x1="72%" y1="73%" x2="74%" y2="73%" className="green-line"/>


					<line x1="83%" y1="55%" x2="83%" y2="13%" className="black-line"/>
					<line x1="83%" y1="11%" x2="83%" y2="13%" className="black-line"/>
					<line x1="83%" y1="8%" x2="83%" y2="9%" className="black-line"/>


					<text x="3%" y="4%">Simplon.co</text>
					<text x="17%" y="4%">Simplon.co</text>
					<text x="2.6%" y="15%">Proxy</text>
					<text x="3.6%" y='17%'>Media</text>
					<text x="18%" y="85%">Sigfox</text>
					<text x="7.5%" y="45%">CityMeo</text>

					<text x="66%" y="22%">U</text>
					<text x="66%" y="25%">b</text>
					<text x="66.2%" y="28%">i</text>
					<text x="66%" y="31%">g</text>
					<text x="66.2%" y="34%">r</text>
					<text x="66%" y="37%">e</text>
					<text x="66%" y="40%">e</text>
					<text x="66%" y="43%">n</text>
				</svg> 
		}
	}
	render(){
		return(
			<div className="Map">
				<div className="Svg">
					{this.state.content}
				</div>
			</div>
		);
	}
}


export default Map;