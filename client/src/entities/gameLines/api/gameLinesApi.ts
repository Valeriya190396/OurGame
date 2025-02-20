import { AxiosResponse } from "axios";
import axiosInstance from "../../../services/axiosInstance";
import {
  GameLine,
  GameLineId,
  GameLineStatusQuest,
} from "../types/gameLineTypes";

class GameLineApi {
  static getAllGameLines = async (): Promise<GameLine[]> => {
    const response: AxiosResponse<{ message: string; gameLines: GameLine[] }> =
      await axiosInstance.get("/gameLines");
    console.log(response.data);

    return response.data.gameLines;
  };

  static updateGameLine = async (obj: {
    id: GameLineId;
    body: GameLineStatusQuest;
  }) => {
    // ПРОВЕРИТЬ
    const response: AxiosResponse<{ message: string; gameLine: GameLine }> =
      await axiosInstance.put(`/gameLines/${obj.id}`, {statusQuest: obj.body});
      console.log(response);
      
    return response.data.gameLine;
  };
}

export default GameLineApi;
