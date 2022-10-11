import {
  GET_ACTORS_FETCH_SUCCESS,
  GET_STARSHIPS_FETCH_SUCCESS,
  GET_ACTOR_DETAILS_FETCH_SUCCESS,
  GET_STARSHIP_DETAILS_FETCH_SUCCESS
} from './actions';


const initalState = {
  actors: [],
  starships: [],
  actor: {
    films: [],
    starships: []
  },
  starship: {
    films: []
  }
}

const appReducer = (state = initalState, action) => {
  switch (action.type) {
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