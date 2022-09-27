import { useState } from 'react';
import './../../style/style.scss';
import './Modal.scss';

const RegistrationModal = ({ onCloseModal, onSubmitRegistrationForm }) => {

  const [showPassword, setShowPassword] = useState(false);

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [displayname, setDisplayName] = useState();
  const [password, setPassword] = useState();


  const submitFormHandler = (e) => {

    e.preventDefault();

    const newUser = {
      firstname: firstName,
      lastname: lastName,
      email: email,
      displayname: displayname,
      password: password
    }

    let users = [];
    users = JSON.parse(localStorage.getItem('users'));
    if (users) {
      users = [...users, newUser]
    } else {
      users = [];
      users.push(newUser);
    }

    localStorage.setItem('users', JSON.stringify(users));

    onSubmitRegistrationForm();
    console.log("prosao");
  }

  const checkboxHandler = () => {
    setShowPassword(!showPassword);
  }

  return (
    <div className="modal">
      <div className="modal-mask" onClick={onCloseModal}></div>
      <div className="modal-content">
        <button className="modal-close" onClick={onCloseModal}></button>
        <form className="form" onSubmit={submitFormHandler}>
          <div className="form__logo"></div>
          <h3 className="form__title">Create your account</h3>

          <input className="form__input" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />

          <input className="form__input" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />

          <input className="form__input" placeholder="Email Name" onChange={(e) => setEmail(e.target.value)} />

          <input className="form__input" placeholder="Display Name" onChange={(e) => setDisplayName(e.target.value)} />

          <input className="form__input" placeholder="Password Name" type={showPassword ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} />

          <div className="checkbox">
            <div className="checkbox__wrap">
              <input className="checkbox__input" id="checkbox" type="checkbox" onChange={checkboxHandler} />
              <label className="checkbox__label" htmlFor="checkbox" />
            </div>
            <span className="checkbox__title">Show Password</span>
          </div>

          <button className='form__submit'>Create Account</button>
          <div className='form__info'>Already have an account <button className='form__rederect'>Sign In</button></div>

        </form>
      </div>
    </div>
  )
};

export default RegistrationModal;