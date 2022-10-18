import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './../../style/style.scss';
import './Header.scss';

const Header = ({ loggedUser,onLogout, toggleLoginModal, toggleRegistrationModal}) => {
  console.log("user: " +loggedUser.display);
  return (
    <header>
      <div className="container">
        <div className="header">
            <div className="social-network">
                  <i className="icon facebook"></i>
                  <i className="icon instagram"></i>
                  <i className="icon twitter"></i>
                  <i className="icon youtube"></i>
                  <i className="icon kids"></i>
            </div>
            <div className="logo">
              <NavLink to="/"  className="logo__link"/>
            </div>
            <div className="header__item">
                <div className="search">
                  <input className="search__input" placeholder="Search Star Wars"/>
                  <i className="icon search"></i>
                </div>

                <div className="my-account">
                  {loggedUser.login ? (
                     <div className='my-account__wrap'>
                     <div className='my-account__user'>
                       <span className='my-account__user-logo'></span>
                       <span className='my-account__user-name'>{loggedUser.display}</span>
                     </div>
                     <button className='my-account__btn' onClick={onLogout}>Logout</button>
                     </div>
                  ): (
                    <div className='my-account__wrap'>
                    <button className="my-account__btn" onClick={toggleLoginModal}>LOG IN</button>
                    <button className="my-account__btn" onClick={toggleRegistrationModal}>SIGN IN</button>
                  </div>
                  )}
                </div>
            </div>
        </div>
      </div>
    </header>
  )
};

export default Header;