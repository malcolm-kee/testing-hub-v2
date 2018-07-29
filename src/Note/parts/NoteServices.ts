import { delay, generateId } from '../../utils/helper';
import { INote } from './NoteType';

const generateNotes = (count: number): INote[] => {
  const notes: INote[] = [];

  for (let index = 0; index < count; index++) {
    notes.push({
      id: generateId(),
      content: `Something written on ${new Date().toLocaleTimeString()}`
    });
  }

  return notes;
};

export const NoteServices = {
  getNotes: () => delay(500).then(() => generateNotes(5))
};
