import { combineReducers } from 'redux';

export default combineReducers({
    login: require("./genericReducer").getReducer("SESSION", {status: false, token: null, error: null})
});