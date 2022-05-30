import { call, put, takeLatest } from 'redux-saga/effects';
import { createHeroError, createHeroSuccess, getHeroesError, getHeroesSuccess } from "../actions/actionCreators";
import * as HeroApi from '../../api/hero.api';
import actions from '../actions/actionTypes';

export function* heroesSaga() {
    yield takeLatest(actions.GET_HEROES_REQUEST, getHeroesSaga);
    yield takeLatest(actions.CREATE_HERO_REQUEST, createHeroSaga);
}

export function* getHeroesSaga(action) {
    try {
        const response = yield call(HeroApi.getHeroesAsync, action.payload);
        yield put(getHeroesSuccess(response));
    } catch (error) {
        yield put(getHeroesError(error));
    }
}

export function* createHeroSaga(action) {
    try {
        const response = yield call(HeroApi.createHeroAsync, action.payload);
        yield put(createHeroSuccess(response));
    } catch (error) {
        yield put(createHeroError(error));
    }
}
