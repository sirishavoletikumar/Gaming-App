import { combineReducers } from "redux";
import fetchThePost from "./postReducer";
import testReducer from "./testReducer";

export default combineReducers({
    posts: fetchThePost,
    test: testReducer
    
})