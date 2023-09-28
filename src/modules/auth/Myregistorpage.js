import React from 'react'

function Myregistorpage() {
    return (
        <div className='container page border p-5 shadow bg-light'>
            <div className='row'>
                <div className='col-12'>
                    <h1 className='text-center'>registor page</h1>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-6 p-3'>
                    <label className="form-label">Full Name</label>
                    <input type="text" class="form-control" />
                </div>
                <div className='col-md-6 p-3'>
                    <label className="form-label">Email id</label>
                    <input type="email" class="form-control" />
                </div>
                <div className='col-md-6 p-3'>
                    <label className="form-label">Phone No</label>
                    <input type="text" class="form-control" />
                </div>
                <div className='col-md-6 p-3'>
                    <label className="form-label">Gender</label>
                   <select className="form-control">
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                   </select>
                </div>
                <div className='col-md-6 p-3'>
                    <label className="form-label">Create Password</label>
                    <input type="password" class="form-control" />
                </div>
                <div className='col-md-6 p-3'>
                    <label className="form-label">Confirm Password</label>
                    <input type="password" class="form-control" />
                </div>
                <div className='col-md-12 p-3'>
                    <label className="form-label">Remarks</label>
                    <textarea className='form-control'> type remark here...</textarea>
                </div>
                <div className='col-md-12 p-3 text-center'>
                    <button type='button' className='btn btn-success'> Submit</button>
                    <button type='button' className='btn btn-danger ms-3'> Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default Myregistorpage