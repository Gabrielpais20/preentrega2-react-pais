import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';


function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Brand</Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/category/category1">Category 1</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/category2">Category 2</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/category3">Category 3</Link>
          </li>
          <li className="nav-item">
            <CartWidget />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;