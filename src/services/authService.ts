import { urls } from "@/constants/urls";
import { apiService } from "@/services/apiService";

const authService = {
  async login(email: string, password: string) {
    const { data } = await apiService.post(urls.auth.login, { email, password });
    return data;
  },
};

export { authService };
