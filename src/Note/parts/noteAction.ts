import { generateId } from '../../utils/helper';
import { INote } from './NoteType';

export type NoteAction =
  | { type: 'Note/SetNotes'; payload: INote[] }
  | { type: 'Note/AddNote'; payload: { id: number; content: string } }
  | { type: 'Note/UpdateNote'; payload: { id: number; content: string } }
  | { type: 'Note/DeleteNote'; payload: number }
  | { type: 'Note/SetEditorContent'; payload: string }
  | { type: 'Note/ClearEditor' };

export const NoteActionCreator = {
  SetNotes: (notes: INote[]): NoteAction => ({
    type: 'Note/SetNotes',
    payload: notes
  }),
  AddNote: (content: string): NoteAction => ({
    type: 'Note/AddNote',
    payload: { content, id: generateId() }
  }),
  UpdateNote: (id: number, content: string): NoteAction => ({
    type: 'Note/UpdateNote',
    payload: { id, content }
  }),
  DeleteNote: (id: number): NoteAction => ({
    type: 'Note/DeleteNote',
    payload: id
  }),
  SetEditorContent: (content: string): NoteAction => ({
    type: 'Note/SetEditorContent',
    payload: content
  }),
  ClearEditor: (): NoteAction => ({
    type: 'Note/ClearEditor'
  })
};
