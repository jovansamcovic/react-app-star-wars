import { useState } from 'react';
import './../../style/style.scss';
import './Modal.scss';

const RegistrationModal = ({onCloseModal}) => {

  const [showPassword, setShowPassword] = useState(false);

  const checkboxHandler = () => {
    setShowPassword(!showPassword);
  }

  return (
    <div className="modal">
        <div className="modal-mask" onClick={onCloseModal}></div>
        <div className="modal-content">
           <button className="modal-close" onClick={onCloseModal}></button>
           <form className="form">
              <div className="form__logo"></div>
              <h3 className="form__title">Create your account</h3>
              <input className="form__input" placeholder="First Name"/>
              <input className="form__input" placeholder="Last Name"/>
              <input className="form__input" placeholder="Email Name"/>
              <input className="form__input" placeholder="Display Name"/>
              {!showPassword ? (<input className="form__input" placeholder="Password Name" type="password"/>) : (<input className="form__input" placeholder="Password Name" type="text"/>)  }

              <div className="checkbox">
              <div className="checkbox__wrap">
                  <input  className="checkbox__input" id="checkbox"  type="checkbox" onChange={checkboxHandler}/>
                  <label className="checkbox__label" htmlFor="checkbox"/>
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