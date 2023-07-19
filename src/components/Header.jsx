import { NavLink } from "react-router-dom"
export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid px-5">
    <NavLink className="navbar-brand text-uppercase fw-bolder" to="/">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto text-uppercase align-items-center">
        <li className="nav-item">
          <NavLink className="nav-link px-4 active" aria-current="page" to="/">Home</NavLink>
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
          <NavLink className="nav-link px-4" to="Login"><i className="bi bi-person-circle fs-4"></i></NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
