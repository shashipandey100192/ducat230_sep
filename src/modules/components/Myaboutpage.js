import React, { Fragment } from 'react';
import Abc from '../image/img4.jpg';


const mydata = [10,20,30,40,50,60,70,80,90,14];

function Myaboutpage() {

  return (
    <Fragment>
    <div>Myaboutpage</div>
    <img src={Abc} width="500" alt="about pic" />

    {mydata.map((d)=>{
        return(
          <h4>this is headding: {d}</h4>
        )
    })}

    <select>
    {mydata.map((d)=>{
        return(
          <option id={d}>this:{d}</option>
        )
    })}
    </select>


    </Fragment>
  )
}

export default Myaboutpage