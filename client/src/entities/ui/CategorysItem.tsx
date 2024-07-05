import { Category } from "../categories/types/categoryType";



type CategoryItemProps = {
    category: Category;
  };


  function CategoryItem({category}:CategoryItemProps):JSX.Element{



return(
<>
<h1>{category.name}</h1>

</>

)

  }
  export default CategoryItem