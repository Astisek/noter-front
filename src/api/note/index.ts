import { api } from '@/api';
import { ICreateNoteRequest, INote, INoteRequest, IUpdateNoteRequest } from '@/api/models/note';
import queryString from 'query-string';

class NoteApi {
  private baseUrl = 'note';

  create = (data: ICreateNoteRequest) => api.post<INote>(this.baseUrl, data);
  findAll = (query: INoteRequest) => {
    const search = queryString.stringify(query);
    return api.get<INote[]>(`${this.baseUrl}?${search}`);
  };
  update = ({ data, id }: IUpdateNoteRequest) => api.put(`${this.baseUrl}/${id}`, data);
  delete = (id: string) => api.delete(`${this.baseUrl}/${id}`);
}

export const noteApi = new NoteApi();
