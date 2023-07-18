import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from "react-router-dom"
import Home from '../pages/Home'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Product from "../pages/Product"
import NewUpdates from "../pages/NewUpdates"
import Contact from "../pages/Contact"
import ErorrPage from "../pages/Erorr_404"

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/"  element={<Home/>}/>
    <Route path="/register"  element={<Register/>}/>
    <Route path="/login"  element={<Login/>}/>
    <Route path="/product"  element={<Product/>}/>
    <Route path="/newupdates"  element={<NewUpdates/>}/>
    <Route path="/contact"  element={<Contact/>}/>
    <Route path="*"  element={<ErorrPage/>}/>
    </>
  ))

export default function Routeroot() {
  return (
    <RouterProvider router={Router}/>
  )
}
