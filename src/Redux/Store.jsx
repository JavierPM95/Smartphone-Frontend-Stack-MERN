import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

//Reducer List
import smartphoneReducer from './SmartphoneDucks';
import favoritesReducer from './FavoritesDucks';


const rootReducer = combineReducers ({
    smartphones: smartphoneReducer,
    favorites: favoritesReducer
})

//DevTools Config
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default function generateStore(){
    const store = createStore( rootReducer, composeEnhancers(applyMiddleware(thunk)))
    return store;
}