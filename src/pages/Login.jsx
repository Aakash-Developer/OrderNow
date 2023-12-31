import React from 'react'
import { Input,Button } from '../components'
import { Link } from 'react-router-dom'

export default function Login() {
  const FromInputCheck=(e)=>{
    console.log(e.target.value)
  }
  const SubmitData=(e)=>{
  console.log(e)
  }
  return (
    <div>
    <h1 className='fs-1 fw-bold text-uppercase mb-5 text-center'>Login</h1>
    <form className='w-100'>
     <div className='row'>
     <div className='col-12'>
     <Input type="email" name="email" placeholder="email" changeHandler={FromInputCheck} lable="Email"/>
     </div>
     <div className='col-12'>
     <Input type="Password" name="password" placeholder="Password" changeHandler={FromInputCheck} lable="Password"/>
     </div>
     </div>
     <div className='col-12'>
     <p><Link to="forgrotpassword">Forgot Password ?</Link></p>
     </div>
     <div>
     <Button type="button" className="btn-outline-primary me-3" lable="Submit" clickHandler={SubmitData}/>
     <Button type="reset" className="btn-outline-danger me-3" lable="Reset" clickHandler={SubmitData}/>
     </div>
    </form>
    </div>
  )
}
