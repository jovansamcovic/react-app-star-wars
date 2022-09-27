import { useEffect, useRef, useState } from 'react';
import './../style/style.scss';
import axios from 'axios';
import Loader from '../components/Loader/Loader';
import { NavLink } from "react-router-dom";

const Starships = () => {

  const [starships, setStarships] = useState([]);
  const sourceRef = useRef(axios.CancelToken.source());
  const [isLoading, setIsLoading] = useState(true);

  const getStarships = async () => {
    const users = await axios.get('https://swapi.dev/api/starships/');
    const res = await users.data;
    setStarships(res.results);
    setIsLoading(false);
  }

  useEffect(() => {
    const source = sourceRef.current;
    getStarships();

    return () => {
      if (source) source.cancel("Landing Component got unmounted");
      setStarships([]);
    }
  }, [])

  return (
    <div className="container">
      <div className="starships">
        {!isLoading &&
          <ul className='list'>
            {
              starships.map((starship) => {
                return (
                  <li className='list__item' key={Math.random()}>
                      <NavLink to={`/starships/${starship.url.match("[0-9]")}`}>
                        <span className='list__item-title'>{starship.name}</span>
                        <span className='list__item-subtitle'>{starship.model}</span>
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

export default Starships;