import { legacy_createStore as createStore,
combineReducers,
applyMiddleware} from "redux";
import thunk from "redux-thunk";

import dictionary from "./modules/dictionary";

const rootReducer = combineReducers({dictionary});
const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);
const store = createStore(rootReducer, enhancer);

export default store;
