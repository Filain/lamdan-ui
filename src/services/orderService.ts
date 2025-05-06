import { urls } from "@/constants/urls";
import { IOrder, IOrderCreate, IOrderQuery } from "@/interfaces/orderInterface";
import { apiService } from "@/services/apiService";

export interface IOrderResponseData {
  data: IOrder[];
  total: number;
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

  async create(dto: IOrderCreate): Promise<IOrder> {
    const { data } = await apiService.post(urls.order.post, dto);
    return data;
  },

  async update(id: string, dto: IOrderCreate): Promise<IOrder> {
    const { data } = await apiService.patch(urls.order.patch(id), dto);
    return data;
  },

  async delete(id: string): Promise<IOrder> {
    const { data } = await apiService.delete(urls.order.delete(id));
    return data;
  },
};

export { orderService };
