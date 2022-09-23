import './../../style/style.scss';
import './Header.scss';

const Header = () => {
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
            <div className="logo"></div>
            <div className="header__item">
                <div className="search">
                  <input className="search__input" placeholder="Search Star Wars"/>
                  <i className="icon search"></i>
                </div>

                <div className="my-account">
                    <button className="my-account__btn">LOG IN</button>
                    <button className="my-account__btn">SIGN IN</button>
                </div>
            </div>
        </div>
      </div>
    </header>
  )
};

export default Header;