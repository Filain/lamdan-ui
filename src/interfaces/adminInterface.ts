import { IUser } from "@/interfaces/authInterface";

export interface IStatic {
  total: number;
  agree: number;
  inWork: number;
  disagree: number;
  newOrders: number;
}

export interface IUserResponseData {
  data: IUser[];
  total: number;
}

export interface ICreateUser {
  name: string;
  surname: string;
  email: string;
}
