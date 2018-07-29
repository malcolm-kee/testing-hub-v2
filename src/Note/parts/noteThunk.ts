import { IThunk } from '../../Type';
import { NoteAction, NoteActionCreator } from './noteAction';
import { NoteServices } from './NoteServices';

export const NoteThunkCreator = {
  init: (): IThunk<NoteAction> => dispatch => {
    NoteServices.getNotes().then(notes =>
      dispatch(NoteActionCreator.SetNotes(notes))
    );
  }
};
