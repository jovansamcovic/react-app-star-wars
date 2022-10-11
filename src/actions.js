export const GET_ACTORS_FETCH = "GET_ACTORS_FETCH";
export const GET_ACTORS_FETCH_SUCCESS = "GET_ACTORS_FETCH_SUCCESS";

export const GET_STARSHIPS_FETCH = "GET_STARSHIPS_FETCH";
export const GET_STARSHIPS_FETCH_SUCCESS = "GET_STARSHIPS_FETCH_SUCCESS";

export const GET_ACTOR_DETAILS_FETCH = "GET_ACTOR_DETAILS_FETCH";
export const GET_ACTOR_DETAILS_FETCH_SUCCESS = "GET_ACTOR_DETAILS_FETCH_SUCCESS";

export const GET_STARSHIP_DETAILS_FETCH = "GET_STARSHIP_DETAILS_FETCH";
export const GET_STARSHIP_DETAILS_FETCH_SUCCESS = "GET_STARSHIP_DETAILS_FETCH_SUCCESS";

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

