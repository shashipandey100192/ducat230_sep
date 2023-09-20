import React, { useEffect, useState } from 'react'

function Mylandingpage() {

  const [svariable, sfunction]=useState(20)

  const myfunction = ()=>{
    alert("welcome to react js");
    sfunction(6000);
  }

  const [dcolor,ccolor]=useState("red");
  const changeback = (p)=>{
        console.log(p.target.value);
        ccolor(p.target.value);
  }


const a = ()=>{
   console.log("this is onload function of javascript");
}

useEffect(()=>{
  a();
  
})


  return (
    <div>
        <h1>Mylandingpage</h1>
        <img src="photos/img5.jpg" width="600" alt="sdkmfhjksdf"/>
        <button type='button' onClick={myfunction}>alert fucntion</button>
        <h1>display {svariable}</h1>

        <input type="color" onInput={changeback}/>
        <div style={{width:'500px',height:'500px',border:'2px solid blue',backgroundColor:`${dcolor}`}}>
      change back

        </div>
      
      </div>
  )
}

export default Mylandingpage