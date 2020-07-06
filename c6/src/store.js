import { applyMiddleware, createStore } from "redux";

// Logs when actions are fired in the console
import { createLogger } from "redux-logger";

// Letting us write asynchronus actions in redux
import thunk from "redux-thunk";

// Combine Reducers (Global state to come from once placce)
import combine from "./reducers";

const middleware = applyMiddleware(thunk, createLogger());

// Global State Container
const store = createStore(combine, middleware);

export default store;