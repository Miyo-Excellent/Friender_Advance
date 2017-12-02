// Dependencies
import { combineReducers } from 'redux';

// Locals Reducers
import navBar from '../components/NavBar/reducer';

// Home Initial State
const initialState = combineReducers({
  navBar
});

export default initialState;
