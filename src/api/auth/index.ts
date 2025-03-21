import { api } from '@/api';
import { ILoginRequest, ILoginResponse, IRegisterEmailRequest, IRegisterFinalRequest } from '@/api/models/auth';

class AuthApi {
  private baseUrl = 'auth';

  registerEmail = (body: IRegisterEmailRequest) => api.post(`${this.baseUrl}/register-email`, body);
  registerFinal = (body: IRegisterFinalRequest) => api.post<ILoginResponse>(`${this.baseUrl}/register-final`, body);
  login = (body: ILoginRequest) => api.post<ILoginResponse>(`${this.baseUrl}/login`, body);
}

export const authApi = new AuthApi();
