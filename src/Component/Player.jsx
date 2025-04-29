import React, { useContext, useState } from 'react'
import { songsData } from '@/assets/assets'
import { ArrowDownAZ, FileStack, Maximize, Maximize2, Mic, Mic2, Pause, Play, PlayIcon, PlaySquare, Repeat, Shuffle, SkipBack, SkipForward, Speaker, TvMinimalPlay, TvMinimalPlayIcon, Volume, Volume1, Volume2, ZoomInIcon } from 'lucide-react'
import { Slider } from '@radix-ui/react-slider'
import { PlayerContext } from '@/context/PlayerContext'
import { useParams } from 'react-router-dom'

const Player = () => {
    const {time, track,seekBg, seekBar, playerStatus,play, pause, next, prev, seekSong} = useContext(PlayerContext)
  return (
    <div  className='h-[10%] bg-black flex justify-between items-center text-white px-4 '>
        <div className="hidden lg:flex items-center gap-4">
            <img src={track.image} className='w-12 rounded-full' alt="" />
            <div className="">
                <p >{track.name}</p>
                <p className='truncate overflow-hidden whitespace-nowrap w-40'>{track.desc}</p>
            </div>
        </div>   
        <div className='flex flex-col items-center gap-1 m-auto'>
            <div className='flex gap-4 '>
                <Shuffle className='cursor-pointer' />
                <SkipBack onClick={prev} className='cursor-pointer' />
                {
                !playerStatus ? (
                    <Play onClick={play}  className='cursor-pointer'/>
                ) : (
                    <Pause onClick={pause} className='cursor-pointer' />
                )
                }

                <SkipForward onClick={next} className='cursor-pointer' />
                <Repeat className='cursor-pointer'  />
            </div>
            <div className="flex items-center gap-5">
                <p>{time.currentTime.minute} : {time.currentTime.second < 10 ? `0${time.currentTime.second}`: time.currentTime.second}</p>
                <div onClick={seekSong} ref={seekBg} className=" w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
                    <hr ref={seekBar} className='h-1 border-0 w-0 bg-green-800 rounded-full'/>
                </div>
                <p>{time.totalTime.minute}:{time.totalTime.second < 10 ? `0${time.totalTime.second}`: time.totalTime.second}</p>
            </div>
        </div>
        <div className="hidden lg:flex items-center gap-2 opacity-75 pt-5">
            <PlaySquare/>
            <Mic2 />
            <FileStack />
            <Speaker />
            <Volume2 />
            <div className='w-20 bg-slate-50 h-1 rounded '>

            </div>
            <TvMinimalPlayIcon/>
            <Maximize2 />
        </div>
    </div>
  )
}

export default Player
