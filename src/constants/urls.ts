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
  comment: {
    getAll: (id: string) => `/comment/${id}`,
    post: (id: string) => `/comment/${id}`,
  },
  group: {
    getAll: "/group",
    post: "/group",
  },

  admin: {
    getAll: "/admin",
    static: "/admin/statistics",
    create: "/admin/create",
    setPassword: "/admin/set-password",
    getActivationToken: (id: string) => `/admin/get-active/${id}`,
    ban: (id: string) => `/admin/ban/${id}`,
    unban: (id: string) => `/admin/unban/${id}`,
  },
};

export { baseURL, urls };
