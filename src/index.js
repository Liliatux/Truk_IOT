import React from 'react';
import ReactDOM from 'react-dom';
import Select from './Select';
import Bouton from './Bouton';
import Header from './header';
import './index.css';

ReactDOM.render(
	<div>
	<Header />
	<Select />
	<Bouton />
	</div>
	, document.getElementById('root')
);

