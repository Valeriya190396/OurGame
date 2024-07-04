import "./styles/index.css";
import { useAppDispatch } from "./store/store";
import { Route, Routes } from "react-router-dom";
import './styles/index.css'
import AppRouter from "./router/AppRouter";
import Navbar from "../widgets/ui/Navbar";

function App() {
  const dispatch = useAppDispatch();

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
