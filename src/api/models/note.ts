export interface ICreateNoteRequest {
  title: string;
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

export enum SortByEnum {
  Date = 'date',
  Name = 'name',
  Rate = 'rate',
}

export interface INoteRequest {
  search: string;
  categoryId: string;
  sortBy: SortByEnum;
}

export interface IUpdateNoteRequest {
  id: string;
  data: Partial<INote>;
}
