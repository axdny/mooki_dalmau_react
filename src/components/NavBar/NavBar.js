import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar sticky-top navbar-expand-md navbar-dark principal-color">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-label="menu">
        <span className="navbar-toggler-icon"></span>
      </button>
      <NavLink to='/' className="navbar-brand" href="index.html">
        <span className="fw-bolder fs-2 m-3">Mooki Vegan</span>
      </NavLink>
      <div className="collapse navbar-collapse" id="menu">
        <ul className="navbar-nav d-flex">
          <li className="nav-item m-1">
            <NavLink to={'/category/tortas'} className="nav-link fw-bold text-white fs-5">Tortas</NavLink>
          </li>
          <li className="nav-item m-1">
            <NavLink to={'/category/otras'} className="nav-link fw-bold text-white fs-5">Otras Delicias</NavLink>
          </li>
        </ul>
      </div>
      <CartWidget />
    </div>
  );
};

export default NavBar;