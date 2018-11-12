import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import labels from "../i18n/labels";
import {localeReducer} from "react-multilingual";
import { authReducer } from '../Auth/authReducer';

const rootReducer = combineReducers({
                                      form: formReducer,
                                      auth: authReducer,
                                      labels: localeReducer("en", labels)
                                    });

export default rootReducer
