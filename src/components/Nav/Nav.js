import './Nav.scss';
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink>Home</NavLink>
        </li>
        <li className="nav__item">
          <NavLink >Starships</NavLink>
        </li>
        <li className="nav__item">
          <NavLink>Actors</NavLink>
        </li>
      </ul>
    </nav>
  )
};

export default Nav;