import { useRef, useState } from 'react';
import './../../style/style.scss';
import './Modal.scss';
import Input from '../Input/Input';

const LoginModal = ({ onCloseModal, onUserLogin }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");


  const emailRef = useRef();
  const passwordRef = useRef();


  const [loginCorrect, setLoginCorrect] = useState(true);


  const emailChangeHandler = () => {
    setEmail(emailRef.current.value);
    emailRef.current.parentElement.classList.remove("error");
    setEmailError("");
  }

  const passwordChangeHandler = () => {
    setPassword(passwordRef.current.value);
    passwordRef.current.parentElement.classList.remove("error");
    setPasswordError("");
  }

  const formHandler = (event) => {
    event.preventDefault()
    let users = [];
    let existUser = false;
    users = JSON.parse(localStorage.getItem('users'));

    if (users) {
      users.forEach(user => {
        if (user.email === email) {
          existUser = true;

          if (user.password === password) {
            onUserLogin({ display: user.displayname, login: true });
            setLoginCorrect(true);
          } else {
            setPasswordError("Wrong password!");
            passwordRef.current.parentElement.classList.add("error");
            setLoginCorrect(false);
            setPassword("");
          }
        }
      });
    }

    if(!existUser) {
      setLoginCorrect(false);
      setEmailError("This email doesn't exist!");
      setPassword("");
      setEmail("");
      emailRef.current.parentElement.classList.add("error");
      passwordRef.current.parentElement.classList.add("error");
    }
  };



  return (
    <div className="modal">
      <div className="modal-mask" onClick={onCloseModal}></div>
      <div className="modal-content">
        <button className="modal-close" onClick={onCloseModal}></button>
        <form className="form" onSubmit={formHandler} >

          <div className="form__logo"></div>
          <h3 className="form__title">SIGN IN</h3>

          <Input
             type="text"
             placeholder="Email"
             value={email}
             onChange={emailChangeHandler}
             name="email"
             inputRef={emailRef}
             errorMessage={emailError}
          />

          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={passwordChangeHandler}
            name="password"
            inputRef={passwordRef}
            errorMessage={passwordError}
          />


          <button className="form__submit" type='submit'>Sign in</button>

          <div className="form__help">
            <a href="!#" className="form__help-link">Need help signing in?</a>
          </div>

          <button className="form__redirect">Create an Account</button>
        </form>
      </div>
    </div>
  )
};

export default LoginModal;