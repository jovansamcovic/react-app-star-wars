import './Input.scss';
import './../../style/style.scss';

const Input = (props) => {



  return (
    <div className={props.errorMessage ? 'form__box error': 'form__box'}>
      <input className='form__input'
        placeholder= {props.placeholder}
        name = {props.name}
        value = {props.value}
        onChange = {props.onChange}
        onBlur={props.onBlur}
        ref={props.inputRef}
        type={props.type}
      />
      {props.errorMessage && <span className='form__error'>{props.errorMessage}</span>}
    </div>
  )
};

export default Input;