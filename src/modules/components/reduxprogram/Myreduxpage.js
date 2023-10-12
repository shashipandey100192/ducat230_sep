import React from 'react';
import { increment,decrement,myinc } from './Myactions';
import { useSelector, useDispatch } from 'react-redux';


function Myreduxpage() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();

  return (
    <div style={{marginTop:'100px'}}>
      <div>
        <button onClick={() => dispatch(increment())}> Increment</button>
        <h1><span>{count}</span></h1>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(myinc())}>reset</button>
      </div>
    </div>
  )
}

export default Myreduxpage