import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import getData from './utils/getData';
import retrieveList from './utils/retrieveList';


import {
  GET_ACTORS_FETCH,
  GET_ACTORS_FETCH_SUCCESS,
  GET_STARSHIPS_FETCH,
  GET_STARSHIPS_FETCH_SUCCESS,
  GET_ACTOR_DETAILS_FETCH,
  GET_ACTOR_DETAILS_FETCH_SUCCESS,
  GET_STARSHIP_DETAILS_FETCH,
  GET_STARSHIP_DETAILS_FETCH_SUCCESS
}  from './actions';




//   Actor Details
async function actorDetailsFetch (id) {
  let actor = await getData(`https://swapi.dev/api/people/${id}`, false);
  let films = await retrieveList(actor.films);
  let starships = await retrieveList(actor.starships);
  actor.films = films;
  actor.starships = starships;
  console.log(actor.starships);
  return actor;
}

function* getActorDetailsFetch (action) {
  const actor = yield call(actorDetailsFetch, action.payload)
  yield put({type: GET_ACTOR_DETAILS_FETCH_SUCCESS, actor: actor})
}
//



// Starship Details
async function starshipDetailsFetch (id) {
  let starship = await getData(`https://swapi.dev/api/starships/${id}`, false);
  let films = await retrieveList(starship.films);
  starship.films = films;
  return starship;
}

function* getStarshipDetailsFetch (action) {
  const starship = yield call(starshipDetailsFetch, action.payload)
  yield put({type: GET_STARSHIP_DETAILS_FETCH_SUCCESS, starship: starship})
}

//

// GET ALL Actors
async function  actorsFetch () {
  const actors = await getData('https://swapi.dev/api/people/', true);
  return actors;
}
//

// GET ALL Starships
async function  starshipsFetch () {
  const starships = getData('https://swapi.dev/api/starships/', true);
  return starships;
}



// GET ALL Actors
function* getStarshipsFetch () {
  const starships = yield call(starshipsFetch);
  yield put({type: GET_STARSHIPS_FETCH_SUCCESS, starships: starships});
}
//



function* getActorsFetch () {
  const actors = yield call(actorsFetch);
  yield put({type: GET_ACTORS_FETCH_SUCCESS, actors: actors})
}







function* Saga() {
  yield takeEvery(GET_ACTORS_FETCH,getActorsFetch);
  yield takeEvery(GET_STARSHIPS_FETCH, getStarshipsFetch)
  yield takeLatest(GET_ACTOR_DETAILS_FETCH, getActorDetailsFetch)
  yield takeLatest(GET_STARSHIP_DETAILS_FETCH, getStarshipDetailsFetch)
}

export default Saga;