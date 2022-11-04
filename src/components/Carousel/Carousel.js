import './Carousel.scss';
import { useEffect, useRef, useState } from 'react';


import slider1 from './../../img/slider/1.jpg';
import slider2 from './../../img/slider/2.jpg';
import slider3 from './../../img/slider/3.jpg';


const carouselData = [
  {
    image: slider1,
    title: 'WHAT’S THE GREATEST SHIP DESIGN IN STAR WARS?',
    text: 'Learn about the secrets of star wars ships.',
    theme: 'light',
    color: 'blue',
    button: 'learn more',
    link: '/starships'
  },
  {
    image: slider2,
    title: 'STAR WARS INSIDE INTEL: THE PILOTS',
    text: 'Jump into the cockpit for a dogfight of words.',
    theme: 'dark',
    color: 'orange',
    button: 'more details',
    link: '#!'
  },
  {
    image: slider3,
    title: 'HEROES OF STAR WARS',
    text: 'We are all the Republic. Meet the actors behind-the-scenes.',
    theme: 'dark',
    color: 'gold',
    button: 'read now',
    link: '/actors'
  }
]


const Carousel = () => {

  const [current, setCurrent] = useState(0);
  const intervalSlider = useRef(0);

  const carouselHandler = (direction) => {

      if (direction === "left") {
        if(current === 0)
          setCurrent(current => carouselData.length - 1);
         else
          setCurrent(current => current - 1);
      }
      else {
        if (current === (carouselData.length - 1))
          setCurrent(current => 0);
        else
          setCurrent(current => current + 1);
      }
  }

  useEffect(() => {
    const slider = document.getElementById('carousel__list');
    slider.style.transform = `translateX(-${current}00%)`
  },[current])

  useEffect(() => {
    intervalSlider.current =  setInterval(() => {
        setCurrent(current => current === carouselData.length - 1 ? 0 : current + 1);
    },4000)

    return () => clearInterval(intervalSlider.current);
  })

  return (
    <div className="carousel">
          <button className="carousel__arrow left" onClick={() => carouselHandler("left")}></button>
          <button className="carousel__arrow right" onClick={() => carouselHandler("right")}></button>
        <div className="carousel__list" id='carousel__list' style={{transform: `translate(-${current * 100}%)`}}>
          {
            carouselData.map((item) => {
              let fontColor = item.theme === "dark" ? "#000" : "#fff";

              return (
                <div className="carousel__item" key={Math.random()}>
                  <img className="carousel__img" src={item.image} alt="Error"/>
                  <div className='carousel__info'style={{color: fontColor}}>
                      <h3 className='carousel__title'>{item.title}</h3>
                      <p className='carousel__text'>{item.text}</p>
                      <button style={{background: item.color}} className='carousel__btn'>{item.button}</button>
                  </div>
              </div>
              )
            })
          }
        </div>
    </div>
  )
};

export default Carousel;