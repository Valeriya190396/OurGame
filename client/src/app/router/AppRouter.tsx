import { Route, Routes } from "react-router-dom";
import GetAll from '../../page/AuthPage/GETALL';
import CategoryPage from "../../page/CategoryPage/CategoryPage";


const AppRouter = (): JSX.Element => {
  return (
    <div className=" AppRouter">
      <Routes>
        <Route path ='/' element={<GetAll/>}/>
        <Route path="/categories" element={<CategoryPage />} />
      </Routes>
    </div>
  );
};
export default AppRouter;

