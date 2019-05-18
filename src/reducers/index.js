import {combineReducers} from 'redux';
import BasketReducer from './BasketReducer';
import CharacterReducer from "./CharacterReducer";


const Reducers = combineReducers({
    basket: BasketReducer,
    character: CharacterReducer
});

export default Reducers;