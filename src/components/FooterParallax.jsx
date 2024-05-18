import React from 'react'
import Plx from "react-plx";
import BGHeader from '../images/footer01.png';
import Logo from '../images/footer02.png';
import Grass1 from '../images/footer03.png';
import Grass2 from '../images/footer05.png';
import FrontShadow from '../images/footer06.png';
import FrontShadow2 from '../images/index06.png';

const HeaderParallax = () => {
    const parallaxData = [
        {
          start:"50%",
          end: 0,
          startOffset:"self",
          properties: [
            {
              startValue: 0,
              endValue: 300,
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
                    <img className="absolute w-full h-auto z-0" src={BGHeader} alt="" />
                    <div className='flex justify-center'>
                      <img className="absolute z-0" src={Logo} alt="" />
                    </div>
                    <img className="absolute z-20 w-full h-auto" src={Grass1} alt="" />
                    <img className='absolute z-30 w-full h-auto' src={Grass2} alt="" />
                    <img className="absolute z-50 w-full h-auto"  src={FrontShadow} alt="" />
                    <img className="absolute z-50 w-full h-auto" src={FrontShadow2} alt="" />
                </Plx>
            </div>
        </div>
    </>
  )
}

export default HeaderParallax