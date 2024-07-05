import { useDispatch, useSelector } from "react-redux";
import { Category } from "../categories/types/categoryType";
import { RootState, useAppDispatch } from "../../app/store/store";
import GameLinePage from "../../page/GameLinePage/GameLinePage";

type CategoryItemProps = {
  category: Category;
};

function CategoryItem({ category }: CategoryItemProps): JSX.Element {
  const { gameLines } = useSelector((state: RootState) => state.gameLines);
  const dispatch = useAppDispatch();
  console.log(gameLines);

  return (
    <>
      <h1>{category.name}</h1>
      {gameLines &&
        gameLines
          .filter((gameLine) => gameLine.Question.catId === category.id)
          .map((gameL) => <GameLinePage gameline={gameL} key={gameL.id} />)}
    </>
  );
}
export default CategoryItem;
