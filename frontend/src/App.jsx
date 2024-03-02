import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './Components/Main/Main'
import Sidebar from './Components/Sidebar/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className=' w-full h-screen flex'>
      <Sidebar/>
     <Main/>
     </div>

    </>
  )
}

export default App
