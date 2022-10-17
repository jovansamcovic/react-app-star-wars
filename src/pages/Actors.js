import { useEffect } from 'react';
import './../style/style.scss';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getActorsFetch } from './../actions';
import Loader from './../components/Loader/Loader';
import { getActors } from '../selectors';

const Actors = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.appReducer.isLoading);

  const Selectors = {
    actors: useSelector((state) => getActors(state))
  }



  useEffect(() => {
    dispatch(getActorsFetch());
  }, [dispatch])

  return (
    <div className="container">
      <div className="starships">
        {isLoading && <Loader />}
        {Selectors.actors && !isLoading &&
          <ul className='list'>
          {
            Selectors.actors.map((actor) => {
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
      </div>
    </div>
  )
};

export default Actors;