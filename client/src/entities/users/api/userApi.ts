import { AxiosResponse } from "axios";
import axiosInstance from "../../../services/axiosInstance";
import { User, UserWithoutId, UserWithoutName } from "../types/userTypes";

export type UserType = {
  message: "success";
  accessToken: string;
  user: User;
};

class UserApi {
  static registration = async (body: UserWithoutId): Promise<UserType> => {
    try {
      const response: AxiosResponse<UserType> = await axiosInstance.post(
        "/auth/registration",
        body
      );
      console.log(response);

      return response.data;
    } catch (error) {
      throw new Error("no success");
    }
  };

  static authorization = async (body: UserWithoutName): Promise<UserType> => {
    try {
      const response: AxiosResponse<UserType> = await axiosInstance.post(
        "/auth/authorization",
        body
      );
      return response.data;
    } catch (error) {
      throw new Error("no success");
    }
  };

  static refreshTokens = async (): Promise<UserType> => {
    try {
      console.log(222222222222);

      const response: AxiosResponse<UserType> = await axiosInstance.get(
        "/tokens/refresh"
      );
      console.log(111111111111, response.data);

      return response.data;
    } catch (error) {
      throw new Error("no success");
    }
  };

  static logout = async (): Promise<{ message: "success" }> => {
    try {
      const response: AxiosResponse<{ message: "success" }> =
        await axiosInstance.get("/auth/logout");
      return response.data;
    } catch (error) {
      throw new Error("no success");
    }
  };
}

export default UserApi;
