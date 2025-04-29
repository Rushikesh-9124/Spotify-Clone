import React, { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '@/assets/assets'
import { PlayerContext } from '@/context/PlayerContext'

const MusicList = () => {
  const {id} = useParams()
  const songData = songsData[id]
  console.log(songData)
  console.log(id)
  const {setTrack} = useContext(PlayerContext)
  const {playWithId} = useContext(PlayerContext)
  return (
    <div>
      <Navbar />
      <div>
        <div className='max-w-[100%] mt-10 flex justify-around flex-col gap-2 sm:flex-row'>
          <img className='w-[300px] rounded-lg shadow-md' style={{boxShadow : '1px 2px 3px white'}} src={songData.image} alt="Song Image" />
            <div className='flex flex-col justify-center items-center sm:pr-50'>
            <div  className={`mt-10 flex gap-8 flex-col  md:flex-row md:items-end  `} >
              <div className='flex flex-col '>
                  <p>Song</p>
                  <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{songData.name}</h2>
                  <h4>{songData.desc}</h4>
                  <p className='mt-1  items-center gap-2 hidden sm:flex'>
                      <img src={assets.spotify_logo} className='inline-block w-5' alt="" />
                      <b> Spotify </b>
                      &bull; 1,254,036 likes
                      &bull; <b>50 songs,&nbsp; </b>
                      <span className='inline-block text-[#ffffff83]'>about {songData.duration} minutes</span>
                  </p>
              </div>
          </div>
        </div>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
            <p><b className='mr-4'>#</b>Title</p> 
            <p>Album</p> 
            <p className='hidden sm:block'>Date Added</p>
            <img className='m-auto w-4' src={assets.clock_icon} alt="" />
        </div>
        <div onClick={() => playWithId(id)} className='grid grid-cols-3 sm:grid-cols-4 p-2 gap-2 text-[#a7a7a7] items-center hover:bg-[#ffffff2b] cursor-pointer  rounded-lg' > 
                <p  className='text-white'><b className='mr-4 text-[#a7a7a7]'>1</b>
                <img className='w-10 mr-5 inline ' src={songData.image} alt="" />
                {songData?.name}
                </p>
                <p>{albumsData[id]?.name}</p>
                <p className='text-[15px] hidden sm:block'>5 days ago</p>
                <p className='text-center text-[15px]'>{songData.duration}</p>
                </div>
      </div>
    </div>
  )
}

export default MusicList
