
import { Route, Routes } from "react-router-dom";
import React from 'react';
import GetAll from '../../page/AuthPage/GETALL';
import CategoryPage from "../../page/CategoryPage/CategoryPage";

const AppRouter = (): JSX.Element => {
  return (
    <div className=" AppRouter">
      <Routes>
        <Route path="/" />
        <Route path ='/authregistration' element={<GetAll/>}/>
        <Route path="/categories" element={<CategoryPage />} />
      </Routes>
    </div>
  );
};
export default AppRouter;

