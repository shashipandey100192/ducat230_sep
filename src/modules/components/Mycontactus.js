import React from 'react';
import { mydata } from './Mydata';

function Mycontactus() {
    return (
        <div className='container'>

            <div className='row'>
                    <div className='col-12'>
                        <h1>Total Users:{mydata.length}</h1>
                    </div>
                    {mydata.map((d) => {
                        return (
                            <div className='col-md-3'>
                            <div className="card text-bg-dark mb-3">
                                <img src={d.myimg} className='rounded-circle p-3' />
                                <h2 className='text-center'>{d.name}</h2>
                            </div>
                            </div>
                        )
                    })}




                
            </div>
        </div>
    )
}

export default Mycontactus