import { useEffect } from 'react';
import './../style/style.scss';
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getStarshipsFetch } from './../actions';
import Loader from '../components/Loader/Loader';

const Starships = () => {

  const dispatch = useDispatch();
  const starships = useSelector(state => state.appReducer.starships);
  const isLoading = useSelector(state => state.appReducer.isLoading);

  useEffect(() => {
    dispatch(getStarshipsFetch());
  }, [dispatch])

  return (
    <div className="container">
      <div className="starships">
        {isLoading && <Loader />}
        {starships && !isLoading &&
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

      </div>
    </div>
  )
};

export default Starships;