/**
 * Created by Daniel on 26/11/2017.
 */
import { combineReducers } from "redux";
import authReducer from "./authReducer";
import surveysReducer from "./surveysReducers";

import { reducer as reduxForm } from "redux-form";

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  surveys: surveysReducer
});
