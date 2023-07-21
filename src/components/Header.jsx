import { NavLink } from "react-router-dom"
import './Components.css'
export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid px-1 px-md-5">
    <NavLink className="navbar-brand text-uppercase fw-bolder" to="/">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto text-uppercase align-items-start align-items-xl-center">
        <li className="nav-item">
          <NavLink className="nav-link px-4" aria-current="page" to="/" end>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link px-4" to="products">Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link px-4" to="newupdates"><span className="text-danger fw-bold">( New )</span> Updates</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link px-4" to="contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link px-4" to="account"><i className="bi bi-person-circle fs-4"></i></NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
