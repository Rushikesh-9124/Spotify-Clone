import { Button } from '@/components/ui/button'
import { PlayerContext } from '@/context/PlayerContext'
import { ArrowLeft, ArrowRight, Download } from 'lucide-react'
import React, { useContext, useState } from 'react'
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom'

const Navbar = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const Navigation = useNavigate()
    const {track} = useContext(PlayerContext)
    const {id} = useParams()
    const path = ['/', `/music/${id ? '': 0}`,'/podcast']
  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
            <ArrowLeft onClick={() => Navigation(-1)} className='hover:bg-white hover:text-black  hover:rounded-full transition-all' />
            <ArrowRight onClick={() => Navigation(+1)} className='hover:bg-white hover:text-black  hover:rounded-full transition-all' />
        </div>
        <div className='flex items-center gap-4'>
            <a href="https://www.spotify.com/in-en/premium/">
            <Button className='rounded-full bg-white h-[30px] text-center pb-7 text-black hover:text-white hover:bg-[#333] hidden md:block cursor-pointer'>Explore Premium</Button>
            </a>
            <a href="https://open.spotify.com/download" >
            <Button className='rounded-full bg-green-600 h-[30px] text-center pb-7 text-black hover:text-white hover:bg-[#333] hidden md:block cursor-pointer'><span className='flex justify-between items-center gap-2'><Download/> Install App</span></Button>
            </a>
            <p className='bg-purple-500 w-8 h-8 text-black flex items-center justify-center rounded-full font-semibold cursor-pointer'>R</p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
            {
                ['All', 'Music', 'Podcast'].map((item, index) => (
                  <NavLink
                  key={index}
                  to={path[index]}
                  className={({ isActive }) =>
                    `list-none px-3 py-1 rounded-2xl cursor-pointer ${
                      isActive ? 'text-black bg-green-600' : 'text-black bg-white'
                    }`
                  }
                >
                  <li onClick={() => setActiveIndex(index)}>
                    {item}
                  </li>
                </NavLink> 
                ))
            }
        </div>
    </>
  )
}

export default Navbar
