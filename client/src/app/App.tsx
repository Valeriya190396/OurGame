import "./styles/index.css";
import { RootState, useAppDispatch } from "./store/store";
import { Route, Routes } from "react-router-dom";
import './styles/index.css'
import AppRouter from "./router/AppRouter";
import Navbar from "../widgets/ui/Navbar";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { refreshTokens } from "../entities/users/usersSlice";
import { Loader } from "../widgets/ui/Loader";

function App() {
  const [loading, setLoading] = useState(false)
  const dispatch = useAppDispatch();

  useEffect(() => {
   void dispatch(refreshTokens())

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
