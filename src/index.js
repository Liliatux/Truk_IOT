import React from 'react';
import ReactDOM from 'react-dom';
import Select from './Select';
import Svg from './Svg';
import Bouton from './Bouton';
import Header from './header';
import './index.css';

ReactDOM.render(
	<div>
	<Header />
	<Select />
	<Svg />
	<Bouton />
	</div>
	, document.getElementById('root')
);

