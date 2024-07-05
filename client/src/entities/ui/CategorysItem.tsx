import {useSelector } from "react-redux";
import { Category } from "../categories/types/categoryType";
import { RootState, useAppDispatch } from "../../app/store/store";
import GameLinePage from "../../page/GameLinePage/GameLinePage";
import './CategoryItem.css'

type CategoriesItemProps = {
  category: Category;
};

function CategoryItem({ category }: CategoriesItemProps): JSX.Element {
  const { gameLines } = useSelector((state: RootState) => state.gameLines);
  const dispatch = useAppDispatch();


  return (
    <>
    <div className="CategoryItem">
      <div className="CategoryItem_h1"><h1>{category.name}</h1>
      </div>
      <div className="top">
      {gameLines &&
        gameLines
          .filter((gameLine) => +gameLine.Question.catId === +category.id)
          .map((gameL) => <GameLinePage gameL={gameL} key={gameL.id} />)}
          </div>
    </div>
    </>
  );
}
export default CategoryItem;
