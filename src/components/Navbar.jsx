import * as React from 'react';
import CartWidget from './CartWidget'

const pages = [{ id: "mochica", name: "Mochica" }, { id: "nazca", name: "Nazca" }, { id: "wiru", name: "Wiru" }];

function Navbar(a) {

  return (
    <nav className="navbar bg-primary navbar-expand-lg" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Maytu</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {
              pages.map((page) => (
                <li key={page.id} className="nav-item">
                  <a className="nav-link" href="#">{page.name}</a>
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
