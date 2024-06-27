import React from 'react'
import Plx from "react-plx";
import BGHeader from '../images/index01.png';
import Grass1 from '../images/index02.png';
import Grass2 from '../images/index03.png';
import BunAlone from '../images/index04.png';
import FrontShadowMobile from '../images/index05-Mobile.png';
import FrontShadow2 from '../images/index06.png';

const HeaderParallax = () => {
    const parallaxData = [
        {
          start: 0,
          end: 700,
          duration: 300,
          easing: "ease-in",
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
          end: 700,
          duration: 300,
          easing: "ease-in",
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
          end: 700,
          duration: 300,
          easing: "ease-in",
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
          end: 700,
          duration: 300,
          easing: "ease-in",
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
          duration: 500,
          easing: "ease-in",
          properties: [
            {
              startValue: 0,
              endValue: 1200,
              property: "translateY",
            },
          ],
        },
      ];

      const parallaxData5 = [
        {
          start: 0,
          end: 700,
          duration: 100,
          easing: "ease-in",
          properties: [
            {
              startValue: 0,
              endValue: 700,
              property: "translateY",  
            },
          ],
        },
      ];

      const parallaxData6 = [
        {
          start: 0,
          end: 700,
          duration: 300,
          easing: "ease-in",
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
        <div className='w-full h-auto'>
            <div className='static w-full h-auto'>
                <Plx parallaxData={parallaxData}>
                    <img className="absolute w-full h-auto right-0 top-0 z-0" src={BGHeader} alt="" />
                </Plx>
                <Plx parallaxData={parallaxData6}>
                    <div className="absolute w-full h-auto py-12 2xl:py-64 xl:py-52 md:py-24 z-10">
                        <h1 className='text-xl 2xl:text-8xl xl:text-7xl md:text-5xl text-center w-full font-black text-white'>We Build, We Bun</h1>
                        <div className='px-0 2xl:px-80 xl:px-40'>
                          <h1 className='text-[8px] md:text-xl 2xl:text-2xl text-center px-24 2xl:px-72 xl:px-72 md:px-52 sm:px-40 w-full font-light text-white'>Holder IP based collection, no promises, just art, do what you love with your BunArt collection based on gaming culture, everything is a parody and not a direct correlation with any specific video game</h1>
                        </div>
                    </div>
                </Plx>
                <Plx parallaxData={parallaxData3}>
                    <img className="absolute z-20 w-full h-auto" src={Grass1} alt="" />
                </Plx>
                <Plx parallaxData={parallaxData4}>
                    <img className='absolute z-30 w-full h-auto' src={Grass2} alt="" />
                </Plx>
                <Plx parallaxData={parallaxData5}>
                    <img className='absolute z-40 w-full h-auto' src={BunAlone} alt="" />
                </Plx>
                <Plx parallaxData={parallaxData7}>
                    <img className="absolute z-50 w-full h-auto"  src={FrontShadowMobile} alt="" />
                </Plx>
                <Plx parallaxData={parallaxData2}>
                    <img className="absolute z-50 w-full h-auto" src={FrontShadow2} alt="" />
                </Plx>
            </div>
        </div>
    </>
  )
}

export default HeaderParallax