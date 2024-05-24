
import React from 'react'
import Background from "./components/Background"
import Forground from './components/Forground'
import { motion } from "framer-motion"



function App() {
  return (
   <div className='relative w-full h-screen bg-zinc-800'>
      <Background/>
      <Forground/>
   </div>
  )
}
export default App;

