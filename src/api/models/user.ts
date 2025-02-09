export interface IUserProfile {
  email: string;
  username: string;
  avatar_url: string;
  created_at: string;
  updated_at: string;
  deleted_at: null;
}

export interface IUpdateAvatarResponse {
  url: string;
}
