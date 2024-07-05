import React from "react";
import { GameLine } from "../../entities/gameLines/types/gameLineTypes";
import { CategoryId } from "../../entities/categories/types/categoryType";

type GameLinePageProps = {
  gameline: GameLine;
};
const GameLinePage = ({ gameline }: GameLinePageProps): JSX.Element => {
  return (
    <div className=" GameLinePage">
      {/* кнопка */}
    
      {gameline.Question.name}
      {/* модалка */}
    </div>
  );
};
export default GameLinePage;
