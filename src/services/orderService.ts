import { urls } from "@/constants/urls";
import { apiService } from "@/services/apiService";

export interface IOrderResponseData {
  data: IOrder[];
  total: number;
}

export interface IOrder {
  manager: string | null;
  group: string | null;
  comment: string[];
  _id: string;
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
  status: string | null;
}

interface IOrderQuery {
  page?: string;
  limit?: string;
  sort?: string;
  name?: string;
  surname?: string;
  email?: string;
  phone?: string;
  age?: string;
  course?: string;
  course_format?: string;
  course_type?: string;
  status?: string;
  group?: string;
  my?: string;
}

const orderService = {
  async getAll(query?: IOrderQuery): Promise<IOrderResponseData> {
    const { data } = await apiService.get(urls.order.getAll, { params: query });
    return data;
  },

  async getOne(id: string): Promise<IOrder> {
    const { data } = await apiService.get(urls.order.getOne(id));
    return data;
  },

  async create(dto: IOrder): Promise<IOrder> {
    const { data } = await apiService.post(urls.order.post, dto);
    return data;
  },

  async update(id: string, dto: IOrder): Promise<IOrder> {
    const { data } = await apiService.patch(urls.order.patch(id), dto);
    return data;
  },

  async delete(id: string): Promise<IOrder> {
    const { data } = await apiService.delete(urls.order.delete(id));
    return data;
  },
};

export { orderService };
