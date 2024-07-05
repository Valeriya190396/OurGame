import "./styles/index.css";
import { useAppDispatch } from "./store/store";
import "./styles/index.css";
import AppRouter from "./router/AppRouter";
import Navbar from "../widgets/ui/Navbar";
import { useEffect } from "react";
import { categoriesThunk } from "../entities/categories/categoriesSlice";
import { getGameLinesThunk } from "../entities/gameLines/gameLinesSlice";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(categoriesThunk());
    dispatch(getGameLinesThunk())
  }, []);

  return (
    <>
      <div className="app">
        <Navbar />
        <AppRouter />
      </div>
    </>
  );
}

export default App;
