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
  GET_STARSHIP_DETAILS_FETCH_SUCCESS,
  SET_IS_LOADING,
  SET_ERROR
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
  yield put({type: SET_IS_LOADING, isLoading: true});
  const actor = yield call(actorDetailsFetch, action.payload)
  yield put({type: GET_ACTOR_DETAILS_FETCH_SUCCESS, actor: actor})
  yield put({type: SET_IS_LOADING, isLoading: false});
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
  yield put({type: SET_IS_LOADING, isLoading: true});
  const starship = yield call(starshipDetailsFetch, action.payload)
  yield put({type: GET_STARSHIP_DETAILS_FETCH_SUCCESS, starship: starship})
  yield put({type: SET_IS_LOADING, isLoading: false});
}

//



// GET ALL Starships
async function  starshipsFetch () {
  const starships = getData('https://swapi.dev/api/starships/', true);
  return starships;
}



// GET ALL Starships
function* getStarshipsFetch () {
  yield put({type: SET_IS_LOADING, isLoading: true});
  const starships = yield call(starshipsFetch);
  yield put({type: GET_STARSHIPS_FETCH_SUCCESS, starships: starships});
  yield put({type: SET_IS_LOADING, isLoading: false});
}
//



// GET ALL Actors
async function  actorsFetch () {
  const actors = await getData('https://swapi.dev/api/people/', true);
  return actors;
}

function* getActorsFetch () {
  yield put({type: SET_IS_LOADING, isLoading: true});
  const response = yield call(actorsFetch);

  if (typeof response !== 'string') {
    yield put({type: GET_ACTORS_FETCH_SUCCESS, actors: response})
  } else {
    yield put({type: SET_ERROR, error: response});
  }

  yield put({type: SET_IS_LOADING, isLoading: false});
}
//


function* Saga() {
  yield takeEvery(GET_ACTORS_FETCH,getActorsFetch);
  yield takeEvery(GET_STARSHIPS_FETCH, getStarshipsFetch)
  yield takeLatest(GET_ACTOR_DETAILS_FETCH, getActorDetailsFetch)
  yield takeLatest(GET_STARSHIP_DETAILS_FETCH, getStarshipDetailsFetch)
}

export default Saga;