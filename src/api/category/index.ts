import { api } from '@/api';
import { ICategory, ICategoryRequest, ICreateCategoryRequest, IUpdateCategoryRequest } from '@/api/models/category';
import queryString from 'query-string';

class CategoryApi {
  private baseUrl = 'category';

  create = (data: ICreateCategoryRequest) => api.post<ICategory>(`${this.baseUrl}/`, data);
  findAll = (data: ICategoryRequest) => {
    const search = queryString.stringify(data);
    return api.get<ICategory[]>(`${this.baseUrl}?${search}`);
  };
  findOne = (id: string) => api.get<ICategory>(`${this.baseUrl}/${id}`);
  update = ({ data, id }: IUpdateCategoryRequest) => api.put<ICategory>(`${this.baseUrl}/${id}`, data);
  delete = (id: string) => api.delete(`${this.baseUrl}/${id}`);
}

export const categoryApi = new CategoryApi();
