import { useEffect } from 'react';
import './../style/style.scss';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getActorsFetch, setActiveModal } from './../actions';
import Loader from './../components/Loader/Loader';
import { getActiveModal, getActors, getError } from '../selectors';
import { MODALS } from '../constants';

const Actors = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.appReducer.isLoading);

  const Selectors = {
    activeModal: useSelector((state) => getActiveModal(state)),
    actors: useSelector((state) => getActors(state)),
    error: useSelector((state) => getError(state)),
  }

   const Actions = {
    setActiveModal: (payload) => dispatch(setActiveModal(payload)),
  };


  useEffect(() => {
    dispatch(getActorsFetch());
  }, [dispatch])


  useEffect(() => {
    if(Selectors.error) {
      Actions.setActiveModal({ activeModal: MODALS.ERROR });
    }
  },[Selectors.error])


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