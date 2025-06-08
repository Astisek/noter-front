export interface IRegisterEmailRequest {
  email: string;
  token: string;
}

export interface IRegisterFinalRequest {
  username: string;
  email: string;
  password: string;
  token: string;
}

export interface ILoginRequest {
  email: string;
  password: string;
  token: string;
}

export interface ILoginResponse {
  access_token: string;
}
