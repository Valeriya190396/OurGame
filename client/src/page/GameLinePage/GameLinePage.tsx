import React, { useState } from "react";
import { GameLine } from "../../entities/gameLines/types/gameLineTypes";

import "./GameLinePage.css";

import ModalWindow from "../../shared/ui/Modal/Modal";
import { useAppDispatch } from "../../app/store/store";
import { updateGameLineThunk } from "../../entities/gameLines/gameLinesSlice";

type GameLinePageProps = {
  gameL: GameLine;
};
const GameLinePage = ({ gameL }: GameLinePageProps): JSX.Element => {
  const [active, setActive] = useState<boolean>(false);
  const [newAnswer, setNewAnswer] = useState<string>("");
  const [checkAnsw, setCheckAnsw] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const onHadleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
    setCheckAnsw((prev) => !prev);
    dispatch(updateGameLineThunk({ id: gameL.id, body: gameL.statusQuest }));
    if (
      newAnswer.trim().toLowerCase() ===
      gameL.Question.answer.trim().toLowerCase()
    ) {
      dispatch(updateGameLineThunk({ id: gameL.id, body: gameL.statusQuest }));
      // setCheckAnsw((prev) => !prev)
      // setActive((prev)=>!prev)
    }
  };

  return (
    <div className=" GameLinePage">
      {/* кнопка */}
      {gameL.statusQuest === false ? (
        <button
          className="button_GameLine"
          onClick={() => setActive((prev) => !prev)}
        >
          {gameL.Question.score}
        </button>
      ) : (
        <button className="button_GameLine">{gameL.Question.score}</button>
      )}

      {/* модалка */}
      <ModalWindow active={active} setActive={setActive}>
        <h3>{gameL.Question.name}</h3>
        <form onSubmit={onHadleSubmit}>
          <input
            type="text"
            placeholder="Ваш ответ"
            value={newAnswer}
            onChange={(e) => setNewAnswer(e.target.value)}
          />
          {isOpen === false ? (
            <button type="submit">Ответить</button>
          ) : (
            <button type="button" onClick={() => setActive((prev) => !prev)}>
              Выйти
            </button>
          )}
        </form>

        {checkAnsw && (
          <>
            {newAnswer.trim().toLowerCase() ===
            gameL.Question.answer.trim().toLowerCase() ? (
              <h5>Правильно!</h5>
            ) : (
              <h5>Увы, правильный ответ {gameL.Question.answer}</h5>
            )}
          </>
        )}
      </ModalWindow>
    </div>
  );
};
export default GameLinePage;
