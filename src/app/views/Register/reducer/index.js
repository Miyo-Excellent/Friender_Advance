// Dependencies
import { combineReducers } from "redux";

// Component Reducer
import controller from '../components/Controller/reducer';
import nav from "../components/Nav/reducer";
import userData from "./userData";

export default combineReducers({
  controller,
  nav,
  userData
});
