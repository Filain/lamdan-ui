import { urls } from "@/constants/urls";
import { IloginData, IUser } from "@/interfaces/authInterface";
import { apiService } from "@/services/apiService";

const authService = {
  async login(dto: IloginData): Promise<IUser> {
    const { data } = await apiService.post(urls.auth.login, { email: dto.email, password: dto.password });
    return data;
  },
  async me(): Promise<IUser> {
    const { data } = await apiService.get(urls.auth.me);
    return data;
  },
  async logout() {
    await apiService.post(urls.auth.logout);
    return true;
  },
  async refresh() {
    const { data } = await apiService.post(urls.auth.refresh);
    // console.log(data);
    return data;
  },
};

export { authService };
