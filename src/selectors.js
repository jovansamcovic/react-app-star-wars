export const isLoading = (state) =>  state.appReducer.isLoading;
export const getActors = (state) => state.appReducer.actors;
export const getStarships = (state) => state.appReducer.starships;
export const getActor = (state) => state.appReducer.actor;
export const getFilmsForActor = (state) => state.appReducer.actor.films;
export const getStarshipsForActor = (state) => state.appReducer.actor.starships;
export const getsStarship = (state) => state.appReducer.starship;
export const getFilmsForStarship = (state) => state.appReducer.starship.films;