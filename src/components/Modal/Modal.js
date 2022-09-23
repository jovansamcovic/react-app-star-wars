import './../../style/style.scss';
import './Modal.scss';

import LoginForm from '../Forms/LoginForm';

const Modal = ({onCloseModal}) => {
  return (
    <div className="modal">
        <div className="modal-mask" onClick={onCloseModal}></div>
        <div className="modal-content">
           <button className="modal-close" onClick={onCloseModal}></button>
            <LoginForm />
        </div>
    </div>
  )
};

export default Modal;