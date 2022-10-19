export const GET_ACTORS_FETCH = "GET_ACTORS_FETCH";
export const GET_ACTORS_FETCH_SUCCESS = "GET_ACTORS_FETCH_SUCCESS";

export const GET_STARSHIPS_FETCH = "GET_STARSHIPS_FETCH";
export const GET_STARSHIPS_FETCH_SUCCESS = "GET_STARSHIPS_FETCH_SUCCESS";

export const GET_ACTOR_DETAILS_FETCH = "GET_ACTOR_DETAILS_FETCH";
export const GET_ACTOR_DETAILS_FETCH_SUCCESS = "GET_ACTOR_DETAILS_FETCH_SUCCESS";

export const GET_STARSHIP_DETAILS_FETCH = "GET_STARSHIP_DETAILS_FETCH";
export const GET_STARSHIP_DETAILS_FETCH_SUCCESS = "GET_STARSHIP_DETAILS_FETCH_SUCCESS";

export const SET_IS_LOADING = 'SET_IS_LOADING';
export const SET_ACTIVE_MODAL = 'SET_ACTIVE_MODAL';

export const SET_ERROR = 'SET_ERROR';


export const setActiveModal = (payload) => ({
  type: SET_ACTIVE_MODAL,
  payload: payload
})

export const getActorsFetch = () => ({
  type: GET_ACTORS_FETCH
})

export const getStarshipsFetch = () => ({
  type: GET_STARSHIPS_FETCH
})

export const getActorDetailsFetch = (id) => ({
  type: GET_ACTOR_DETAILS_FETCH,
  payload: id
})

export const getStarshipDetailsFetch = (id) => ({
  type: GET_STARSHIP_DETAILS_FETCH,
  payload: id
})

export const setIsLoading = () => ({
  type: SET_IS_LOADING
})