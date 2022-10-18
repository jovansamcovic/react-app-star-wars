import './style/style.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Starships from './pages/Starships';
import Nav from './components/Nav/Nav';
import Actors from './pages/Actors';
import StarshipDetails from './pages/StarshipDetails';
import ActorDetails from './pages/ActorDetails';
import useLocalstorage from './utils/useLocalstorage';
import Modals from './components/Modals';
import { getActiveModal } from './selectors';
import { setActiveModal } from './actions';
import { MODALS } from './constants';
import { useState } from 'react';

const App = () => {

  const dispatch = useDispatch();
  const [loggedUser, setLoggedUser] = useLocalstorage('login',{ diplay: "", login: false });

  const Actions = {
    setActiveModal: (payload) => dispatch(setActiveModal(payload)),
  };

  const Selectors = {
    activeModal: useSelector((state) => getActiveModal(state))
  }


  const logoutHandler = () => {
    localStorage.setItem('login', JSON.stringify({ display: "", login: false }));
    setLoggedUser({ display: "", login: false });
  }


  const toggleLoginModal = () => {
    if (Selectors.activeModal !== MODALS.LOGIN_MODAL) {
      Actions.setActiveModal({ activeModal: MODALS.LOGIN_MODAL });
    } else {
      Actions.setActiveModal({ activeModal: '' });
    }
  };

  const toggleRegistrationModal = () => {
    if (Selectors.activeModal !== MODALS.REGISTRATION_MODAL) {
      Actions.setActiveModal({activeModal: MODALS.REGISTRATION_MODAL});
    } else {
      Actions.setActiveModal({activeModal: ""})
    }
  }


  const closeModal = () => {
    Actions.setActiveModal({ activeModal: '' });
  }

  const registrationCompleteHandler = (payload) => {
    localStorage.setItem('login', JSON.stringify({ display: payload.diplay, login: true }));
    setLoggedUser({ display: payload.diplay, login: true });
    closeModal();
  }

  const userLoginHandler = (user) => {
    setLoggedUser(user);
    localStorage.setItem('login', JSON.stringify({ display: user.display, login: true }));
    closeModal();
  }



  return (
    <div className="app">
      <Router>
      <Header
        loggedUser={loggedUser}
        onLogout={logoutHandler}
        toggleLoginModal={toggleLoginModal}
        toggleRegistrationModal={toggleRegistrationModal}
      />

      <main className="main">

          <Nav />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/starships" element={<Starships />} />
            <Route path="/starships/:id" element={<StarshipDetails />} />
            <Route exact path='/actors' element={<Actors />} />
            <Route  path='/actors/:id' element={<ActorDetails />} />
          </Routes>

      <Modals activeModal={Selectors.activeModal} closeModal={closeModal} onLogin={userLoginHandler} onRegistrationComplete={registrationCompleteHandler}/>
      </main>
      </Router>
      <Footer />

    </div>
  );
}

export default App;
