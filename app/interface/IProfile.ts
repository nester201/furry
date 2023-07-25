import { IUser } from '@app/interface/IUser';

export interface IProfile extends IUser {
  _id: string;
  displayName: string;
  docId: string;
  city: string;
  phoneNumber: number;
  gender: string;
}
