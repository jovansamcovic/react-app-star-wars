import { useParams } from "react-router-dom";
import './../style/style.scss';
import { useEffect, useState } from "react";
import defaultImage from './../img/default.jpg';
import { useDispatch, useSelector } from "react-redux";
import { getStarshipDetailsFetch, setActiveModal } from './../actions';
import Loader from "../components/Loader/Loader";
import { getsStarship, getFilmsForStarship, isLoading, getError } from './../selectors';
import { MODALS } from '../constants';

const StarshipDetails = () => {

  const { id } = useParams();
  const [imgSrc, setImgSrc] = useState(`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`);
  const dispatch = useDispatch();

  const Selectors = {
    starship: useSelector(state => getsStarship(state)),
    films: useSelector((state) => getFilmsForStarship(state)),
    isLoading: useSelector((state) => isLoading(state)),
    error: useSelector((state) => getError(state))
  }

  const Actions = {
    setActiveModal: (payload) => dispatch(setActiveModal(payload)),
  };

  useEffect(() => {
    dispatch(getStarshipDetailsFetch(id));
  }, [id, dispatch])


  useEffect(() => {
    if(Selectors.error) {
      Actions.setActiveModal({ activeModal: MODALS.ERROR });
    }
  },[Selectors.error])

  return (
    <div className="container">

      <div className="starship">
        {Selectors.isLoading && <Loader />}

        {!Selectors.isLoading && <img className="starship__img" src={imgSrc} alt="error" onError={() => setImgSrc(defaultImage)} />}

        {Selectors.starship && !Selectors.isLoading &&
          <div className="starship__details" key={Math.random()}>
            <h3 className="starship__title">{Selectors.starship.name}</h3>
            <p className="starship__info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Odio sapiente incidunt pariatur, quibusdam quidem hic laborum magni
              optio nisi sint voluptas accusamus amet, obcaecati itaque! Asperiores
              doloribus incidunt ab distinctio.
            </p>

            <div className="starship__items">
              <div className="starship__item">Model: {Selectors.starship.model}</div>
              <div className="starship__item">Manufacturer: {Selectors.starship.manufacturer}</div>
              <div className="starship__item">Cost in credits: {Selectors.starship.cost_in_credits}</div>
              <div className="starship__item">Length: {Selectors.starship.length}</div>
              <div className="starship__item">Atmosperic: {Selectors.starship.max_atmosphering_speed}</div>
              <div className="starship__item">Crew: {Selectors.starship.crew}</div>
            </div>
          </div>
        }
      </div>

      {
        Selectors.films && !isLoading &&
          <>
            <h3 className="title">Films</h3>
            <div className="box-list">
              {
                Selectors.films.map((film) => {
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
      }

    </div>
  )
};

export default StarshipDetails;