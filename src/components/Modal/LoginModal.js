import { useState } from 'react';
import './../../style/style.scss';
import './Modal.scss';

const LoginModal = ({onCloseModal, onUserLogin}) => {

  const [usersData, setUsersData] = useState([])
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const formHandler = (event) => {

    event.preventDefault()

    const users = JSON.parse(localStorage.getItem('users'));
    if(users) {
      setUsersData(users);
    }

    usersData.forEach(user => {
        if(user.email === email && user.password === password) {
          onUserLogin({display: user.displayname, login: true});
          localStorage.setItem('login', JSON.stringify({display: user.displayname, login: true}));
        }
    });
  };


  return (
    <div className="modal">
    <div className="modal-mask" onClick={onCloseModal}></div>
    <div className="modal-content">
       <button className="modal-close" onClick={onCloseModal}></button>
       <form className="form" onSubmit={formHandler} >

        <div className="form__logo"></div>
        <h3 className="form__title">SIGN IN</h3>

        <input className="form__input" placeholder="Username or Email Address" onChange={(e) => setEmail(e.target.value)}/>

        <input type="password" className="form__input" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>

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