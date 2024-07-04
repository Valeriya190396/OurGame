export type GameLine = {
  id: number;
  gameId: number;
  questId: number;
  statusQuest: boolean;
};

export type GameLineId = GameLine["id"];
export type GameLineWithoutId = Omit<GameLine, "id">; // Проверить
