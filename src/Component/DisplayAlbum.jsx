import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'
import { albumsData, assets, songsData } from '@/assets/assets'
import { PlayerContext } from '@/context/PlayerContext'

const DisplayAlbum = () => {
    const {id} = useParams()
    const albumData = albumsData[id];
    const {playWithId} = useContext(PlayerContext)
  return (
    <div >
        <Navbar />
        <div  className={`mt-10 flex gap-8 flex-col  md:flex-row md:items-end  `} >
            <img className='w-48 rounded' src={albumData.image} alt="" />
            <div className='flex flex-col '>
                <p>Playlist</p>
                <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
                <h4>{albumData.desc}</h4>
                <p className='mt-1'>
                    <img src={assets.spotify_logo} className='inline-block w-5' alt="" />
                    <b>Spotify </b>
                    &bull; 1,254,036 likes
                    &bull; <b>50 songs, </b>
                    <span className='inline-block text-[#ffffff83]'>about 2 hours 30 min</span>
                </p>
            </div>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
            <p><b className='mr-4'>#</b>Title</p> 
            <p>Album</p> 
            <p className='hidden sm:block'>Date Added</p>
            <img className='m-auto w-4' src={assets.clock_icon} alt="" />
        </div>
        <hr />
        {
            songsData.map((item, index) => (
                <div onClick={() => playWithId(item.id)} className='grid grid-cols-3 sm:grid-cols-4 p-2 gap-2 text-[#a7a7a7] items-center hover:bg-[#ffffff2b] cursor-pointer ' key={index}> 
                <p className='text-white truncate overflow-hidden whitespace-nowrap w-55'><b className='mr-4 text-[#a7a7a7]'>{item.id + 1}</b>
                <img className='w-10 mr-5 inline ' src={item.image} alt="" />
                {item.name}
                </p>
                <p>{albumData.name}</p>
                <p className='text-[15px] hidden sm:block'>5 days ago</p>
                <p className='text-center text-[15px]'>{item.duration}</p>
                </div>
            ))
        }
    </div>
  )
}

export default DisplayAlbum
