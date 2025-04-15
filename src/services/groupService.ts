import { urls } from "@/constants/urls";
import { apiService } from "@/services/apiService";

export interface IGroup {
  _id: string;
  group: string;
}

const groupService = {
  async getAll(): Promise<IGroup[]> {
    const { data } = await apiService.get(urls.group.getAll);
    return data;
  },
};

export { groupService };
