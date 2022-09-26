import './Nav.scss';
import { NavLink } from "react-router-dom";

const Nav = () => {

  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink to="/home" >Home</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/starships">Starships</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/actors">Actors</NavLink>
        </li>
      </ul>
    </nav>
  )
};

export default Nav;