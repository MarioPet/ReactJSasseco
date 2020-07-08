import { combineReducers } from "redux"

import UserReducer from "./UserReducer";
import MoviesReducer from "./MoviesReducer";
import TodoReducer from "./TodoReducer"

export default combineReducers({
    UserReducer,
    MoviesReducer,
    TodoReducer
});