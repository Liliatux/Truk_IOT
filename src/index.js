import React from 'react';
import ReactDOM from 'react-dom';
import Select from './Select';
import Bouton from './Bouton';
import Map from './Map';
import './index.css';

ReactDOM.render(<Select />,
  document.getElementById('root')
);

ReactDOM.render(<Map />,
  document.getElementById('image')
);

ReactDOM.render(<Bouton />,
  document.getElementById('bouton')
);