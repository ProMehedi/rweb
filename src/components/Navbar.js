import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaReact } from 'react-icons/fa';
import '../assets/css/Navbar.css'
import Button from './Button';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMoblileMenu = () => setClick(false);

  const showBtn = () => window.innerWidth <= 960 ? setButton(false) : setButton(true);

  useEffect(() => {
    showBtn();
  }, []);

  window.addEventListener('resize', showBtn);

  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo" onClick={closeMoblileMenu}>
            <FaReact className="navbar-icon" />
            R.WEB
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes className="NavbarItems fa-times" /> : <FaBars className="fa-bars" />}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item"><Link className="nav-links" to="/" onClick={closeMoblileMenu}>Home</Link></li>
            <li className="nav-item"><Link className="nav-links" to="/services" onClick={closeMoblileMenu}>Services</Link></li>
            <li className="nav-item"><Link className="nav-links" to="/products" onClick={closeMoblileMenu}>Products</Link></li>
            <li className="nav-btn">
              {button ? (
                <Link className="btn-link" to="/sign-up">
                  <Button btnStyle="btn--outline">SIGN UP</Button>
                </Link>
              ): (
                <Link className="btn-link" to="/sign-up" onClick={closeMoblileMenu}>
                  <Button btnStyle="btn--outline" btnSize="btn--mobile">SIGN UP</Button>
                </Link>
              )}              
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
