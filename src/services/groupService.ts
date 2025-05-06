import { urls } from "@/constants/urls";
import { IGroup } from "@/interfaces/groupInterface";
import { apiService } from "@/services/apiService";

const groupService = {
  async getAll(): Promise<IGroup[]> {
    const { data } = await apiService.get(urls.group.getAll);
    return data;
  },
  async post(dto: { group: string }): Promise<IGroup> {
    // console.log(typeof dto);
    const { data } = await apiService.post(urls.group.post, dto);
    return data;
  },
};

export { groupService };
