import { combineReducers } from 'redux';
import appSlice from './app/appSlice';

const rootReducer = combineReducers({
  app: appSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
