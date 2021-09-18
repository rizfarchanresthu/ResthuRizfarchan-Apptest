import {createStore} from 'redux';
import appReducer from './reducer/index';
// import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(appReducer);

export default store;