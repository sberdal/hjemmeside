import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import BrowserRouter from "react-router-dom/BrowserRouter";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { styles } from "./styles"
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App';
import Auth from './Auth/Auth';
import {PersistGate} from 'redux-persist/integration/react'
import {persistReducer, persistStore} from 'redux-persist'
import LoadingIndicator from "./common/components/LoadingIndicator";
import storage from "redux-persist/lib/storage";
import reducer from './reducers';
import labels from "./i18n/labels";


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'labels'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducer);

export const auth = new Auth();

export const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<LoadingIndicator/>} persistor={persistStore(store)}>
    <BrowserRouter>
      <MuiThemeProvider theme={styles}>
        <App auth={auth} labels={labels}/>
      </MuiThemeProvider>
    </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
