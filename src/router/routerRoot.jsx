import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from "react-router-dom"
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Product from "../pages/Product";
import NewUpdates from "../pages/NewUpdates";
import Contact from "../pages/Contact";
// import ErorrPage from "../pages/Erorr_404";
import Layout from "../Layouts/Layout";
import AccountLayout from "../Layouts/AccountLayout";
const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
    <Route index  element={<Home/>}/>
    <Route path="products"  element={<Product/>}/>
    <Route path="newupdates"  element={<NewUpdates/>}/>
    <Route path="contact"  element={<Contact/>}/>

    <Route path="account"  element={<AccountLayout/>}>
    <Route index  element={<Login/>}/>
    <Route path="login"  element={<Login/>}/>
    <Route path="register"  element={<Register/>}/>
    </Route>
    </Route>
  ))

export default function Routeroot() {
  return (
    <RouterProvider router={Router}/>
  )
}
