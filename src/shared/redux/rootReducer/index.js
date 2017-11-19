// Dependencies
import { combineReducers } from 'redux';

// Devices Reducers
import devices from './deviceReducer';
// Views Reducers
import home from '../../../app/views/Home/reducer';
import user from '../../../app/views/User/reducer';

const rootReducer = combineReducers({
  devices,
  home,
  user
});

export default rootReducer;
