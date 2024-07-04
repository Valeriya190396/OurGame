export type GameLine = {
  id: number;
  gameId: number;
  questId: number;
  statusQuest: boolean;
  Question: {
    id: number;
    catId: number;
    name: string;
    answer: string;
    score: number;
  };
};

export type GameLineId = GameLine["id"];
export type GameLineWithoutId = Omit<GameLine, "id">;
export type GameLineStatusQuest = GameLine["statusQuest"];
// Проверить
