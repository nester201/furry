import { IUser } from '@app/interface/IUser';

export interface IAuthFormData extends Pick<IUser, 'email' | 'password'> {}

export enum EnumSecureStore {
  ACCESS_TOKEN = 'accessToken',
  REFRESH_TOKEN = 'refreshToken',
}

export enum EnumAsyncStorage {
  USER = 'user',
}

export interface ITokens {
  jwt: string;
}

export interface IAuthResponse extends ITokens {
  user: IUser;
}
