import { Menu } from 'lucide-react';
import Plx from "react-plx";
import Logo from '../images/logo-header.png';
import Burger from '../images/burger.png';
import BGHeader from '../images/index01.png';
import Grass1 from '../images/index02.png';
import Grass2 from '../images/index03.png';
import BunAlone from '../images/index04.png';
import FrontShadow from '../images/index05.png';
import FrontShadow2 from '../images/index06.png';




export default function Root() {

    const parallaxData = [
        {
          start: 0,
          end: 500,
          duration: 300,
          easing: "easeIntQuad",
          properties: [
            {
              startValue: 0,
              endValue: 500,
              property: "translateY",
            },
          ],
        },
      ];
      
      const parallaxData2 = [
        {
          start: 0,
          end: 500,
          duration: 300,
          easing: "easeIntQuad",
          properties: [
            {
              startValue: 0,
              endValue: 300,
              property: "translateY",
            },
          ],
        },
      ];

      const parallaxData7 = [
        {
          start: 0,
          end: 300,
          duration: 300,
          easing: "easeIntQuad",
          properties: [
            {
              startValue: 0,
              endValue: 250,
              property: "translateY",
            },
          ],
        },
      ];

      const parallaxData3 = [
        {
          start: 0,
          end: 900,
          duration: 300,
          easing: "easeIntQuad",
          properties: [
            {
              startValue: 0,
              endValue: 950,
              property: "translateY",
            },
          ],
        },
      ];

      const parallaxData4 = [
        {
          start: 0,
          end: 700,
          duration: 300,
          easing: "easeIntQuad",
          properties: [
            {
              startValue: 0,
              endValue: 850,
              property: "translateY",
            },
          ],
        },
      ];

      const parallaxData5 = [
        {
          start: 0,
          end: 500,
          duration: 500,
          easing: "easeIntQuad",
          properties: [
            {
              startValue: 0,
              endValue: 900,
              property: "translateY",  
            },
          ],
        },
      ];

      const parallaxData6 = [
        {
          start: 0,
          end: 600,
          duration: 300,
          easing: "easeIntQuad",
          properties: [
            {
              startValue: 0,
              endValue: 1000,
              property: "translateY",  
            },
          ],
        },
      ];
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
        <div className='w-full'>
            <div className='relative'>
                <Plx parallaxData={parallaxData}>
                    <img className="absolute right-0 top-0 z-0" src={BGHeader} alt="" />
                </Plx>
                <Plx parallaxData={parallaxData6}>
                    <div className="absolute w-full py-64 z-10">
                        <h1 className='text-8xl text-center w-full font-black text-white'>We Build, We Bun</h1>
                        <h1 className='text-md text-center px-96 w-full font-light text-white'>Holder IP based collection, no promises, just art, do what you love with your BunArt collection based on gaming culture, everything is a parody and not a direct correlation with any specific video game</h1>
                    </div>
                </Plx>
                <Plx parallaxData={parallaxData3}>
                    <img className="absolute" src={Grass1} alt="" />
                </Plx>
                <Plx parallaxData={parallaxData4}>
                    <img className='absolute object-contain' src={Grass2} alt="" />
                </Plx>
                <Plx parallaxData={parallaxData5}>
                    <img className='absolute object-contain' src={BunAlone} alt="" />
                </Plx>
                <Plx parallaxData={parallaxData7}>
                    <img className="absolute z-50"  src={FrontShadow} alt="" />
                </Plx>
                <Plx parallaxData={parallaxData2}>
                    <img className="absolute z-40" src={FrontShadow2} alt="" />
                </Plx>
            </div>
        </div>

        <section className='py-20 z-50'>
            <div>
                <h1>The Buns Hefty Hares</h1>
            </div>
        </section>
      
      </>
    );
  }