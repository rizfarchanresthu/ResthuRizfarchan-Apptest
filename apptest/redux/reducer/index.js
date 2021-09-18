import contactReducer from "./contactReducer"
import { combineReducers } from 'redux';

const appReducer = combineReducers({
    contact: contactReducer
})

export default appReducer;