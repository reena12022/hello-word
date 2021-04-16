
 import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware,combineReducers } from 'redux';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk'
// Imports: Redux
import {signupReducer,pageListReducer} from '../reducer/index'
// Middleware: Redux Persist Config
const persistConfig = {
  // Root
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: [
    'pageList',
  ],
  // Blacklist (Don't Save Specific Reducers)

};
const rootReducer = combineReducers(
  { pageList: pageListReducer ,
    signup:signupReducer
  }
  );
// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);
// Redux: Store
const middleware=applyMiddleware(thunk,logger);
const store=createStore(persistedReducer,middleware)
// Middleware: Redux Persist Persister
let persistor = persistStore(store);
// Exports
export {
  store,
  persistor,
};