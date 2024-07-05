import  { AxiosResponse } from "axios";
import { Category } from "../types/categoryType";
import axiosInstance from "../../../services/axiosInstance";





  class CartegoryApi {

    static getAllCategories = async (): Promise<Category[]> =>{
        try {

            const response: AxiosResponse<{message:'success'; categories: Category[]}> =
            await axiosInstance.get('/categories');
            return response.data.categories
            
        } catch (error) {
            if (error) {
                // любая обработка ошибок
                throw new Error('no success');
              } else {
                throw new Error('no success');
              }
        }
    }



  }
  export default CartegoryApi