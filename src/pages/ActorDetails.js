import { useParams } from 'react-router-dom';
import './../style/style.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getActorDetailsFetch } from './../actions';
import Loader from '../components/Loader/Loader';

const ActorDetails = () => {

  const { id } = useParams();
  const actor = useSelector(state => state.appReducer.actor);
  const films = useSelector(state => state.appReducer.actor.films)
  const starships = useSelector(state => state.appReducer.actor.starships)
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.appReducer.isLoading);


  useEffect(() => {
    dispatch(getActorDetailsFetch(id));
  },[id, dispatch])

  return (
    <div className='container'>

      {isLoading && <Loader />}
      {actor && !isLoading &&
        <div className='actor'>
        <h3 className='actor__title'>{actor.name}</h3>
        <div className='actor__details'>
            <div className='actor__item'>Height: {actor.height}</div>
            <div className='actor__item'>Eye color: {actor.eye_color}</div>
            <div className='actor__item'>Mass: {actor.mass}</div>
            <div className='actor__item'>Birth Year: {actor.birth_year}</div>
            <div className='actor__item'>Hair color {actor.hair_color}</div>
            <div className='actor__item'>Gender: {actor.gender}</div>
        </div>
      </div>
      }

      {
        films && !isLoading &&
          <>
          <h3 className="title">Films</h3>
            <div className="box-list">
              {
                actor.films.map((film) => {
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
        starships && !isLoading &&
        <>
          <h3 className="title">Starships</h3>
          <div className="box-list">
          {
            actor.starships.map((starship) => {
              return (
                <div className="box" key={Math.random()}>
                  <div className="box__title">{starship.name}</div>
                  <div className="box__content">
                    <div className="box__item">Model: {starship.model}</div>
                    <div className="box__item">Manufacturer: {starship.manufacturer}</div>
                    <div className="box__item">Cost in credits: {starship.cost_in_credits}</div>
                    <div className="box__item">length: {starship.length}</div>
                    <div className="box__item">Max atmosphering speed: {starship.max_atmosphering_speed}</div>
                    <div className="box__item">Crew: {starship.crew}</div>
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