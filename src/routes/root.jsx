
import GalleryBuns from '../images/collection.png';
import DiscordIcon from '../images/discord-logo.png';
import OpenseaIcon from '../images/opensea-logo.png';
import BunStore from '../images/bun-checking.png';
import BunCommunity from '../images/bun-artistic.png';
import XIcon from '../images/x-logo.png';
import HeaderParallax from '../components/HeaderParallax';
import FooterParallax from '../components/FooterParallax';
import Lottie from 'lottie-react';
import BunSurf from '../lotties/bunSurf.json'
import Header from '../components/Header';
export default function Root() {
    
    return (
      <>
        <Header></Header>
        <div className='static block w-full xl:h-screen lg:h-[85vh] md:h-[50vh] 2xl:h-[125vh]'>
          <HeaderParallax></HeaderParallax>
        </div>
        <section className='relative h-auto w-full text-center md:py-0 pt-64'>
            <div className='pt-0 2xl:pt-40 bg-[#000014]'>
                <h2 className='text-white text-xl 2xl:text-9xl xl:text-8xl lg:text-7xl md:text-6xl font-bold'>The Buns Hefty Hares</h2>
                <p className='text-white 2xl:text-2xl 2xl:px-72 xl:text-lg xl:px-52 lg:px-40 md:px-24 px-10 text-sm font-light 2xl:py-32'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta sapiente deleniti rem rerum tempora fugit reprehenderit iure sint obcaecati perferendis nobis voluptas expedita quas soluta commodi eligendi molestiae, placeat accusantium quo non nesciunt quis at assumenda. Perspiciatis, magnam nobis. Voluptatum asperiores nostrum dolore voluptate blanditiis, explicabo perspiciatis beatae deleniti minima aspernatur tenetur cumque atque ut, dignissimos facere eos iusto quo!</p>
                <div className='z-10'>
                  <Lottie animationData={BunSurf}></Lottie>
                </div>
            </div>
            <div className='bg-blue-buns w-full text-center py-20 md:py-40 z-50'>
                <h3 className='text-4xl 2xl:text-9xl xl:text-8xl md:text-7xl font-black text-white'>The Collection</h3>
                <p className='text-sm 2xl:text-2xl xl:text-xl md:text-lg font-light 2xl:px-72 md:px-20 px-10 text-white py-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quam corrupti veniam mollitia id similique ab aliquid eaque ipsam corporis in, dolor quo? Nam totam quaerat assumenda odio consequuntur velit dignissimos optio delectus perferendis, at odit quod explicabo facilis asperiores!</p>
                <div className='flex 2xl:px-0 justify-center'>
                  <img className='drop-shadow-md xl:px-20 md:px-10 px-10 hover:scale-105 hover:drop-shadow-lg ease-in-out duration-300' src={GalleryBuns} alt="Gallery of the collection buns hefty hares" />
                </div>
                <div className='flex py-20 w-full justify-center'>
                  <div className='flex 2xl:gap-32 gap-16'>
                      <a href="http://"><img className='2xl:w-20 w-10 hover:scale-105 ease-in-out duration-300 hover:drop-shadow-md' src={XIcon} alt="" /></a>
                      <a href="http://"><img className='2xl:w-20 w-10 hover:scale-105 ease-in-out duration-300 hover:drop-shadow-md' src={DiscordIcon} alt="" /></a>
                      <a href="http://"><img className='2xl:w-20 w-10 hover:scale-105 ease-in-out duration-300 hover:drop-shadow-md' src={OpenseaIcon} alt="" /></a>
                  </div>
                </div>
                <div>
                  <div className="flex justify-center">
                    <p className='font-light 2xl:text-5xl text-3xl text-white py-5 px-9 border-slate-100 border-2 rounded-xl'>Join the club!</p>
                  </div>
                  <div className='grid grid-cols-2'>
                      <div className='2xl:px-20 xl:px-10 px-5 border-r-2 border-slate-100'>
                        <h4 className='text-3xl 2xl:text-6xl xl:text-5xl font-bold text-white py-5'>Store</h4>
                        <p className='text-xs 2xl:text-2xl xl:text-xl text-white font-light'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui sequi reprehenderit rerum voluptatibus incidunt, porro laudantium, placeat eius cumque soluta excepturi quod alias ipsum nulla voluptas aliquid odit officia aperiam!</p>
                        <div className='py-10'>
                          <a className='font-light text-xl 2xl:text-5xl text-white py-5 2xl:px-20 px-5 border-slate-100 border-2 rounded-xl' href="#">Shop Now</a>
                        </div>
                        <div className='flex justify-center'>
                          <img className='2xl:w-80 w-40' src={BunStore} alt="" />
                        </div>
                      </div>
                      <div className='2xl:px-20 px-5 border-slate-100'>
                        <h4 className='2xl:text-6xl xl:text-5xl text-3xl font-bold text-white py-5'>Community</h4>
                        <p className='text-xs 2xl:text-2xl xl:text-xl text-white font-light'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui sequi reprehenderit rerum voluptatibus incidunt, porro laudantium, placeat eius cumque soluta excepturi quod alias ipsum nulla voluptas aliquid odit officia aperiam!</p>
                        <div className='flex justify-center'>
                          <img className='2xl:w-80 w-40' src={BunCommunity} alt="" />
                        </div>
                      </div>
                  </div>
                </div>
            </div>
            <FooterParallax></FooterParallax>
            <div className='absolute text-white w-full h-auto pt-72 2xl:pt-96 2xl:bg-transparent 2xl:mt-20 xl:pt-20 xl:bg-transparent lg:bg-[#000014] lg:py-10 md:bg-[#000014] md:py-5 z-50 flex justify-between'>
              <p className='px-5 text-[7px] md:text-base'>
                Copyright 2024 Vinyl Productions
              </p>
              <div className='md:px-10 text-[5px] md:text-base'>
                <a href="#" className='border-r-2 border-slate-100 px-2 hover:text-slate-400 ease-in-out duration-300'>
                  Privacy Policy
                </a>
                <a href="#" className='px-2 hover:text-slate-400 ease-in-out duration-300'>
                  Terms & Conditions
                </a>
              </div>
            </div>
        </section>
      
      </>
    );
  }