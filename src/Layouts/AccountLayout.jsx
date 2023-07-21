import React from 'react'
import Account from '../pages/Account'
import { Outlet } from 'react-router-dom'

export default function AccountLayout() {
  return (
    <div className='container-md mt-5 d-flex justify-content-center'>
    <div className='card border-0 shadow' style={{maxWidth:"600px"}}>
    <div className='card-header'>
    <Account/>
    </div>
    <div className='card-body'>
    <Outlet/>
    </div>
    </div>
    </div>
  )
}
