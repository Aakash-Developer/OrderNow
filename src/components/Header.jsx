import { NavLink } from "react-router-dom"
export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid px-5">
    <NavLink class="navbar-brand text-uppercase fw-bolder" to="#">Navbar</NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto text-uppercase">
        <li class="nav-item">
          <NavLink class="nav-link active" aria-current="page" to="#">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="#">Menu</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="#">Gallery</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="#">Reservation</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="#">Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
