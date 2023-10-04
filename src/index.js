import React, { Suspense,lazy } from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./modules/css/style.css";
import Mynavbar from './modules/shares/Mynavbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Mylandingpage from './modules/components/Mylandingpage';
import Myaboutpage from './modules/components/Myaboutpage';
import Errorpage from './modules/components/Errorpage';
import Mycontactus from './modules/components/Mycontactus';
import Myaxios from './modules/components/Myaxios';
import Mygraphpage from './modules/components/Mygraphpage';
import ProductDetails from './modules/components/ProductDetails';
import Myregistorpage from './modules/auth/Myregistorpage';
import Myservicepage from './modules/components/Myservicepage';
import Buymobilepage from './modules/components/subrouting/Buymobilepage';
import Repairmobilepage from './modules/components/subrouting/Repairmobilepage';

const Mylazym = lazy(()=>import('./modules/components/Lazyloadingpage'));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Mynavbar/>
      <Routes>
        <Route path='/' element={<Mylandingpage/>}></Route>
        <Route path='myabout' element={<Myaboutpage/>}/>
        <Route path='mycontactus' element={<Mycontactus/>}/>
        <Route path='myaxiosdata' element={<Myaxios/>}/>
        <Route path='mygraph' element={<Mygraphpage/>}/>
        <Route path='myaxiosdata/details/:id' element={<ProductDetails/>}/>
        <Route path='registor' element={<Myregistorpage/>}/>
        <Route path='myservice' element={<Myservicepage/>}>
            <Route path='buymobile' element={<Buymobilepage/>}/>
            <Route path='repair' element={<Repairmobilepage/>}/>
            <Route path='*' element={<Errorpage/>}/>
        </Route>
        <Route path='lazyloading' element={
          <Suspense fallback={<h1 style={{color:'red',backgroundColor:'blue',textAlign:'center',position:'absolute',top:'300px'}}>Loading</h1>}>
            <Mylazym/>
          </Suspense>
        }>
            


        </Route>

        <Route path='*' element={<Errorpage/>}/>

      </Routes>
    
    
    </BrowserRouter>
    
  </React.StrictMode>
);


