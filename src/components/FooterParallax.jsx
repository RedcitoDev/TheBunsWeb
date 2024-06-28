import React, { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BGHeader from '../images/footer01.png';
import Logo from '../images/footer02.png';
import Grass1 from '../images/footer03.png';
import Grass2 from '../images/footer05.png';
import FrontShadow from '../images/footer06.png';
import FrontShadow2 from '../images/index06.png';

gsap.registerPlugin(ScrollTrigger);

const FooterParallax = () => {
  useEffect(() => {
    const isDesktop = window.innerWidth >= 1024; // Definimos 1024px como punto de corte para escritorio

    if (!isDesktop) {
      return; // Si no es escritorio, no aplicamos las animaciones
    }

    console.log("useEffect triggered");

    const logo = document.querySelector(".logo");
    const grass2 = document.querySelector(".grass2");

    console.log("logo:", logo);
    console.log("grass2:", grass2);

    if (logo) {
      // Animación para el Logo
      gsap.fromTo(logo, {
        y: -100,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: logo,
          start: "95% 85%",
          end: "100% 50%",
          scrub: true,
          markers: true // Añade marcadores para depuración
        }
      });
    }

    if (grass2) {
      // Animación para Grass2
      gsap.fromTo(grass2, {
        y: 100,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: grass2,
          start: "center 85%",
          end: "center 50%",
          scrub: true,
          markers: true // Añade marcadores para depuración
        }
      });
    }
  }, []);

  return (
    <>
      <div className='w-full h-auto 2xl:h-[90vh] xl:h-[100vh] lg:h-[80vh] md:h-[60vh] bg-[#000014]'>
        <div className='relative w-full h-auto'>
          <img className="absolute w-full h-auto z-0" src={BGHeader} alt="" />
          <div className='flex justify-center'>
            <img className="absolute 2xl:py-40 xl:w-96 xl:py-20 lg:w-80 lg:py-10 md:w-72 w-40 py-5 z-0 logo" src={Logo} alt="" />
          </div>
          <img className="absolute z-20 w-full h-auto" src={Grass1} alt="" />
          <img className='absolute z-30 w-full h-auto grass2' src={Grass2} alt="" />
          <img className="absolute z-50 w-full h-auto" src={FrontShadow} alt="" />
          <img className="absolute z-50 w-full h-auto" src={FrontShadow2} alt="" />
        </div>
      </div>
    </>
  );
};

export default FooterParallax;
