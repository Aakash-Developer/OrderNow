import React ,{useState}from 'react'
import { Input,Button } from '../components' 
export default function Register() {
  const [FormData,setFormData] =useState({});
  const FromInputCheck=(e)=>{
    console.log(e.target.name)
    const {name ,value} =e.target;
    setFormData((FormData)=>({
      ...FormData,[name]:value
    }))
  }
  const SubmitData=(e)=>{
  console.log(FormData)
  }
  return (
    <div>
    <h1 className='fs-1 fw-bold text-uppercase mb-5 text-center'>Register</h1>
    <form className='w-100'>
     <div className='row'>
     <div className='col-12 col-md-6'>
     <Input type="text" name="firstName"  changeHandler={FromInputCheck} lable="First Name"/>
     </div>
     <div className='col-12 col-md-6'>
     <Input type="text" name="lastName" changeHandler={FromInputCheck} lable="Last Name"/>
     </div>
     </div>
     <div className='row'>
     <div className='col-12'>
     <Input type="email" name="email" placeholder="email" changeHandler={FromInputCheck} lable="Email"/>
     </div>
     <div className='col-12'>
     <Input type="Password" name="password" placeholder="Password" changeHandler={FromInputCheck} lable="Password"/>
     </div>
     <div className='col-12'>
     <Input type="Password" name="cpassword" placeholder="Confirm password" changeHandler={FromInputCheck} lable="Confirm Password"/>
     </div>
     </div>
     <div>
     <Button type="button" className="btn-outline-primary me-3 " lable="Submit" clickHandler={SubmitData}/>
     <Button type="reset" className="btn-outline-danger me-3 " lable="Reset" clickHandler={SubmitData}/>
     </div>
    </form>
    </div>
  )
}
