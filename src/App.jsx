import { useContext, useState } from 'react'
import './App.css'
import Sidebar from './Component/Sidebar'
import Player from './Component/Player'
import Display from './Component/Display'
import { Route, Routes } from 'react-router-dom'
import {PlayerContext} from './context/PlayerContext'


function App() {
  const [count, setCount] = useState(0)
  const {audioRef, track} = useContext(PlayerContext)

  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio ref={audioRef} src={track.file}  preload='auto'></audio>
    </div>
  )
}

export default App
