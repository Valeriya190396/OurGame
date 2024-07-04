import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GetAll from '../../page/AuthPage/GETALL';


const AppRouter= (): JSX.Element =>{
return (
<div className=' AppRouter'>
<Routes>
    <Route path ='/authregistration' element={<GetAll/>}/>
  </Routes>
 </div>
 );

}
export default AppRouter
