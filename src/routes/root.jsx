import Logo from '../images/logo-header.png';
import Burger from '../images/burger.png';
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
export default function Root() {
    
    return (
      <>
        <header className='fixed w-full z-50'>
            <nav className='flex justify-between px-5 py-5 md:px-10 md:py-10 align-middle'>
                <div className='flex gap-5 align-middle items-center'>
                    <a href="#"><img className='w-10 h-10 md:w-10 md:h-10' src={Burger} alt="" /></a>
                    <img className='w-12 md:w-20' src={Logo} alt="logo The Buns" />
                </div>
                <div className='flex align-middle'>
                    <button className=''><span className='py-2 px-5 md:py-3 md:px-10 text-white border-slate-100 font-black border-2 rounded-xl'>Connect Wallet</span></button>
                </div>
            </nav>
        </header>
        <HeaderParallax></HeaderParallax>
        <section className='absolute w-full pt-60 text-center'>
            <div className='pt-40'>
                <h2 className='text-white text-9xl font-bold'>The Buns Hefty Hares</h2>
                <p className='text-white text-2xl px-72 font-light py-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta sapiente deleniti rem rerum tempora fugit reprehenderit iure sint obcaecati perferendis nobis voluptas expedita quas soluta commodi eligendi molestiae, placeat accusantium quo non nesciunt quis at assumenda. Perspiciatis, magnam nobis. Voluptatum asperiores nostrum dolore voluptate blanditiis, explicabo perspiciatis beatae deleniti minima aspernatur tenetur cumque atque ut, dignissimos facere eos iusto quo!</p>
                <div className='z-10'>
                  <Lottie animationData={BunSurf}></Lottie>
                </div>
            </div>
            <div className='bg-blue-buns w-full text-center py-40 z-50'>
                <h3 className='text-9xl font-black text-white'>The Collection</h3>
                <p className='text-2xl font-light px-72 text-white py-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quam corrupti veniam mollitia id similique ab aliquid eaque ipsam corporis in, dolor quo? Nam totam quaerat assumenda odio consequuntur velit dignissimos optio delectus perferendis, at odit quod explicabo facilis asperiores!</p>
                <div className='flex justify-center'>
                  <img className='drop-shadow-md hover:scale-105 hover:drop-shadow-lg ease-in-out duration-300' src={GalleryBuns} alt="Gallery of the collection buns hefty hares" />
                </div>
                <div className='flex py-20 w-full justify-center'>
                  <div className='flex gap-32'>
                      <a href="http://"><img className='w-20 hover:scale-105 ease-in-out duration-300 hover:drop-shadow-md' src={XIcon} alt="" /></a>
                      <a href="http://"><img className='w-20 hover:scale-105 ease-in-out duration-300 hover:drop-shadow-md' src={DiscordIcon} alt="" /></a>
                      <a href="http://"><img className='w-20 hover:scale-105 ease-in-out duration-300 hover:drop-shadow-md' src={OpenseaIcon} alt="" /></a>
                  </div>
                </div>
                <div>
                  <div className="flex justify-center">
                    <p className='font-light text-5xl text-white py-5 px-9 border-slate-100 border-2 rounded-xl'>Join the club!</p>
                  </div>
                  <div className='grid grid-cols-2'>
                      <div className='px-20 border-r-2 border-slate-100'>
                        <h4 className='text-6xl font-bold text-white py-5'>Store</h4>
                        <p className='text-2xl text-white font-light'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui sequi reprehenderit rerum voluptatibus incidunt, porro laudantium, placeat eius cumque soluta excepturi quod alias ipsum nulla voluptas aliquid odit officia aperiam!</p>
                        <div className='py-10'>
                          <a className='font-light text-5xl text-white py-5 px-20 border-slate-100 border-2 rounded-xl' href="#">Shop Now</a>
                        </div>
                        <div className='flex justify-center'>
                          <img className='w-80' src={BunStore} alt="" />
                        </div>
                      </div>
                      <div className='px-20 border-slate-100'>
                        <h4 className='text-6xl font-bold text-white py-5'>Community</h4>
                        <p className='text-2xl text-white font-light'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui sequi reprehenderit rerum voluptatibus incidunt, porro laudantium, placeat eius cumque soluta excepturi quod alias ipsum nulla voluptas aliquid odit officia aperiam!</p>
                        <div className='flex justify-center'>
                          <img className='w-80' src={BunCommunity} alt="" />
                        </div>
                      </div>
                  </div>
                </div>
            </div>
            <FooterParallax></FooterParallax>
            <div className='absolute text-white w-full pt-96 h-auto z-50 flex justify-between'>
              <p className='px-10 '>
                Copyright 2024 Vinyl Productions
              </p>
              <div className='px-10 flex'>
                <a href="#" className='border-r-2 border-slate-100 px-5 hover:text-slate-400 ease-in-out duration-300'>
                  Privacy Policy
                </a>
                <a href="#" className='px-5 hover:text-slate-400 ease-in-out duration-300'>
                  Terms & Conditions
                </a>
              </div>
            </div>
        </section>
      
      </>
    );
  }