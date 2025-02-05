export interface ICreateCategoryRequest {
  name: string;
}

export class ICategoryRequest {
  search: string;
}

export interface IUpdateCategoryRequest {
  id: string;
  data: Partial<ICreateCategoryRequest>;
}

export interface ICategory {
  name: string;
  id: string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
  noteCount: number;
}
