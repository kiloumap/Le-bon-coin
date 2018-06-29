export interface User {
  _id?: string;
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserState {
  readonly user: User[];
}
