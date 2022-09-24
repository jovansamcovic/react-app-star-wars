import './style/style.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Modal from './components/Modal/Modal';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(!showModal);
  }

  return (

    <div className="app">
      {showModal && <Modal onCloseModal={showModalHandler} />}
      <Header onShowModal={showModalHandler} />
      <main className="main">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </Router>
      </main>
      <Footer />
    </div>
  );
}

export default App;
