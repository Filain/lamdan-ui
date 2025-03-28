const baseURL = "http://localhost:5001";

const login = "/auth/login";
const logout = "/auth/logout";
const refresh = "/auth/refresh";

const urls = {
  auth: {
    login,
    logout,
    refresh,
  },
};

export { baseURL, urls };
