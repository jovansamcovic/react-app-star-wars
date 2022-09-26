import './style/style.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Starships from './pages/Starships';
import LoginModal from './components/Modal/LoginModal';
import RegistrationModal from './components/Modal/RegistrationModal';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Actors from './pages/Actors';

function App() {

  const [showLogin, setShowLogin] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);
  const [loggedUser, setLoggedUser] = useState({ diplay: "", login: false });

  const closeModalHandler = () => {
    setShowLogin(false);
    setShowRegistration(false);
  }

  const showLoginHandler = () => {
    setShowLogin(!showLogin);
  }

  const showRegistrationHandler = () => {
    setShowRegistration(!showRegistration);
  }

  const userLoginHandler = (user) => {
    setLoggedUser(user)
    closeModalHandler();
  }

  const logoutHandler = () => {
    localStorage.setItem('login', JSON.stringify({ display: "", login: false }));
    setLoggedUser({ display: "", login: false });
  }

  return (

    <div className="app">
      {showLogin && <LoginModal onCloseModal={closeModalHandler} onUserLogin={userLoginHandler} />}
      {showRegistration && <RegistrationModal onCloseModal={closeModalHandler} />}

      <Header loggedUser={loggedUser} onShowLogin={showLoginHandler} onShowRegistration={showRegistrationHandler} onLogout={logoutHandler} />
      <main className="main">
        <Router>
          <Nav />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/starships" element={<Starships />} />
            <Route exact path='/actors' element={<Actors />} />
          </Routes>
        </Router>
      </main>
      <Footer />
    </div>
  );
}

export default App;
