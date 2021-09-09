import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import movieReducer from 'containers/client/Home/module/reducer';
import movieDetailReducer from 'containers/client/MovieDetail/module/movieDetailReducer';
import UserAccountReducer from 'containers/admin/UserAccount/Modules/reducer';
import pagePanigationReducer from 'containers/client/Movie/Modules/reducer';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  movieReducer,
  movieDetailReducer,
  UserAccountReducer,
  pagePanigationReducer,
});
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['movieReducer','movieDetailReducer','pagePanigationReducer'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
const persistor = persistStore(store);

export {store,persistor};
