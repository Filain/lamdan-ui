import { IUser } from "@/interfaces/authInterface";
import { IGroup } from "@/interfaces/groupInterface";

export interface IFormData {
  group?: string;
  name?: string;
  surname?: string;
  email?: string;
  phone?: string;
  age?: number;
  status?: string;
  sum?: number;
  course?: string;
  already_paid?: number;
  course_format?: string;
  course_type?: string;
  utm?: string;
  msg?: string;
  my?: boolean;
}

export interface IOrderCreate {
  group?: string;
  name?: string;
  surname?: string;
  email?: string;
  phone?: string;
  age?: number;
  status?: string;
  sum?: number;
  course?: string;
  already_paid?: number;
  course_format?: string;
  course_type?: string;
  utm?: string;
  msg?: string;
}

export interface IOrder {
  manager: IUser | null;
  group: IGroup | null;
  comment: string[];
  _id: string;
  id: number;
  name: string;
  surname: string;
  email: string;
  phone: string;
  age: number;
  course: string;
  course_format: string;
  course_type: string;
  sum: number | null;
  already_paid: number | null;
  created_at: string;
  utm: string;
  msg: string | null;
  status: string;
}

export interface IOrderQuery {
  group?: string;
  name?: string;
  surname?: string;
  email?: string;
  phone?: string;
  age?: string;
  status?: string;
  sum?: string;
  course?: string;
  already_paid?: string;
  course_format?: string;
  course_type?: string;
  page?: string;
  limit?: string;
  sort?: string;
  my?: boolean;
}

// my?: boolean; // ДОДАТИ
// sort?: string; // ДОДАТИ
// page?: string; // ДОДАТИ
