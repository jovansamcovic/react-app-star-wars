import Carousel from "../components/Carousel/Carousel";
import './../style/style.scss';

import card1 from './../img/cards/card1.webp';
import card2 from './../img/cards/card2.jpg';
import card3 from './../img/cards/card3.jpg';
import card4 from './../img/cards/card4.jpg';

const Home = () => {
  return (
    <>
      <Carousel />

      <div className="container">

        <div className="banner">
          <div className="banner__info">
            <h3 className="banner__title">A new era of Star Wars</h3>
            <button className="banner__btn">Explore</button>
          </div>
        </div>

        <div className="cards">
          <div className="cards__list">
            <div className="card">
              <div className="card__wrap">
                <img className="card__img" src={card1} alt="error" />
              </div>
              <div className="card__info">
                <div className="card__decal-left"></div>
                <div className="card__decal-right"></div>
                <h3>Meet the Ships and Vehicles</h3>
              </div>
            </div>

            <div className="card">
              <div className="card__wrap">
                <img className="card__img" src={card2} alt="error" />
              </div>
              <div className="card__info">
                <div className="card__decal-left"></div>
                <div className="card__decal-right"></div>
                <h3>Meet the Droids</h3>
              </div>
            </div>

            <div className="card">
              <div className="card__wrap">
                <img className="card__img" src={card3} alt="error" />
              </div>
              <div className="card__info">
                <div className="card__decal-left"></div>
                <div className="card__decal-right"></div>
                <h3>Meet the Heroes</h3>
              </div>
            </div>

            <div className="card">
              <div className="card__wrap">
                <img className="card__img" src={card4} alt="error" />
              </div>
              <div className="card__info">
                <div className="card__decal-left"></div>
                <div className="card__decal-right"></div>
                <h3>Meet the Villians</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Home;