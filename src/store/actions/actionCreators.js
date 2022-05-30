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
