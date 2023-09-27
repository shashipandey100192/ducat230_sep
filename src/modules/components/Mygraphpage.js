import React, { Fragment } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

import { Mychart } from './Mydata';

function Mygraphpage() {
  return (
    <Fragment>
      <div className='container border shadow mt-3 p-3'>
        <div className='row'>
          <div className='col-12 bg-dark'>
            
         
    <h1 className='text-center '>This is Graph</h1>
    <BarChart
      width={1200}
      height={500}
      data={Mychart}>
      {/* <CartesianGrid strokeDasharray="3 3" /> */}
      <XAxis dataKey="name" />
      {/* <YAxis /> */}
      <Tooltip />
      <Legend />
      <Bar dataKey="maxv" fill="blue" />
      <Bar dataKey="minv" fill="green" />
      <Bar dataKey="currentv" fill="red" />
    </BarChart>
    </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Mygraphpage