import { api } from '@/api';
import { ILoginRequest, ILoginResponse, IRegisterRequest } from '@/api/interfaces/auth';

class AuthApi {
  private baseUrl = 'auth';

  register(body: IRegisterRequest) {
    return api.post<ILoginResponse>(`${this.baseUrl}/register`, body);
  }
  login(body: ILoginRequest) {
    return api.post<ILoginResponse>(`${this.baseUrl}/login`, body);
  }
}

export const authApi = new AuthApi();
