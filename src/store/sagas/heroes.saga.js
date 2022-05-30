import { call, put, takeLatest } from 'redux-saga/effects';
import { getHeroesError, getHeroesSuccess } from "../actions/actionCreators";
import * as HeroApi from '../../api/hero.api';
import actions from '../actions/actionTypes';

export function* heroesSaga() {
    yield takeLatest(actions.GET_HEROES_REQUEST, getHeroesSaga);
}

export function* getHeroesSaga(action) {
    try {
        const response = yield call(HeroApi.getHeroes, action.payload);
        yield put(getHeroesSuccess(response));
    } catch (error) {
        yield put(getHeroesError(error));
    }
}
