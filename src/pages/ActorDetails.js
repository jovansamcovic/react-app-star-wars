
import './../style/style.scss';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getActorDetailsFetch } from './../actions';
import { isLoading } from '../selectors';

import Loader from '../components/Loader/Loader';

import {
  getActor,
  getFilmsForActor,
  getStarshipsForActor
} from '../selectors';

const ActorDetails = () => {

  const { id } = useParams();
  const dispatch = useDispatch();

  const Selectors = {
    actor: useSelector(state => getActor(state)),
    films: useSelector(state => getFilmsForActor(state)),
    starships: useSelector(state => getStarshipsForActor(state)),
    isLoading: useSelector((state) => isLoading(state))
  }

  useEffect(() => {
    dispatch(getActorDetailsFetch(id));
  },[id, dispatch])

  return (
    <div className='container'>

      {Selectors.isLoading && <Loader />}
      {Selectors.actor && !Selectors.isLoading &&
        <div className='actor'>
        <h3 className='actor__title'>{Selectors.actor.name}</h3>
        <div className='actor__details'>
            <div className='actor__item'>Height: {Selectors.actor.height}</div>
            <div className='actor__item'>Eye color: {Selectors.actor.eye_color}</div>
            <div className='actor__item'>Mass: {Selectors.actor.mass}</div>
            <div className='actor__item'>Birth Year: {Selectors.actor.birth_year}</div>
            <div className='actor__item'>Hair color {Selectors.actor.hair_color}</div>
            <div className='actor__item'>Gender: {Selectors.actor.gender}</div>
        </div>
      </div>
      }

      {
        Selectors.films && !Selectors.isLoading &&
          <>
          <h3 className="title">Films</h3>
            <div className="box-list">
              {
                Selectors.actor.films.map((film) => {
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

      {
        Selectors.starships && !Selectors.isLoading &&
        <>
          <h3 className="title">Starships</h3>
          <div className="box-list">
          {
            Selectors.starships.map((starship) => {
              return (
                <div className="box" key={Math.random()}>
                  <div className="box__title">{Selectors.starships.name}</div>
                  <div className="box__content">
                    <div className="box__item">Model: {Selectors.starships.model}</div>
                    <div className="box__item">Manufacturer: {Selectors.starships.manufacturer}</div>
                    <div className="box__item">Cost in credits: {Selectors.starships.cost_in_credits}</div>
                    <div className="box__item">length: {Selectors.starships.length}</div>
                    <div className="box__item">Max atmosphering speed: {Selectors.starships.max_atmosphering_speed}</div>
                    <div className="box__item">Crew: {Selectors.starships.crew}</div>
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

export default ActorDetails;