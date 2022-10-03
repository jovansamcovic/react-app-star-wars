import { useEffect, useRef, useState } from 'react';
import './../../style/style.scss';
import './Modal.scss';
import Input from '../Input/Input';
import registrationValidation from '../../utils/registrationValidation';

const RegistrationModal = ({ onCloseModal, onSubmitRegistrationForm }) => {

  const [showPassword, setShowPassword] = useState(false);
  const [isFormValid, setIsFormValid] = useState(true);


  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [displayname, setDisplayname] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();


  const [firstnameError, setFirstnameError] = useState(false);
  const [lastnameError, setLastnameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [displaynameError, setDisplaynameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const emailRef = useRef();
  const displaynameRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();


// first name
  const firstnameChangeHandler = () => {
    const {name, value}  = firstnameRef.current;
    setFirstname(firstnameRef.current.value);

    const error = registrationValidation(name, value);
    setFirstnameError(error);
    console.log(firstnameError);
    if (error) {
      firstnameRef.current.parentElement.classList.add("error");
    } else {
      firstnameRef.current.parentElement.classList.remove("error");
    }
  };


  // last name
  const lastnameChangeHandler = () => {
    const {name, value}  = lastnameRef.current;
    setLastname(lastnameRef.current.value);

    const error = registrationValidation(name, value);
    setLastnameError(error);

    if (error) {
      lastnameRef.current.parentElement.classList.add("error");
    } else {
      lastnameRef.current.parentElement.classList.remove("error");
    }
  };


  // email
  const emailChangeHandler = () => {
    const {name, value}  = emailRef.current;
    setEmail(emailRef.current.value);

    const error = registrationValidation(name, value);
    setEmailError(error);

    if (error) {
      emailRef.current.parentElement.classList.add("error");
    } else {
      emailRef.current.parentElement.classList.remove("error");
    }
  };


  // displayname
  const displaynameChangeHandler = () => {
    const {name, value}  = displaynameRef.current;
    setDisplayname(displaynameRef.current.value);

    const error = registrationValidation(name, value);
    setDisplaynameError(error);

    if (error) {
      displaynameRef.current.parentElement.classList.add("error");
    } else {
      displaynameRef.current.parentElement.classList.remove("error");
    }
  };


  const passwordChangeHandler = () => {
    const {name, value}  = passwordRef.current;
    setPassword(passwordRef.current.value);

    const error = registrationValidation(name, value);
    setPasswordError(error);

    if (error) {
      passwordRef.current.parentElement.classList.add("error");
    } else {
      passwordRef.current.parentElement.classList.remove("error");
    }
  };


  // confirm password
  const confirmPasswordChangeHandler = () => {
    const {name, value}  = confirmPasswordRef.current;
    setConfirmPassword(confirmPasswordRef.current.value);

    const error = registrationValidation(name, value, password);
    setConfirmPasswordError(error);

    if (error) {
      confirmPasswordRef.current.parentElement.classList.add("error");
    } else {
      confirmPasswordRef.current.parentElement.classList.remove("error");
    }
  };


  const submitFormHandler = (e) => {

    e.preventDefault();

    if ((firstname !== "" && lastname !== "" && email !== "" && displayname !== "" && password !== "" && confirmPassword !== "") &&
    (firstnameError === "" && lastnameError === "" && emailError === "" && displaynameError === "" && passwordError === "" && confirmPasswordError === "")) {
      setIsFormValid(true)

      const newUser = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        displayname: displayname,
        password: password,
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

    } else {
      setIsFormValid(false);

      if (!firstname) {
        firstnameChangeHandler();
      }

      if (!lastname) {
        lastnameChangeHandler();
      }

      if (!displayname) {
        displaynameChangeHandler()
      }

      if (!email) {
        emailChangeHandler()
      }

      if (!password) {
        passwordChangeHandler()
      }

      if (!confirmPassword) {
        confirmPasswordChangeHandler();
      }
    }
  }



  const checkboxHandler = () => {
    setShowPassword(true);
  }


  return (
    <div className="modal">
      <div className="modal-mask" onClick={onCloseModal}></div>
      <div className="modal-content">
        <button className="modal-close" onClick={onCloseModal}></button>
        <form className="form" onSubmit={submitFormHandler}>
          <div className="form__logo"></div>
          <h3 className="form__title">Create your account</h3>

            <Input
              placeholder={'First Name'}
              type={'text'}
              name={'firstname'}
              value={firstname}
              onChange = {firstnameChangeHandler}
              errorMessage={firstnameError}
              inputRef = {firstnameRef}
            />

            <Input
              placeholder={'Last Name'}
              type={'text'}
              name={'lastname'}
              value={lastname}
              onChange = {lastnameChangeHandler}
              errorMessage={lastnameError}
              inputRef={lastnameRef}
            />

          <Input
              placeholder={'Email'}
              type={'text'}
              name={'email'}
              value={email}
              onChange = {emailChangeHandler}
              errorMessage={emailError}
              inputRef={emailRef}
            />


          <Input
              placeholder={'Display Name'}
              type={'text'}
              name={'displayname'}
              value={displayname}
              onChange = {displaynameChangeHandler}
              errorMessage={displaynameError}
              inputRef={displaynameRef}
            />

            <Input
              placeholder={'Password'}
              type={showPassword ? 'text' : "password"}
              name={'password'}
              value={password}
              onChange = {passwordChangeHandler}
              errorMessage={passwordError}
              inputRef={passwordRef}
            />

          <Input
              placeholder={'Confirm Password'}
              type={showPassword ? 'text' : "password"}
              name={'confirmPassword'}
              value={confirmPassword}
              onChange={confirmPasswordChangeHandler}
              errorMessage={confirmPasswordError}
              inputRef={confirmPasswordRef}
            />



          <div className="checkbox">
            <div className="checkbox__wrap">
              <input className="checkbox__input" id="checkbox" type="checkbox" onChange={checkboxHandler} />
              <label className="checkbox__label" htmlFor="checkbox" />
            </div>
            <span className="checkbox__title">Show Password</span>
          </div>

          <button className="form__submit">Create Account</button>
          <div className='form__info'>Already have an account <button className='form__rederect'>Sign In</button></div>

           {!isFormValid &&  <div className='form__msg'>Validation errors occurred. Please confirm the fields and submit again.</div>}

        </form>
      </div>
    </div>
  )
};

export default RegistrationModal;