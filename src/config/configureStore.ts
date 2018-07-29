import { applyMiddleware, combineReducers, createStore, Reducer } from 'redux';
import ReduxThunk from 'redux-thunk';
import { noteReducer } from '../Note/parts/noteReducer';
import { IStore } from '../Type';

const rootReducer: Reducer<IStore> = combineReducers({
  note: noteReducer
});

export const configureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

  return store;
};
