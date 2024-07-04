
import './styles/index.css'
import { useAppDispatch } from './store/store'
import { Route, Routes } from 'react-router-dom'
import AppRouter from './router/AppRouter'

function App() {
  const dispatch = useAppDispatch()



  return (
    <>
  <AppRouter />
  </>
  )
}

export default App
