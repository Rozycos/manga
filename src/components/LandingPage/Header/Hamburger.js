import React, { useState, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
//import { AppContext } from '../context/UserProvider';

function Hamburger() {
  //const{currentUser} = useContext(AppContext)
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="hamburger__menu" onClick={toggleMenu}>
      <div className="hamburger__icon">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      {isOpen && (
        <>
          <ul className="hamburger__nav">
            {/* <li className="hamburger__nav--element hide">{"User: " + currentUser.email}</li> */}
            <li className="hamburger__nav--element hide"><NavLink className="hamburger__nav--link" to="/">Home</NavLink></li>
            {/* <li className="hamburger__nav--element"><Link className="hamburger__nav--link" to="/action">Action</Link></li>
            <li className="hamburger__nav--element"><Link className="hamburger__nav--link" to="/comedy">Comedy</Link></li>
            <li className="hamburger__nav--element"><Link className="hamburger__nav--link" to="/drama">Drama</Link></li> */}
            <li className="hamburger__nav--element"><NavLink className="hamburger__nav--link" to="/page/AagY0uFBNFdwBrH8mp3S/welcome-to-mangagate">About us</NavLink></li>
            {/* <li className="hamburger__nav--element"><NavLink className="hamburger__nav--link" to="/page/ZFwVzxkEWslp8JHESEya/rules">Site rules</NavLink></li> */}
            <li className="hamburger__nav--element"><NavLink className="hamburger__nav--link" to="/admin">Admin</NavLink></li>
          </ul>
        </>
      )}
    </div>
  );
}

export default Hamburger;