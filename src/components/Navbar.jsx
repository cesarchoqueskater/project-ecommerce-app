import * as React from 'react';
import { Link, NavLink } from 'react-router';
import CartWidget from './CartWidget'

const pages = [{ id: "mochica", name: "Mochica", endpoint: "/culture/moche" }, { id: "paracas", name: "Paracas", endpoint: "/culture/paracas" }, { id: "wiru", name: "Wiru", endpoint: "/culture/wiru"}];

function Navbar() {

  return (
    <nav className="navbar bg-primary navbar-expand-lg" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Maytu</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {
              pages.map((page) => (
                <li key={page.id} className="nav-item">
                  <Link className="nav-link" to={page.endpoint}>{page.name}</Link>
                </li>
              ))}
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>

  );
}
export default Navbar;
