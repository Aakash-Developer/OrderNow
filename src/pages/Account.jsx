import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Account() {
  return (
    <div className='account-action d-flex gap-5'>
    <NavLink className="btn btn-primary w-100" to="login" role="button">Login</NavLink>
    <NavLink className="btn btn-primary w-100" to="register" role="button">Register</NavLink>
    </div>
  )
}
