import React from 'react';
import { Navbar } from '../../common' ;

import './Header.css';

function Header () {

  return (
    <section className="header">
      <section className="header-top">
        <section className="header-top__logo">
          <a href="/" className="header-logo">Constancy</a>
        </section>
        <section className="header-top__navbar">
          <section className="header-top__navigation">
            <Navbar />
          </section>
          </section>
      </section>
      <section className="header-bottom">
             </section>
    </section>
  )
}

export default Header;