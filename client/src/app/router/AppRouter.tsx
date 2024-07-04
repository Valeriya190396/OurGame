import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RegistrationPage from '../../page/AuthPage/RegistrationPage';
import AuthorizationPage from '../../page/AuthPage/AuthorizationPage';


const AppRouter= (): JSX.Element =>{
return (
<div className=' AppRouter'>
<Routes>
    <Route path ='/'/>
    <Route path ='/registration' element={<RegistrationPage />}/>
    <Route path ='/authorization' element={<AuthorizationPage />}/>
  </Routes>
 </div>
 );

}
export default AppRouter
