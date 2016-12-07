import React from 'react';
import Header from '../containers/Header';
import Select from '../containers/Select';
import Map from '../containers/Map';
import Bouton from '../containers/Bouton';

const App = () => (
	<div>
		<Header/>
		<div className="content">
			<Select/>
			<Map/>
			<Bouton/>
		</div>
	</div>
);


export default App;