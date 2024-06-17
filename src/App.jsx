import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Posts from './components/posts/Posts'

function App() {
 

  return (
    <>
      <Navbar/>
     <Posts/>
    </>
  )
}

export default App
