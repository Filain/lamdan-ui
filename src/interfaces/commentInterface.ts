import { IUser } from "@/interfaces/authInterface";

export interface IComment {
  _id?: string;
  comment: string;
  order?: string;
  commentedBy?: IUser;
  createdAt?: Date;
  updatedAt?: Date;
  __v?: number;
}
