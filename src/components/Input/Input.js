import './Input.scss';
import './../../style/style.scss';

const Input = (props) => {
  return (
    <div className='form__box'>
      <input className='form__input'
        placeholder= {props.placeholder}
        type={props.type}
        name = {props.name}
        value = {props.value}
        onChange = {props.onChange}
        onBlur={props.onBlur}
      />
      <span className='form__error'>{props.errorMessage}</span>
    </div>
  )
};

export default Input;