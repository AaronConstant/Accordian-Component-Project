// import { useState } from 'react'
import './App.css'
import Accordian from './components/Accordian/Accordian'
import data from '/Users/eliwills/Desktop/Pursuit/codeCampProjects/Accordian-Component-Project/AccordianProject/src/data.js'
function App() {


  return (
    <div className='App'>
      <Accordian data = { data } />
    </div>
  )
}

export default App
