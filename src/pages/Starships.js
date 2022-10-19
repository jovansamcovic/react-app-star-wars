import { useEffect } from 'react';
import './../style/style.scss';
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getStarshipsFetch, setActiveModal } from './../actions';
import Loader from '../components/Loader/Loader';
import { getError, getStarships, isLoading } from '../selectors';
import { MODALS } from '../constants';

const Starships = () => {

  const dispatch = useDispatch();

  const Selectors = {
    starships: useSelector((state) => getStarships(state)),
    isLoading: useSelector((state) => isLoading(state)),
    error: useSelector((state) => getError(state))
  }

  const Actions = {
    setActiveModal: (payload) => dispatch(setActiveModal(payload)),
  };

  useEffect(() => {
    dispatch(getStarshipsFetch());
  }, [dispatch])

  useEffect(() => {
    if(Selectors.error) {
      Actions.setActiveModal({ activeModal: MODALS.ERROR });
    }
  },[Selectors.error])

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