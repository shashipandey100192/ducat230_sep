import React from 'react';
import ReactDOM from 'react-dom/client';
import Ducat, { Contactus } from './About';
import { Abcd , Xyz} from './About';
import Myclasscop from './MyFomrs';
import "./style.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Ducat></Ducat>
    <Abcd></Abcd>
    <Xyz></Xyz>
    <Contactus/>
    <Myclasscop/>
  </React.StrictMode>
);


