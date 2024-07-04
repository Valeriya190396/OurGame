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
    return response.data.gameLines;
  };

  static updateGameLine = async (obj: {
    id: GameLineId;
    body: GameLineStatusQuest;
  }) => {
    // ПРОВЕРИТЬ
    const response: AxiosResponse<{ message: string; gameLine: GameLine[] }> =
      await axiosInstance.put(`/gameLines/${obj.id}`, obj.body);
    return response.data.gameLine;
  };
}

export default GameLineApi;
