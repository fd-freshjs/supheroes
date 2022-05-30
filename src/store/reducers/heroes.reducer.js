import actions from '../actions/actionTypes';

export const heroesState = {
    list: [],
    isLoading: false,
    error: null,
};

export const heroesReducer = (state = heroesState, action) => {
    switch (action.type) {
        case actions.GET_HEROES_REQUEST: {
            return { ...state, isLoading: true, error: null };
        }
        case actions.GET_HEROES_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                list: [...action.payload],
            };
        }
        case actions.GET_HEROES_ERROR: {
            return { ...state, isLoading: false, error: action.payload };
        }
        default: {
            return state;
        }
    }
};
