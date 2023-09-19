import React, { Fragment } from 'react';
import Abc from '../image/img4.jpg';

function Myaboutpage() {
  return (
    <Fragment>
    <div>Myaboutpage</div>
    <img src={Abc} width="500" alt="about pic" />
    </Fragment>
  )
}

export default Myaboutpage