import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import{Routes,Route} from 'react-router-dom'
import Post from './comp/Post '
import Updeat from './comp/Updeat'

function App() {

  return (
    <div className="App">
     
     <Routes>

      <Route path="/" element={<Post/>}></Route>
      <Route path="/updeat" element={<Updeat/>}></Route>


     </Routes>
    </div>
  )
}

export default App
