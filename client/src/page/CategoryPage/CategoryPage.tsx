
import { useDispatch, useSelector } from "react-redux";
import CategoryItem from "../../entities/ui/CategorysItem";
import { RootState } from "../../app/store/store";




function CategoryPage(): JSX.Element {
    const { categorys } = useSelector((state: RootState) => state.categorys);
    const dispatch = useDispatch();

return (
    <>
    
    {categorys && categorys.map((category)=>  <CategoryItem   category={category} key={category.id}  />)
}
</>
    
)

}
    export default CategoryPage;
