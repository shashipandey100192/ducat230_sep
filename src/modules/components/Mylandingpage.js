import React, { useEffect, useState } from 'react'

function Mylandingpage() {
  const getmydata = JSON.parse(localStorage.getItem('userdata'));
  console.log(getmydata);


  return (
    <div className='container page'>
        <h1>this is welcome page / Home page</h1>
        <table className="table table-bordered">
  <thead>
   
    <tr>
      <th scope="col">S.no</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">Gender</th>
      <th scope="col">Password</th>
      <th scope="col">Remark</th>
    </tr>
  </thead>
  <tbody>
  {getmydata!==null ? getmydata.map((item,a=1)=>{
      return(
        <tr key={++a}>
      <th scope="row">{++a}</th>
      <td>{item.fullname}</td>
      <td>{item.phone}</td>
      <td>{item.email}</td>
      <td>{item.gender}</td>
      <td>{item.pass}</td>
      <td>{item.remark}</td>

    </tr>
      )
    }) : <h1>not found</h1>}
    
  </tbody>
</table>
      
      </div>
  )
}

export default Mylandingpage