import React from 'react'
import Plx from "react-plx";
import Book from '../images/book.png';
import BunColoring from '../images/bun-coloring.png';
import Grass from '../images/grass.png';
import DiscordIcon from '../images/discord-logo.png';

const ComicBun = () => {
  return (
    <>
        <section className='py-20'>
            <div>
                <img className='absolute z-20 w-full h-auto xl:pt-40 pt-80' src={Grass} alt="" />
            </div>
            <div className='xl:flex justify-center md:mx-30'>
                <div className='flex justify-center'>
                    <img className='relative z-20 xl:w-[40%] w-[60%] h-auto hover:scale-105 duration-300 ease-in-out pb-40' src={Book} alt="" />
                </div>
                <div className='relative z-20 flex-nowrap xl:bg-transparent'>
                    <h1 className='text-7xl font-black text-white'>The Coloring Book</h1>
                    <p className='text-center text-white font-light px-10 py-5'>We're excited to announce the upcoming release of "The Buns" coloring book! Dive into the whimsical world of our enchanting, rotund hares with beautifully illustrated pages that bring each unique bunny to life. Perfect for all ages, this coloring book offers a fun and creative way to engage with "The Buns" collection. Stay tuned for more details and get ready to add your own splash of color to these delightful characters!</p>
                    <div className='flex justify-center'>
                        <a className='hover:scale-105 duration-300 ease-in-out flex items-center border-2 px-5 py-2 rounded-full hover:bg-[#fb592f]' href="http://"><img className='w-10 pr-2' src={DiscordIcon} alt="" /> <span className=' font-bold text-white'>Click here</span></a>
                    </div>
                    <div className='flex justify-center'>
                        <img className='w-[70%] pl-20' src={BunColoring} alt="The Bun Coloring" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ComicBun