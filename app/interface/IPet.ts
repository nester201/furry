export type PetSize = 'small' | 'medium' | 'large';

export interface IPet {
  id: string;
  userId: string;
  petName: string;
  speciesPet: string;
  breed: string;
  size: PetSize;
  gender: string;
  dateBirth: string;
  avatar: string;
}
