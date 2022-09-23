import './style/style.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Home from './pages/Home';

function App() {
  return (
    <div className="app">
       <Header />
       <main className="main">
        <Nav />
        <Home />
       </main>
       <Footer />
    </div>
  );
}

export default App;
