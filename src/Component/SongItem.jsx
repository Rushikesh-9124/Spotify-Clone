import { PlayerContext } from '@/context/PlayerContext'
import { Play } from 'lucide-react'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

const SongItem = ({name, image, desc, id}) => {
  const {playWithId} = useContext(PlayerContext)
  return (
    <div className='relative group'>
    <Link to={`/music/${id}`} >
        <div className='min-w-[175px] p-2 px-3 rounded cursor-pointer  transition-all  hover:bg-[#ffffff26] '>
        <img src={image} alt="" />
        <p className='font-bold mt-2 mb-1'>{name}</p>
        <p className='text-slate-200 text-sm mt-2 mb-1'>{desc}</p>
        </div>
    </Link>
    <div onClick={() => playWithId(id)} className="z-100 absolute right-5 bottom-[110px] w-[40px] h-[40px] bg-green-500 rounded-full flex justify-center items-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
      <Play className="text-black" />
    </div>
    </div>
  )
}

export default SongItem
