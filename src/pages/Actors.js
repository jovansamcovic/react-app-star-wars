import { useEffect, useRef, useState } from 'react';
import './../style/style.scss';
import axios from 'axios';
import Loader from '../components/Loader/Loader';
import { NavLink } from 'react-router-dom';

const Actors = () => {

  const [actors, setActors] = useState([]);
  const sourceRef = useRef(axios.CancelToken.source());
  const [isLoading, setIsLoading] = useState(true);

  const getActors = async () => {
    const actorsList = await axios.get('https://swapi.dev/api/people/');
    const res = await actorsList.data;

    setActors(res.results);
    setIsLoading(false);
  }

  useEffect(() => {
    const source = sourceRef.current;
    getActors();

    return () => {
      if (source) source.cancel("Landing Component got unmounted");
      setActors([]);
    }
  }, [])

  return (
    <div className="container">
      <div className="starships">
        {!isLoading &&
            <ul className='list'>
            {
              actors.map((actor) => {
                return (
                  <li className='list__item' key={Math.random()}>
                    <NavLink to={`/actors/${actor.url.match("[0-9]")}`}>
                       <span className='list__item-title'>{actor.name}</span>
                    </NavLink>
                  </li>
                )
              })
            }
          </ul>
        }
        {isLoading && <Loader />}
      </div>
    </div>
  )
};

export default Actors;