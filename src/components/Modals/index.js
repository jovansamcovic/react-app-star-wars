import { MODALS } from "../../constants";
import LoginModal from "./LoginModal";
import RegistrationModal from "./RegistrationModal";
import InfoModal from './InfoModal';
import './../../style/style.scss';

const Modals = ({activeModal, closeModal, onRegistrationComplete, onLogin, message}) => {

  const Modal = () => {
    switch (activeModal) {
      case MODALS.LOGIN_MODAL:
        return <LoginModal onCloseModal={closeModal}  onUserLogin={onLogin}/>
      case MODALS.REGISTRATION_MODAL:
        return <RegistrationModal onCloseModal={closeModal} onRegistrationComplete={onRegistrationComplete}/>
      case MODALS.ERROR:
      return <InfoModal message={message} onCloseModal={closeModal}/>
      default:
        return;
    }
  }

  return (
    <div className="modals">
      {Modal()}
    </div>
  )
};

export default Modals;