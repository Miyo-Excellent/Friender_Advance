// Dependencies
import { combineReducers } from 'redux';

// Locals Reducers
import content from '../components/Content/reducer';
import nav from '../components/Nav/reducer';

// Home Initial State
const initialState = combineReducers({
  content,
  nav
});

export default initialState;
