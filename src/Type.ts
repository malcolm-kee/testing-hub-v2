import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { INoteState } from './Note/parts/NoteType';

export interface IStore {
  note: INoteState;
}

export type IThunk<CustomAction extends Action, Return = void> = ThunkAction<
  Return,
  IStore,
  void,
  CustomAction
>;
