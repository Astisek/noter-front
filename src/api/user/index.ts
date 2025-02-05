import { api } from '@/api';
import { IUserProfile } from '@/api/models/user';
import { AxiosRequestConfig } from 'axios';

class UserApi {
  private baseUrl = 'user';

  profile = (config?: AxiosRequestConfig) => api.get<IUserProfile>(`${this.baseUrl}/profile`, config);
}

export const userApi = new UserApi();
