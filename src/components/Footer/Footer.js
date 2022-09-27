import './../../style/style.scss';
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <h4 className="footer__title">Follow Star Wors</h4>
        <div className="social-network">
          <i className="icon facebook"></i>
          <i className="icon instagram"></i>
          <i className="icon twitter"></i>
          <i className="icon youtube"></i>
          <i className="icon kids"></i>
        </div>
        <p className="footer__rights">TM & Lucasfilm Ltd. All Rights Reserved</p>
        <ul className="legal">
          <li className="legal__item">Terms of Use</li>
          <li className="legal__item">Additional Content Information</li>
          <li className="legal__item">Privacy Policy</li>
          <li className="legal__item">Children's Online Privacy Policy</li>
          <li className="legal__item">Your California Privacy Rights</li>
          <li className="legal__item">Star Wars at shopDisney</li>
          <li className="legal__item">Star Wars Helpsdesk</li>
          <li className="legal__item">Interest-Based Adds</li>
          <li className="legal__item">Do Not Sell My Personal Information</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;