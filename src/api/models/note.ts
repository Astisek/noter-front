export interface ICreateNoteRequest {
  content: string;
  title: string;
  rate: number;
  categoryId: string;
}

export interface INote {
  id: string;
  content: string;
  title: string;
  rate: number;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}

export interface INoteRequest {
  search: string;
  categoryId: string;
  sortBy: 'date' | 'name' | 'rate';
}

export interface IUpdateNoteRequest {
  id: string;
  data: Partial<INote>;
}
