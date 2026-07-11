import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddCourse from './Components/AddCourse'
import ViewCourse from './Components/ViewCourse'
import Navigation from './Components/Navigation'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddCourse/>}/>
        <Route path='/view' element={<ViewCourse/>}/>
       
        </Routes></BrowserRouter>
      
    </>
  )
}

export default App
