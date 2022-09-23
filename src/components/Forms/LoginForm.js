import './../../style/style.scss';
import './Forms.scss';

const LoginForm = () => {
  return (
    <form className="form">
      <div className="form__logo"></div>
      <h3 className="form__title">SIGN IN</h3>
      <input className="form__input" placeholder="Username or Email Address"/>
      <input type="password" className="form__input" placeholder="Password"/>
      <button className="form__submit">Sign in</button>
      <div className="form__help">
        <a href="!#" className="form__help-link">Need help signing in?</a>
      </div>
      <button className="form__redirect">Create an Account</button>
    </form>
  )
};

export default LoginForm;