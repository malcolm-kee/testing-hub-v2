import { NoteAction } from './noteAction';
import { INoteState } from './NoteType';

export const noteReducer = (
  state: INoteState = DEFAULT_STATE,
  action: NoteAction
): INoteState => {
  switch (action.type) {
    case 'Note/SetNotes':
      return {
        ...state,
        notes: action.payload
      };

    case 'Note/AddNote':
      return {
        ...state,
        notes: state.notes.concat(action.payload)
      };

    case 'Note/UpdateNote':
      return {
        ...state,
        notes: state.notes.map(
          note => (note.id === action.payload.id ? action.payload : note)
        )
      };

    case 'Note/DeleteNote':
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== action.payload)
      };

    case 'Note/SetEditorContent':
      return {
        ...state,
        editor: {
          ...state.editor,
          content: action.payload
        }
      };

    case 'Note/ClearEditor':
      return {
        ...state,
        editor: DEFAULT_STATE.editor
      };

    default:
      return state;
  }
};

const DEFAULT_STATE: INoteState = {
  notes: [],
  editor: {
    content: ''
  }
};
