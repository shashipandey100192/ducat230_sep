import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Myaxios() {
  const [svariale, sfunc] = useState([]);
  const [dv, fv] = useState([]);
  const [imgs, setimgs] = useState([]);

  const myapi = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos').then((d) => {
      console.log(d.data);
      sfunc(d.data);
    })
  }


  const myapimulti = () => {
    axios.get('https://dummyjson.com/products').then((res) => {
      console.log(res.data.products);
      fv(res.data.products);
      setimgs(res.data.products[0].images);
      console.log(res.data.products[0].images);
    })
  }
  useEffect(() => {
    myapi();
    myapimulti();
  }, [])


  return (
    <div style={{marginTop:'60px'}}>
      <button type='button' onClick={myapi}>get data</button>
      <div className='container'>
        <div className='row'>
          {imgs.map((m,a) => {
            return (
              <div className='col' key={a}>
                <img src={m} width={200}></img>
              </div>
              
            )
          })}
         
        </div>

        <div className='row'>
          {svariale.map((d) => {
            return (
              <div className='col-md-3 border' key={d.id}>
                <div className=" m-2">
                  <div className="card-body">
                    <h2 className="card-title">{d.id}</h2>
                    <h5 className="card-title">{d.title}</h5>
                    <p className="card-text">{d.userId}</p>
                    <a href="#" className="btn btn-primary">{d.completed === true ? "Yes" : "No"}</a>
                    <Link to={`details/` + d.id}>View Details</Link>
                  </div>
                </div>
              </div>

            )
          })}



        </div>
      </div>


    </div>


  )
}

export default Myaxios