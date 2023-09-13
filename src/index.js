import React from 'react';
import ReactDOM from 'react-dom/client';
import Ducat, { Contactus } from './About';
import { Abcd , Xyz} from './About';
import Myclasscop from './MyFomrs';
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Mybs from './Mybs';
import Myreactbs from './Myreactbs';
import Uimetrial from './Uimetrial';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Uimetrial/>
    <Mybs/>
    <Myreactbs/>
    <Ducat></Ducat>
    <Abcd></Abcd>
    <Xyz></Xyz>
    <Contactus/>
    <Myclasscop/>
    
    
  </React.StrictMode>
);


