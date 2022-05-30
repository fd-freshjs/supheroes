import actions from "./actionTypes";

export const getHeroesRequest = (payload) => ({
    type: actions.GET_HEROES_REQUEST,
    payload,
});

export const getHeroesSuccess = (payload) => ({
    type: actions.GET_HEROES_SUCCESS,
    payload,
});

export const getHeroesError = (payload) => ({
    type: actions.GET_HEROES_ERROR,
    payload,
});

export const createHeroRequest = (payload) => ({
    type: actions.CREATE_HERO_REQUEST,
    payload,
});

export const createHeroSuccess = (payload) => ({
    type: actions.CREATE_HERO_SUCCESS,
    payload,
});

export const createHeroError = (payload) => ({
    type: actions.CREATE_HERO_ERROR,
    payload,
});
