import {
  GET_ACTORS_FETCH_SUCCESS,
  GET_STARSHIPS_FETCH_SUCCESS,
  GET_ACTOR_DETAILS_FETCH_SUCCESS,
  GET_STARSHIP_DETAILS_FETCH_SUCCESS,
  SET_IS_LOADING,
  SET_ACTIVE_MODAL,
  SET_ERROR
} from './actions';


const initalState = {
  isLoading: false,
  actors: [],
  starships: [],
  actor: {
    films: [],
    starships: []
  },
  starship: {
    films: []
  },
  activeModal: '',
  error: ''
}

const appReducer = (state = initalState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        error: action.error
      }
    case SET_ACTIVE_MODAL:
      return {
        ...state,
        activeModal: action.payload?.activeModal ?? ''
      }
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }
    case GET_ACTORS_FETCH_SUCCESS:
      return {
        ...state,
        actors: action.actors
      }
    case GET_STARSHIPS_FETCH_SUCCESS:
      return {
        ...state,
        starships: action.starships
      }
    case GET_ACTOR_DETAILS_FETCH_SUCCESS:
      return {
        ...state,
        actor: action.actor
      }
    case GET_STARSHIP_DETAILS_FETCH_SUCCESS:
      return {
        ...state,
        starship: action.starship
      }

    default:
      return state
  }
}

export default appReducer;