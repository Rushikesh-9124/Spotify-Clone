import { Play, PlayCircle, PlayIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'


const AlbumItem = ({image, desc, name, id}) => {
  return (
    <Link to={`/album/${id}`}>
        <div className=' min-w-[175px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] relative group'>
          <img className='rounded' src={image} alt="" />
          <p className='font-bold mt-2 mb-1'>{name}</p>
          <p className='text-slate-200 text-sm'>{desc}</p>
          <div className="absolute right-5 bottom-[110px] w-[40px] h-[40px] bg-green-500 rounded-full flex justify-center items-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <Play className="text-black" />
          </div>
        </div>
        
    </Link>
  )
}

export default AlbumItem
