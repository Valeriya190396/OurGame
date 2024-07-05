import React, { useState } from "react";
import { GameLine } from "../../entities/gameLines/types/gameLineTypes";
import './GameLinePage.css'


type GameLinePageProps = {
    gameL: GameLine;
};
const GameLinePage = ({ gameL }: GameLinePageProps): JSX.Element => {
    const [modal, isModal] = useState(false)

  return (
    <div className=" GameLinePage">
      {/* кнопка */}
    <button className="button_GameLine">100</button>

      {/* модалка */}
    </div>
  );
};
export default GameLinePage;
