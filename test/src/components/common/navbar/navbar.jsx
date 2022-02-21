import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css'

function Navbar () {

  return (
    <section className="navbar">
      <Link to="/" className="navbar-item">Home</Link>
      <Link to="/Services" className="navbar-item">Servies</Link>
      <Link to="/About" className="navbar-item">About</Link>
      <Link to="/Team" className="navbar-item">Team</Link>
      <Link to="/Contact" className="navbar-item">Contact</Link>
      <Link to="/Logout" className="navbar-item">Logout</Link>
  </section>
  )

}

export default Navbar;