import React from 'react';
import './navbar.css';

const Navbar = ({brand}) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
        <div className="container">
            <a href="/" className="navbar-brand text-uppercase">{brand}</a>
        </div>
    </nav>
  )
}

export default Navbar