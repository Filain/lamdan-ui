const baseURL = "http://localhost:5001";

const urls = {
  auth: {
    login: "/auth/login",
    logout: "/auth/logout",
    refresh: "/auth/refresh",
    me: "/auth/me",
  },
  order: {
    getAll: "/order",
    post: "/order",
    getOne: (id: string) => `/order/${id}`,
    patch: (id: string) => `/order/${id}`,
    delete: (id: string) => `/order/${id}`,
  },
  excel: {
    get: "/exel",
  },
};

export { baseURL, urls };
