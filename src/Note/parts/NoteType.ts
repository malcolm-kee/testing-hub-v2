export interface INote {
  id: number;
  content: string;
}

export interface INoteState {
  notes: INote[];
  editor: {
    content: string;
  };
}
