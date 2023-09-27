import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetails() {
    const {id} = useParams();
    console.log(id);
const [singledata,singlefun]=useState({})

const mysingledata = ()=>{
    axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`).then((d)=>{
            console.log(d.data);    
            singlefun(d.data)
        })
}

useEffect(()=>{
    mysingledata();
},[])

  return (
    <div>
        <h1>ProductDetails</h1>
        <h2>{singledata.id}</h2>
        <h2>{singledata.title}</h2>



    </div>
  )
}

export default ProductDetails