import {applyMiddleware,createStore, combineReducers} from 'redux';
import thunk from "redux-thunk";

import {composeWithDevTools} from "redux-devtools-extension";
import { productDetailsReduce, productReducer } from './reducers/productReducer';
import {profileReducer, userReducer} from './reducers/userReducer'
const reducer=combineReducers({
   products:productReducer,
   productDetails:productDetailsReduce,
   user:userReducer,
   profile:profileReducer
});
const middleware=[thunk];

let initialState = {};



const store = createStore(
   reducer,
   initialState,
   composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
