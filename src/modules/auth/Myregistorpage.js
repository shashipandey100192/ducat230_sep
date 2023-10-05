import React from 'react';
import { useForm } from 'react-hook-form';

function Myregistorpage() {
    const { register, handleSubmit,formState: { errors } } = useForm();

const mysubmmit = (alldata)=>{
    console.log(alldata);
   
}

    return (
        <form onSubmit={handleSubmit(mysubmmit)}>
        <div className='container page border p-5 shadow bg-light'>
            <div className='row'>
                <div className='col-12'>
                    <h1 className='text-center'>registor page</h1>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-6 p-1'>
                    <label className="form-label">Full Name</label>
                    <input type="text" className="form-control" {...register("fullname",{required:true})}/>
                    {errors.fullname && <span className='text-danger'>full name is required</span>}
                </div>
                <div className='col-md-6 p-1'>
                    <label className="form-label">Email id</label>
                    <input type="email" className="form-control" {...register("email",{required:true})}/>
                    {errors.email && <span className='text-danger'>email id is required</span>}
                </div>
                <div className='col-md-6 p-1'>
                    <label className="form-label">Phone No</label>
                    <input type="text" className="form-control" {...register("phone")}/>
                </div>
                <div className='col-md-6 p-1'>
                    <label className="form-label">Gender</label>
                   <select className="form-control" {...register("gender")}>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                   </select>
                </div>
                <div className='col-md-6 p-1'>
                    <label className="form-label">Create Password</label>
                    <input type="password" className="form-control" {...register("pass",{required:true})}/>
                    {errors.pass && <span className='text-danger'>password required</span>}
                </div>
                <div className='col-md-6 p-1'>
                    <label className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" {...register("cpass",{required:true})}/>
                    {errors.cpass && <span className='text-danger'>conform password required</span>}
                    
                </div>
                <div className='col-md-12 p-1'>
                    <label className="form-label">Remarks</label>
                    <textarea className='form-control' defaultValue="type text" {...register("remark")}></textarea>
                </div>
                <div className='col-md-12 p-1 text-center'>
                    <button type='submit' className='btn btn-success'> Submit</button>
                    <button type='button' className='btn btn-danger ms-3'> Cancel</button>
                </div>
            </div>
        </div>
        </form>
    )
}

export default Myregistorpage