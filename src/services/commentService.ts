import { urls } from "@/constants/urls";
import { IComment } from "@/interfaces/commentInterface";
import { apiService } from "@/services/apiService";

const commentService = {
  async getAll(id: string): Promise<IComment[]> {
    const { data } = await apiService.get(urls.comment.getAll(id));
    return data;
  },

  async create(id: string, dto: { comment: string }): Promise<IComment> {
    const { data } = await apiService.post(urls.comment.post(id), dto);
    return data;
  },
};

export { commentService };
