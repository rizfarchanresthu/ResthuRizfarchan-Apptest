import {createStore} from 'redux';
import appReducer from './reducer/index';

const store = createStore(appReducer);

export default store;