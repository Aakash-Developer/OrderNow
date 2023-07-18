import React from 'react'
import {Header,Footer} from '../components';
import { Outlet } from 'react-router-dom';


export default function PageLayout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}
