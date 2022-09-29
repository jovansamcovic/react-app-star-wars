import { useEffect, useState } from 'react';
import './../../style/style.scss';
import './Modal.scss';
import Input from '../Input/Input';

const LoginModal = ({ onCloseModal, onUserLogin }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginCorrect, setLoginCorrect] = useState(true);


  const formHandler = (event) => {

    event.preventDefault()
    let users = [];
    users = JSON.parse(localStorage.getItem('users'));

    users.forEach(user => {
      if (user.email === email && user.password === password) {
        onUserLogin({ display: user.displayname, login: true });
        setLoginCorrect(true);
      } else {
        setLoginCorrect(false);
      }

      console.log("else: isCorrect: " +loginCorrect);
    });
  };


  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };



  const validateInput = (e) => {
      let isEmailOk = validateEmail(e.target.value);

      if (isEmailOk) {
        e.target.parentElement.classList.remove("error");
      } else {
        e.target.parentElement.classList.add("error");
      }
  }



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
             onChange={(e) => setEmail(e.target.value)}
             onBlur={validateInput}
             name="email"
             errorMessage="Wrong email"
          />

          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            errorMessage="Sorry, your password was incorrect."
          />


          <button className="form__submit" type='submit'>Sign in</button>

          {!loginCorrect && <div className='form__msg'>Incorrect email or password</div>}

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