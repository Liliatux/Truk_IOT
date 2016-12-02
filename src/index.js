import React from 'react';
import ReactDOM from 'react-dom';
import Select from './Select';
import Bouton from './Bouton';
import './index.css';

ReactDOM.render(<Select />,
  document.getElementById('root')
);

ReactDOM.render(<Bouton />,
  document.getElementById('bouton')
);