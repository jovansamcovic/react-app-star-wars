import { useState } from 'react';
import './../../style/style.scss';
import './Modal.scss';
import Input from '../Input/Input';

const RegistrationModal = ({ onCloseModal, onSubmitRegistrationForm }) => {

  const [showPassword, setShowPassword] = useState(false);


  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    displayname: "",
    password: "",
    confirmpassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "firstname",
      type: "text",
      placeholder: "First Name",
      errorMessage: "Username should be 3-16 characters and shouldn't include any special character!",
      required: true
    },
    {
      id: 2,
      name: "lastname",
      type: "text",
      placeholder: "Last Name",
      errorMessage: "Username should be 3-16 characters and shouldn't include any special character!",
      required: true
    },
    {
      id: 3,
      name: "email",
      type: "text",
      placeholder: "Email",
      errorMessage: "Username should be 3-16 characters and shouldn't include any special character!",
      required: true
    },
    {
      id: 4,
      name: "displayname",
      type: "text",
      placeholder: "Display Name",
      errorMessage: "Display should be 3-16 characters and shouldn't include any special character!",
      required: true
    },
    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Username should be 3-16 characters and shouldn't include any special character!",
      required: true
    },
    {
      id: 6,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm  Password",
      errorMessage: "Passwords don't match!",
      required: true
    },
  ];



  const submitFormHandler = (e) => {

    e.preventDefault();

    const newUser = {
      firstname: values.firstname,
      lastname: values.lastname,
      email: values.email,
      displayname: values.displayname,
      password: values.password,
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
  }

  const checkboxHandler = () => {
    setShowPassword(!showPassword);
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };


  const validatePassword = (password) => {
    return String(password)
      .toLowerCase()
      .match(
        /^[a-zA-Z0-9!@#$%^&*]{6,16}$/
      );
  }


  const validateInput = (e) => {

    let element = e.target;

    if (element.name === "password" || element.name === "email") {
      console.log("if");
      if (element.name === "password") {
        let isPasswordOK = validatePassword(element.value);
        if (isPasswordOK) {
          element.parentElement.classList.remove("error");
        } else {
          element.parentElement.classList.add("error");
        }
      }

      if (element.name === "email") {
        let isEmailOk = validateEmail(element.value);

        if (isEmailOk) {
          element.parentElement.classList.remove("error");
        } else {
          element.parentElement.classList.add("error");
        }
      }
    } else {
      let value = element.value;
      if(value.length > 3)
      {
        element.parentElement.classList.remove("error");
      }
       else {
        element.parentElement.classList.add("error");
       }
    }
  };

  return (
    <div className="modal">
      <div className="modal-mask" onClick={onCloseModal}></div>
      <div className="modal-content">
        <button className="modal-close" onClick={onCloseModal}></button>
        <form className="form" onSubmit={submitFormHandler}>
          <div className="form__logo"></div>
          <h3 className="form__title">Create your account</h3>
          {
            inputs.map((input) => {

              if (showPassword) {
                if (input.type === "password") {
                  input.type = "text";
                }
              }

              return (
                <Input
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
                onBlur={validateInput}
                />
              )
            })
          }
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