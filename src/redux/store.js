import { createStore,applyMiddleware } from "redux";
import logger from 'redux-logger';

import rootReducer from "./root-reducer";


const middlewares = [logger];
const store =createStore(rootReducer,applyMiddleware(...middlewares))

export default store;

/**
 * 
 * import { createStore,applyMiddleware ,compose} from "redux";
import logger from 'redux-logger';

import rootReducer from "./root-reducer";
import thunk from 'redux-thunk';

const initialState = {};

const middlewares = [thunk];
const store =createStore(
    rootReducer,
    initialState,
    compose(
    applyMiddleware(...middlewares)
    )
);

export default store;
 */