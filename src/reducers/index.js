import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import {authReducer} from "../Auth/authReducer";
import labels from "../i18n/labels";
import {localeReducer} from "react-multilingual";

const rootReducer = combineReducers({
                                      form: formReducer,
                                      auth: authReducer,
                                      labels: localeReducer("en", labels)
                                    });

export default rootReducer
