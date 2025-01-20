import { api } from '@/api';
import { IUserProfile } from '@/api/interfaces/user';

class AuthApi {
  private baseUrl = 'user';

  profile() {
    return api.get<IUserProfile>(`${this.baseUrl}/profile`);
  }
}

export const authApi = new AuthApi();
