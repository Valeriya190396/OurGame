import { useSelector } from "react-redux";
import CategoryItem from "../../entities/ui/CategorysItem";
import { RootState, useAppDispatch } from "../../app/store/store";
import './CategoryPage.css'

function CategoryPage(): JSX.Element {
  const { categories } = useSelector((state: RootState) => state.categories);
  const dispatch = useAppDispatch();

  return (
    <>
    <div className="CategoryPage">
      {categories &&
        categories.map((category) => (
          <CategoryItem category={category} key={category.id} />
        ))}
        </div>
    </>
  );
}
export default CategoryPage;
