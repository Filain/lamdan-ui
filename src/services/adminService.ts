import { urls } from "@/constants/urls";
import { apiService } from "@/services/apiService";
import { IUser } from "@/services/authService";

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

const adminService = {
  async getStatic(): Promise<IStatic> {
    const { data } = await apiService.get(urls.admin.static);
    return data;
  },
  async getAll(page: string): Promise<IUserResponseData> {
    const { data } = await apiService.get(urls.admin.getAll, { params: { page } });
    return data;
  },
  async create(dto: ICreateUser): Promise<IUser> {
    const { data } = await apiService.post(urls.admin.create, dto);
    return data;
  },
};

export { adminService };
