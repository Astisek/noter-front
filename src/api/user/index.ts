import { api } from '@/api';
import { IUpdateAvatarResponse, IUserProfile } from '@/api/models/user';
import { AxiosRequestConfig } from 'axios';

class UserApi {
  private baseUrl = 'user';

  profile = (config?: AxiosRequestConfig) => api.get<IUserProfile>(`${this.baseUrl}/profile`, config);
  changeAvatar = (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    return api.post<IUpdateAvatarResponse>(`${this.baseUrl}/change-avatar`, formData);
  };
}

export const userApi = new UserApi();
