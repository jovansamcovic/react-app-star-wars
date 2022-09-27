import { useParams } from 'react-router-dom';
import './../style/style.scss';
import getData from '../utils/getData';
import { useEffect, useRef, useState } from 'react';
import Loader from '../components/Loader/Loader';
import axios from 'axios';

const ActorDetails = () => {

  const { id } = useParams();
  const [actor, setActor] = useState();
  const [films, setFilms] = useState();
  const [starships, setStarships] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const sourceRef = useRef(axios.CancelToken.source());

  const retrieveList = async (array) => {
    let dataList = [];
    for (let url of array) {
      dataList = [...dataList, await getData(`${url}`)];
    };
    return dataList;
  }


  useEffect(() => {

    const source = sourceRef.current;

    const setData = async () => {
        const actorData = await getData('https://swapi.dev/api/people/'+id);
        setActor(actorData);

        const filmsData = await retrieveList(actorData.films);
        setFilms(filmsData);

        const starshipData = await retrieveList(actorData.starships)
        setStarships(starshipData);

        setIsLoading(false);
    }


    setData();

    return () => {
      if (source) source.cancel("Landing Component got unmounted");
    }

  },[id])

  return (
    <div className='container'>

      {isLoading && <Loader />}
      {actor ? (
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
      ): null}

      {
        films !== null && films !== undefined ? (
          <>
          <h3 className="title">Films</h3>
            <div className="box-list">
              {
                films.map((film) => {
                  return (
                  <div className="box">
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

      {
        starships !== null && starships !== undefined && !isLoading ? (
          <>
              <h3 className="title">Starships</h3>
              <div className="box-list">
              {
                starships.map((starship) => {
                  return (
                    <div className="box">
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
        ) : null
      }

    </div>
  )
};

export default ActorDetails;