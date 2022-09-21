import './NavBar.css';

export default function NavBar() {
  return (
    <div className="navbar sticky-top navbar-expand-md navbar-dark principal-color">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-label="menu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="index.html">
          <span className="fw-bolder fs-2 m-3">Mooki Vegan</span>
        </a>
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav d-flex">
            <li className="nav-item m-1">
              <a className="nav-link fw-bold text-white fs-5" href="www.google.com">Productos</a>
            </li>
            <li className="nav-item m-1">
            <a className="nav-link fw-bold text-white fs-5" href="www.google.com">Nosotros</a>
            </li>
          </ul>
        </div>
      </div>
  )
}