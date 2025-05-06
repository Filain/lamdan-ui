import { urls } from "@/constants/urls";
import { IOrderQuery } from "@/interfaces/orderInterface";
import { apiService } from "@/services/apiService";

const exelService = {
  async getAll(query?: IOrderQuery) {
    // console.log("url", urls.excel.get);
    const response = await apiService.get(urls.excel.get, {
      params: query,
      responseType: "blob",
    });

    const blob = new Blob([response.data], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "orders.xlsx");
    document.body.appendChild(link);
    link.click();

    link.remove();
    window.URL.revokeObjectURL(url);
  },
};

export { exelService };
