import './style/style.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Home from './pages/Home';
import Modal from './components/Modal/Modal';
import { useState } from 'react';

function App() {

  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(!showModal);
  }

  return (

    <div className="app">
      {showModal && <Modal onCloseModal={showModalHandler} />}
       <Header onShowModal = {showModalHandler}/>
       <main className="main">
        <Nav />
        <Home />
       </main>
       <Footer />
    </div>
  );
}

export default App;
