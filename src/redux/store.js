import { createStore, combineReducers } from 'redux';
import user from './reducers/user';
import pets from './reducers/pets';

let initialState = {
    user: {
        name: '',
        last_name: ''
    },
    pets: []
}

let reducers = combineReducers({
    user,
    pets
});

let store = createStore(reducers, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;