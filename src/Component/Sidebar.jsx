
import { ArrowRight, ChartBarStackedIcon, Home, LucideChartColumnStacked,  Plus,  Search, } from 'lucide-react'
import React from 'react'
import { assets } from '@/assets/assets'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
  const Nav = useNavigate()
  return (
    <div className='w-[25%] h-full p-2  flex-col gap-2 text-white hidden lg:flex'>
      <div className='bg-[#121212] h-[15%]  rounded flex flex-col justify-around '>
        <div className='flex items-center gap-3 pl-8 cursor-pointer'>
            <Home onClick={()=> Nav('/')} className='' /> <p className='font-bold'>Home</p>
        </div>
        <div className='flex items-center gap-3 pl-8 cursor-pointer'>
        <Search /> <p className='font-bold'>Search</p>
        </div>
      </div>
      <div className='bg-[#121212] h-[85%] rounded'>
        <div className='p-4 flex items-center justify-between'>
            <div className="flex items-center gap-3">
                <img src={assets.stack_icon} className='w-8' alt="" /> <p className='font-semibold'>Your Library</p>
            </div>
            <div className="flex items-center gap-3">
                <ArrowRight className='text-[25px]' /><Plus className='text-[25px]'/>
            </div>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
            <h1>Create Your First Playlist</h1>
            <p className='font-light text-[14px]'>It's ease we'll help you</p>
            <Button variant='outline' className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 transition-all cursor-pointer active:scale-102'>Create Playlist</Button>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-2">
            <h1>Let's find some podcast to follow</h1>
            <p className='font-light text-[14px]'>We'll keep you update on new episodes</p>
            <Button variant='outline' className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 transition-all cursor-pointer active:scale-102'>Browse Podcast</Button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
