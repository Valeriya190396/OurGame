import "./styles/index.css";

import {RootState, useAppDispatch } from "./store/store";
import './styles/index.css'
import AppRouter from "./router/AppRouter";
import Navbar from "../widgets/ui/Navbar";
import { useEffect, useState } from "react";
import { refreshTokens } from "../entities/users/usersSlice";
import { Loader } from "../widgets/ui/Loader";
import { getGameLinesThunk } from "../entities/gameLines/gameLinesSlice";
import { categoriesThunk } from "../entities/categories/categoriesSlice";
import { useSelector } from "react-redux";



function App() {
  const [loading, setLoading] = useState(false)
  const dispatch = useAppDispatch();
  const { user } = useSelector((state: RootState) => state.auth);
  console.log(user);
  

  useEffect(() => {

   void dispatch(refreshTokens())
   void dispatch(categoriesThunk());
   void dispatch(getGameLinesThunk())
    const id = setTimeout(() => {
      setLoading(true)
    }, 2000)
    return () => clearTimeout(id)
  }, [dispatch])

  return (
    <>
    {loading ? (<div className="app">
    <Navbar />
      <AppRouter />
      </div>
  ) : (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    <Loader />
    </div>
  )}
    </>
  );
}

export default App;
