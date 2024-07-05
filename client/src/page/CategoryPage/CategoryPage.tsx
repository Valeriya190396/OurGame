import { useDispatch, useSelector } from "react-redux";
import CategoryItem from "../../entities/ui/CategorysItem";
import { RootState } from "../../app/store/store";

function CategoryPage(): JSX.Element {
  const { categories } = useSelector((state: RootState) => state.categories);
  const dispatch = useDispatch();

  return (
    <>
      {categories &&
        categories.map((category) => (
          <CategoryItem category={category} key={category.id} />
        ))}
        
    </>
  );
}
export default CategoryPage;
