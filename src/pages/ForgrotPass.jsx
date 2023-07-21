import React from 'react'
import { Input,Button } from '../components'
export default function ForgrotPass() {
    const FromInputCheck=(e)=>{
        console.log(e.target.value)
      }
      const SubmitData=(e)=>{
      console.log(e)
      }
      return (
        <div>
        <h1 className='fs-1 fw-bold text-uppercase mb-5 text-center'>Forgot Password</h1>
        <form className='w-100'>
         <div className='row'>
         <div className='col-12'>
         <Input type="email" name="email" placeholder="email" changeHandler={FromInputCheck} lable="Email"/>
         </div>
         <div className='col-12'>
         <Input type="text" name="dob" placeholder="Date Of Birth" changeHandler={FromInputCheck} lable="Date Of Birth"/>
         </div>
         </div>
         <div>
         <Button type="button" className="btn-outline-primary me-3" lable="Submit" clickHandler={SubmitData}/>
         <Button type="reset" className="btn-outline-danger me-3" lable="Reset" clickHandler={SubmitData}/>
         </div>
        </form>
        </div>
      )
}
