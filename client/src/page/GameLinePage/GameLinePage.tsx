import React, { useState } from "react";
import { GameLine } from "../../entities/gameLines/types/gameLineTypes";
import './GameLinePage.css'

import ModalWindow from "../../shared/ui/Modal/Modal";
import { useAppDispatch } from "../../app/store/store";
import { updateGameLineThunk } from "../../entities/gameLines/gameLinesSlice";

type GameLinePageProps = {
  gameL: GameLine;
  answer: string

  
};
const GameLinePage = ({ gameL }: GameLinePageProps): JSX.Element => {
  const [active, setActive] = useState<boolean>(false);
  const [newAnswer, setNewAnswer] = useState<string>('')
  const [checkAnsw, setCheckAnsw] = useState<boolean>(false);
  const dispatch =  useAppDispatch()

const onHadleSubmit =  (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setCheckAnsw((prev) => !prev)
if(newAnswer.trim().toLowerCase() === gameL.Question.answer.trim().toLowerCase()){
    dispatch(updateGameLineThunk({id: gameL.id, body: gameL.statusQuest }))
    // setCheckAnsw((prev) => !prev)
    // setActive((prev)=>!prev)
    
  }
}







  return (
    <div className=" GameLinePage">
      {/* кнопка */}
    <button className="button_GameLine" onClick={()=>setActive((prev)=> !prev)}>
    {gameL.Question.score}
    </button>
      


      {/* модалка */}
      <ModalWindow  active={active} setActive={setActive}>
     <h3>{gameL.Question.name}</h3>
     <form onSubmit={onHadleSubmit}>
      <input type= 'text' placeholder="Ваш ответ" value={newAnswer} onChange={(e)=>setNewAnswer(e.target.value)}/>
      <button type="submit">Ответить</button>
    </form>

    {checkAnsw && (
    <>
    {newAnswer === gameL.Question.answer ? (
      <h5>Правильно!</h5>
    ):(
      <h5>Увы, правильный ответ {gameL.Question.answer}</h5>
    )}
    </>
    )}
      </ModalWindow>
    </div>
  );
};
export default GameLinePage;
