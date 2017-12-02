// Dependencies
import { combineReducers } from "redux";

// Component Reducer
import controller from '../components/Controller/reducer';
import navBar from "../components/NavBar/reducer";
import userData from "./userData";

export default combineReducers({
  controller,
  navBar,
  userData
});
