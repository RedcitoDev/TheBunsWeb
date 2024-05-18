import React from 'react'
import Plx from "react-plx";
import BGHeader from '../images/index01.png';
import Grass1 from '../images/index02.png';
import Grass2 from '../images/index03.png';
import BunAlone from '../images/index04.png';
import FrontShadow from '../images/index05.png';
import FrontShadow2 from '../images/index06.png';

const HeaderParallax = () => {
    const parallaxData = [
        {
          start: 0,
          end: 500,
          duration: 300,
          easing: "easeIntQuad",
          properties: [
            {
              startValue: 0,
              endValue: 200,
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
        <div className='w-full h-screen'>
            <div className='relative w-full h-screen'>
                <Plx parallaxData={parallaxData}>
                    <img className="absolute w-full h-auto right-0 top-0 z-0" src={BGHeader} alt="" />
                </Plx>
                <Plx parallaxData={parallaxData6}>
                    <div className="absolute w-full h-auto py-64 z-10">
                        <h1 className='text-8xl text-center w-full font-black text-white'>We Build, We Bun</h1>
                        <h1 className='text-md text-center px-96 w-full font-light text-white'>Holder IP based collection, no promises, just art, do what you love with your BunArt collection based on gaming culture, everything is a parody and not a direct correlation with any specific video game</h1>
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
                    <img className="absolute z-50 w-full h-auto"  src={FrontShadow} alt="" />
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