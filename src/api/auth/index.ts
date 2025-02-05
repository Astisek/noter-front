import { api } from '@/api';
import { ILoginRequest, ILoginResponse, IRegisterRequest } from '@/api/models/auth';

class AuthApi {
  private baseUrl = 'auth';

  register = (body: IRegisterRequest) => api.post<ILoginResponse>(`${this.baseUrl}/register`, body);
  login = (body: ILoginRequest) => api.post<ILoginResponse>(`${this.baseUrl}/login`, body);
}

export const authApi = new AuthApi();
