import { MODALS } from "../../constants";
import LoginModal from "./LoginModal";
import RegistrationModal from "./RegistrationModal";
import useLocalstorage from './../../utils/useLocalstorage';

const Modals = ({activeModal, closeModal, onRegistrationComplete, onLogin, logoutHandler}) => {

  const [loggedUser, setLoggedUser] = useLocalstorage('login',{ diplay: "", login: false });


  const Modal = () => {
    switch (activeModal) {
      case MODALS.LOGIN_MODAL:
        return <LoginModal onCloseModal={closeModal}  onUserLogin={onLogin}/>
      case MODALS.REGISTRATION_MODAL:
        return <RegistrationModal onCloseModal={closeModal} onRegistrationComplete={onRegistrationComplete}/>
    }
  }

  return (
    <div className="modals">
      {Modal()}
    </div>
  )
};

export default Modals;