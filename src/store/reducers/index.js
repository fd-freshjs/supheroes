import { combineReducers } from "redux"
import { heroesReducer } from "./heroes.reducer";

const rootReducer = combineReducers({
    heroes: heroesReducer,
});

export default rootReducer;
