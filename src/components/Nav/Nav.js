import './Nav.scss';

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">Home</li>
        <li className="nav__item">Starships</li>
        <li className="nav__item">Actors</li>
      </ul>
    </nav>
  )
};

export default Nav;