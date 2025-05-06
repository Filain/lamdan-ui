export interface IloginData {
  email: string;
  password: string;
}

export interface IUser {
  _id: string;
  name?: string | null;
  surname?: string | null;
  email: string;
  password?: string | null;
  role: string;
  isActive: boolean;
  isBanned: boolean;
  inWork: number;
  total: number;
  activation?: string;
  createdAt?: Date;
  updatedAt?: Date;
  lastLogin?: Date;
  __v?: number;
}
