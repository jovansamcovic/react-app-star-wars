import { useEffect } from 'react';
import './../style/style.scss';
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getStarshipsFetch } from './../actions';
import Loader from '../components/Loader/Loader';
import { getStarships, isLoading } from '../selectors';

const Starships = () => {

  const dispatch = useDispatch();

  const Selectors = {
    starships: useSelector((state) => getStarships(state)),
    isLoading: useSelector((state) => isLoading(state))
  }

  useEffect(() => {
    dispatch(getStarshipsFetch());
  }, [dispatch])

  return (
    <div className="container">
      <div className="starships">
        {Selectors.isLoading && <Loader />}
        {Selectors.starships && !Selectors.isLoading &&
          <ul className='list'>
            {
              Selectors.starships.map((starship) => {
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

      </div>
    </div>
  )
};

export default Starships;