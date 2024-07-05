import React, { useState } from "react";
import { GameLine } from "../../entities/gameLines/types/gameLineTypes";


type GameLinePageProps = {
    gameL: GameLine;
};
const GameLinePage = ({ gameL }: GameLinePageProps): JSX.Element => {
    const [modal, isModal] = useState(false)

  return (
    <div className=" GameLinePage">
      {/* кнопка */}
    <button>{gameL.Question.score}</button>

      {/* модалка */}
    </div>
  );
};
export default GameLinePage;
