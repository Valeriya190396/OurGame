
import { Route, Routes } from "react-router-dom";
import RegistrationPage from "../../page/AuthPage/RegistrationPage";
import AuthorizationPage from "../../page/AuthPage/AuthorizationPage";
import CategoryPage from "../../page/CategoryPage/CategoryPage";

const AppRouter = (): JSX.Element => {
  return (
    <div className=" AppRouter">
      <Routes>
        <Route path="/" />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/authorization" element={<AuthorizationPage />} />
        <Route path="/categories" element={<CategoryPage />} />
      </Routes>
    </div>
  );
};
export default AppRouter;
