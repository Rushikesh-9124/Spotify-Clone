import React, { useEffect, useRef } from 'react'
import {  Routes,Route, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import NotFound from './NotFound'
import { albumsData, assets, songsData } from '@/assets/assets'
import MusicList from './MusicList'

const Display = () => {
    const displayRef = useRef();
    const location = useLocation()
    const isAlbum = location.pathname.includes('album')
    const albumId = isAlbum ? location.pathname.slice(-1) : '';
    const bgColor = albumsData[Number(albumId)].bgColor;

    useEffect(()=>{
        if(isAlbum){
            displayRef.current.style.background = `linear-gradient(${bgColor}, black)`
        }
        else{
            displayRef.current.style.background = `#121212`
        }
    })
  return (
    
    <div ref={displayRef} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
      <Routes>
        <Route path='/' element={<DisplayHome />}/>
        <Route path='/album/:id'  element={<DisplayAlbum />}/>
        <Route path='/music/:id' element={<MusicList />}/>
        <Route  path='*' element={<NotFound />}/>
      </Routes>
    </div>
  )
}

export default Display
