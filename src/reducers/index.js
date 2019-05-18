import {combineReducers} from 'redux';
import BasketReducer from './BasketReducer';


const Reducers = combineReducers({
    basket: BasketReducer
});

export default Reducers;