import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/index.css'
import { useAppDispatch } from './store/store'
import { Route, Routes } from 'react-router-dom'

function App() {
  const dispatch = useAppDispatch()



  return (
  <Routes>
    <Route path ='/'/>
    <Route path ='/registration'/>
    <Route path ='/authorization'/>
  </Routes>
  )
}

export default App
