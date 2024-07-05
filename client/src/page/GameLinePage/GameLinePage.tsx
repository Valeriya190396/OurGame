import React, { useState } from "react";
import { GameLine } from "../../entities/gameLines/types/gameLineTypes";
import ModalWindow from "../../shared/ui/Modal/Modal";
import { useAppDispatch } from "../../app/store/store";
import { updateGameLineThunk } from "../../entities/gameLines/gameLinesSlice";

type GameLinePageProps = {
  gameline: GameLine;
  answer: string

  
};
const GameLinePage = ({ gameline }: GameLinePageProps): JSX.Element => {
  const [active, setActive] = useState<boolean>(false);
  const [newAnswer, setNewAnswer] = useState<string>('')
  const [checkAnsw, setCheckAnsw] = useState<boolean>(false);
  const dispatch =  useAppDispatch()

const onHadleSubmit =  (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setCheckAnsw((prev) => !prev)
if(newAnswer.trim().toLowerCase() === gameline.Question.answer.trim().toLowerCase()){
    dispatch(updateGameLineThunk({id: gameline.id, body: gameline.statusQuest }))
    // setCheckAnsw((prev) => !prev)
    // setActive((prev)=>!prev)
    
  }
}







  return (
    <div className=" GameLinePage">
      {/* кнопка */}
    <button onClick={()=>setActive((prev)=> !prev)}>
    {gameline.Question.score}
    </button>
      
      {/* модалка */}
      <ModalWindow  active={active} setActive={setActive}>
     <h3>{gameline.Question.name}</h3>
     <form onSubmit={onHadleSubmit}>
      <input type= 'text' placeholder="Ваш ответ" value={newAnswer} onChange={(e)=>setNewAnswer(e.target.value)}/>
      <button type="submit">Ответить</button>
    </form>

    {checkAnsw && (
    <>
    {newAnswer === gameline.Question.answer ? (
      <h5>Правильно!</h5>
    ):(
      <h5>Увы, правильный ответ {gameline.Question.answer}</h5>
    )}
    </>
    )}
      </ModalWindow>
    </div>
  );
};
export default GameLinePage;
