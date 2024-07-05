import axios, { AxiosResponse } from "axios";
import { Category } from "../types/categoryType";




const categoryRequest = axios.create({
    baseURL: '/api/categorys',
  });


  class CartegoryApi {

    static getAllCategory = async (): Promise<Category[]> =>{
        try {

            const response: AxiosResponse<{message:'success'; categorys: Category[]}> =
            await categoryRequest.get('/');
            return response.data.categorys
            
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