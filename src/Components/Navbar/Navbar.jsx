import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import Logo from '../../assets/logo/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  // Mobile Menu State 1
  const [sidenav, setSideNav] = useState(false);

  // Desktop Fixed Menu 5
  const [sticky, setSticky] = useState(false);

  // Mobile Icon
  const menuIcon = <FontAwesomeIcon icon={faBars} />

  // SideNav 2
  const sidenavShow = () => {
    setSideNav(!sidenav);
  }

  // Scroll Fixed Navbar 7
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 20);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  })

  return (
    // 6
    <header id="site_header" className={`${sticky ? "sticky" : ''}`}>
      <div className="container">
        <nav className="navbar" id="Navbar">
          <div className="navbar_brand">
            <a href="/">
              <img src={Logo} alt="Logo" />
            </a>
          </div>
          {/* 3 */}
          <div className="navbar_toggler" onClick={sidenavShow}>
            {menuIcon}
          </div>
          {/* 4 */}
          <div className={`menu_items ${sidenav === true ? 'active' : ''}`}>
            <ul>
              <li>
                <Link activeClass="active" to="home" spy={true} smooth={true}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" spy={true} smooth={true}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="services" spy={true} smooth={true}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="blog" spy={true} smooth={true}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="contact" spy={true} smooth={true}>
                  Contact US
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

