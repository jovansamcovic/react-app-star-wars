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
  let response = await getData(`https://swapi.dev/api/people/${id}`, false);

  if (typeof response !== 'string') {
    let films = await retrieveList(response.films);
    let starships = await retrieveList(response.starships);
    response.films = films;
    response.starships = starships;
  }

  return response;
}

function* getActorDetailsFetch (action) {
  yield put({type: SET_IS_LOADING, isLoading: true});

  const response = yield call(actorDetailsFetch, action.payload);


  if (typeof response !== 'string') {
    yield put({type: GET_ACTOR_DETAILS_FETCH_SUCCESS, actor: response})
  } else {
    yield put({type: SET_ERROR, error: response});
  }

  yield put({type: SET_IS_LOADING, isLoading: false});
}
//



// Starship Details
async function starshipDetailsFetch (id) {
  let starship = await getData(`https://swapi.dev/api/starships/${id}`, false);

  if (typeof starship !== 'string') {
    let films = await retrieveList(starship.films);
    starship.films = films;
  }
  return starship;
}

function* getStarshipDetailsFetch (action) {
  yield put({type: SET_IS_LOADING, isLoading: true});
  const response = yield call(starshipDetailsFetch, action.payload)

  if (typeof response !== 'string') {
    yield put({type: GET_STARSHIP_DETAILS_FETCH_SUCCESS, starship: response})
  } else {
    yield put({type: SET_ERROR, error: response});
  }

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
  const response = yield call(starshipsFetch);

  if (typeof response !== 'string') {
    yield put({type: GET_STARSHIPS_FETCH_SUCCESS, starships: response});
  } else {
    yield put({type: SET_ERROR, error: response});
  }

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