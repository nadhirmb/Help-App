import { combineReducers } from "redux";

import reducer from './posts'


export default combineReducers({
  posts : reducer 
});