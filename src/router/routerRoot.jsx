import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";

import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import {Product,LoadProducts} from "../pages/Product";
import NewUpdates from "../pages/NewUpdates";
import Contact from "../pages/Contact";
import ErorrPage from "../pages/Erorr_404";
import Layout from "../Layouts/Layout";
import AccountLayout from "../Layouts/AccountLayout";
import ForgrotPass from "../pages/ForgrotPass";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="products" element={<Product/> } loader={LoadProducts} />
      <Route path="newupdates" element={<NewUpdates />} />
      <Route path="contact" element={<Contact />} />

      <Route path="account" element={<AccountLayout />}>
        <Route index element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="login/forgrotpassword" element={<ForgrotPass />} />
      </Route>
    </Route>
    <Route path="*" element={<ErorrPage />} />
    </>
  )
);

export default function Routeroot() {
  return (
    <RouterProvider router={Router} />
  );
}
