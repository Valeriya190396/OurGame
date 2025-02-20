import type { AxiosError } from "axios";
import axios from "axios";
import { StoreType } from "../app/store/store";
import { User } from "../entities/users/types/userTypes";



let store: StoreType;

export const injectStore = (_store: StoreType): void => {
  store = _store;
};

const axiosInstance = axios.create({
  baseURL: "/api",
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  if (!config.headers.Authorization) {
    config.headers.Authorization = `Bearer ${
      store?.getState().auth.accessToken
    }`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (res) => res,
  async (err: AxiosError & { config: { sent?: boolean; url?: string } }) => {
    const prevRequest = err.config; // необходимо чтобы понять что это второй запрос
    // предотвращает зацикливание запроса если в cookie нет refresh либо истек срок его действия
    if (prevRequest.url?.endsWith("/tokens/refresh")) {
      return Promise.reject(err);
    }
    if (err.response?.status === 403 && !prevRequest.sent) {
      prevRequest.sent = true;
      const {
        data: { accessToken },
      } = await axiosInstance<{
        message: "success";
        user: User; // Подтянуть
        accessToken: string;
      }>("/tokens/refresh");
      prevRequest.headers.Authorization = `Bearer ${accessToken}`;
      return axiosInstance(prevRequest);
    }
    return Promise.reject(err);
  }
);

export default axiosInstance;
