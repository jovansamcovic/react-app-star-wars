import { useEffect } from 'react';
import './../style/style.scss';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getActorsFetch } from './../actions';

const Actors = () => {

  const dispatch = useDispatch();
  let actors = useSelector(state => state.appReducer.actors);


  useEffect(() => {
    dispatch(getActorsFetch());
  }, [dispatch])

  return (
    <div className="container">
      <div className="starships">
        {actors &&
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
      </div>
    </div>
  )
};

export default Actors;