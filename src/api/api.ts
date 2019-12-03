import { baseAxiosClient } from "./";

/**
 * An API for the Ke-Taxi.
 *
 *  login
 *    A function responsible for authenticating the user.
 *
 *  logout
 *    A function responsible for logging out the currently logged in user.
 */
export default {
  login: async (credentials: { email: string; password: string }) => {
    return baseAxiosClient().post("/auth/login", {
      email: credentials.email,
      password: credentials.password
    });
  },

  logout: async () => {
    return baseAxiosClient().post("/auth/logout", {});
  }
};
