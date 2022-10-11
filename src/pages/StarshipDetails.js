import { useParams } from "react-router-dom";
import './../style/style.scss';
import { useEffect, useRef, useState } from "react";
import defaultImage from './../img/default.jpg';
import { useDispatch, useSelector } from "react-redux";
import { getStarshipDetailsFetch } from './../actions';

const StarshipDetails = () => {

  const { id } = useParams();
  const [imgSrc, setImgSrc] = useState(`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`);
  const dispatch = useDispatch();
  const starship = useSelector(state => state.appReducer.starship);
  const films = useSelector(state => state.appReducer.starship.films);


  useEffect(() => {
    dispatch(getStarshipDetailsFetch(id));
  }, [id, dispatch])

  return (
    <div className="container">

      <div className="starship">
        <img className="starship__img" src={imgSrc} alt="error" onError={() => setImgSrc(defaultImage)} />

        {starship &&
          <div className="starship__details" key={Math.random()}>
            <h3 className="starship__title">{starship.name}</h3>
            <p className="starship__info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Odio sapiente incidunt pariatur, quibusdam quidem hic laborum magni
              optio nisi sint voluptas accusamus amet, obcaecati itaque! Asperiores
              doloribus incidunt ab distinctio.
            </p>

            <div className="starship__items">
              <div className="starship__item">Model: {starship.model}</div>
              <div className="starship__item">Manufacturer: {starship.manufacturer}</div>
              <div className="starship__item">Cost in credits: {starship.cost_in_credits}</div>
              <div className="starship__item">Length: {starship.length}</div>
              <div className="starship__item">Atmosperic: {starship.max_atmosphering_speed}</div>
              <div className="starship__item">Crew: {starship.crew}</div>
            </div>
          </div>
        }
      </div>


      {
        films ? (
          <>
            <h3 className="title">Films</h3>
            <div className="box-list">
              {
                films.map((film) => {
                  return (
                    <div className="box" key={Math.random()}>
                      <div className="box__title">{film.title}</div>
                      <div className="box__content">
                        <div className="box__item">Episode: {film.episode_id}</div>
                        <div className="box__item">Director: {film.director}</div>
                        <div className="box__item">Proucer: {film.producer}</div>
                        <div className="box__item">Release date: {film.release_date}</div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </>
        ) : (null)
      }

    </div>
  )
};

export default StarshipDetails;