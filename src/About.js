import React, { Fragment } from "react";

function Abc()
{
    return "welcome to react js";
}

export default Abc

export function Abcd()
{
    return "this is name export function";
}

export function Xyz()
{
    return <div><h1>heading one</h1> <h2>sdfsdfhjsdhfjsdhfjh sjdhfjshd</h2></div>;    
}

export function Contactus()
{
    const a=50;
    return(
        
        <Fragment>
        <h1>heading one</h1>
        <h2 style={{color:'red',backgroundColor:'blue',fontSize:`${a}px`}}>heading two</h2>
        <p className="head">this is paragraph</p>
        </Fragment>
    )
}


