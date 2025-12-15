import React, { useEffect, useRef } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search_icon.svg';
import bell_icon from '../../assets/bell_icon.svg';
import profile_img from '../../assets/profile_img.png';
import caret_icon from '../../assets/caret_icon.svg';
import { logout } from '../../firebaseActions';

const Navbar = () => {
  const navRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add('nav-dark');
      } else {
        navRef.current.classList.remove('nav-dark');
      }
    });
  }, []);

  // Scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({  behavior: 'smooth',
        block: 'center',});
    }
  };

  return (
    <div ref={navRef} className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="" onClick={() => scrollToSection('home-section')}/>
        <ul>
          <li onClick={() => scrollToSection('home-section')}>Home</li>
          <li onClick={() => scrollToSection('tv-shows')}> Popular on Netflix</li>
          <li onClick={() => scrollToSection('blockbuster-section')}>Movies</li>
          <li onClick={() => scrollToSection('netflix-originals-section')}>Only on Netflix</li>
          <li onClick={() => scrollToSection('upcoming-section')}>Upcoming</li>
          <li onClick={() => scrollToSection('top-picks-section')}>Top Picks</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="" className='icons' />
        <p>Children</p>
        <img src={bell_icon} alt="" className='icons' />
        <div className="navbar-profile">
          <img src={profile_img} alt="" className='profile' />
          <img src={caret_icon} alt="" />
          <div className="dropdown">
            <p onClick={() => { logout() }}>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
