import { Menu } from 'lucide-react';
import Logo from '../images/logo-header.png'
import Burger from '../images/burger.png'
import BGHeader from '../images/index01.png'
import Grass1 from '../images/index02.png'
import Grass2 from '../images/index03.png'
import BunAlone from '../images/index04.png'
import FrontShadow from '../images/index05.png'
import FrontShadow2 from '../images/index06.png'


export default function Root() {
    return (
      <>
        <header className='absolute w-full z-40'>
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
        <section className='z-30'>
            <div className='absolute z-0'>
                <img src={BGHeader} alt="" />
            </div>
            <div className='fixed justify-center align-middle w-full h-full z-10'>
                <h1 className='md:text-8xl text-center text-2xl pt-16 md:pt-52 font-bold text-white'>We Build, We Bun</h1>
                <h1 className='md:text-lg text-center text-xs px-36 md:px-96 font-light text-white'>Holder IP based collection, no promises, just art, do what you love with your BunArt collection based on gaming culture, everything is a parody and not a direct correlation with any specific video game</h1>
            </div>
            <div className='absolute z-10'>
                <img src={Grass1} alt="" />
            </div>
            <div className='absolute z-10'>
                <img src={Grass2} alt="" />
            </div>
            <div className='absolute z-10'>
                <img src={BunAlone} alt="" />
            </div>
            <div className='absolute z-10'>
                <img src={FrontShadow} alt="" />
            </div>
            <div className='absolute z-10'>
                <img src={FrontShadow2} alt="" />
                <div className='container'>
                    <h1 className='md:text-8xl text-center text-2xl font-bold text-white'>The Buns Hefty Hares</h1>
                    <h1 className='md:text-md text-center text-2xl md:px-60 font-bold text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id repudiandae aut esse placeat animi dolores ex vitae saepe error exercitationem quis magni rem beatae asperiores neque assumenda reprehenderit hic culpa autem, sed illum corrupti, officia necessitatibus. Provident possimus quisquam et eaque harum nostrum quam aliquid accusantium saepe expedita maiores sit atque, omnis aliquam est officia deleniti consequatur neque, iusto nisi odio, ad excepturi suscipit? Nobis, nesciunt?</h1>
                </div>
            </div>
        </section>
      </>
    );
  }