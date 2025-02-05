import { AxiosError } from 'axios';

export type IServerError = AxiosError<{
  message: string;
  error: string;
  statusCode: number;
}>;
