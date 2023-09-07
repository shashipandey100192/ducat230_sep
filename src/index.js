import React from 'react';
import ReactDOM from 'react-dom/client';
import Ducat from './About';
import { Abcd , Xyz} from './About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Ducat></Ducat>
    <Abcd></Abcd>
    <Xyz></Xyz>
  </React.StrictMode>
);


