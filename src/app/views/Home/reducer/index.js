// Dependencies
import { combineReducers } from 'redux';

// Locals Reducers
import nav from '../components/Nav/reducer';

// Home Initial State
const initialState = combineReducers({
  nav
});

export default initialState;
