import { AxiosResponse } from "axios";
import axiosInstance from "../../../services/axiosInstance"
import { User, UserWithoutId, UserWithoutName } from "../types/userTypes";


export type UserType = {
    message: 'success';
    accessToken: string;
    user: User;
}

class UserApi {
    static registration = async (body:UserWithoutId): Promise<UserType> => {
        try {
            const response: AxiosResponse<UserType> = await axiosInstance.post('/auth/registration', body)
                return response.data
        } catch (error) {
            throw new Error('no success')
        }
    }

    static authorization = async (body:UserWithoutName):Promise<UserType> => {
        try {
            const response: AxiosResponse<UserType> = await axiosInstance.post('/auth/authorization', body)
                return response.data
        } catch (error) {
            throw new Error('no success')
        }
    }

    static refreshTokens = async (): Promise<UserType> => {
        try {
            const response: AxiosResponse<UserType> = await axiosInstance.get('/tokens/refresh')
            return response.data
        } catch (error) {
            throw new Error('no success')
        }
    }

    static logout = async ():Promise<{message: 'success'}> => {
        try {
            const response: AxiosResponse<{message: 'success'}> = await axiosInstance.get('/auth/logout')
        return response.data
        } catch (error) {
            throw new Error('no success')
        }
    }
}

export default UserApi