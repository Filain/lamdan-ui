export interface IFormData {
  group: string;
  name: string;
  surname: string;
  email: string;
  phone: string;
  age: string | number;
  status: string;
  sum: string | number;
  already_paid: string | number;
  course: string;
  course_format: string;
  course_type: string;
}

export interface IOrderCreate {
  group: string | null;
  name: string | null;
  surname: string | null;
  email: string | null;
  phone: string | null;
  age: number | null;
  status: string | null;
  sum: number | null;
  course: string | null;
  already_paid: number | null;
  course_format: string | null;
  course_type: string | null;
}
