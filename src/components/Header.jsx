import React, { useState, useEffect } from 'react';
import Logo from '../images/logo-header.png';
import Burger from '../images/burger.png';
import CloseIcon from '../images/exit.png';
import Discord from '../images/discord-logo.png';
import Opensea from '../images/opensea-logo.png';
import XLogo from '../images/x-logo.png';
import MenuImage from '../images/bunAlone.png'; // Imagen del lado izquierdo

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Limpieza del efecto cuando el componente se desmonta
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isModalOpen]);

    return (
        <>
            <header className='fixed w-full z-50'>
                <nav className='flex justify-between px-5 py-5 md:px-10 md:py-10 items-center'>
                    <div className='flex gap-5 items-center'>
                        <button onClick={toggleModal}>
                            <img 
                                className='w-10 h-10 md:w-10 md:h-10' 
                                src={isModalOpen ? CloseIcon : Burger} 
                                alt={isModalOpen ? "Close Menu" : "Menu Icon"} 
                            />
                        </button>
                        <img className='w-12 md:w-20' src={Logo} alt="logo The Buns" />
                    </div>
                    <div className='flex items-center'>
                        <button className='py-2 px-5 md:py-3 md:px-10 text-white hover:bg-[#fb592f] ease-in-out duration-300 border-slate-100 font-black border-2 rounded-xl'>
                            Connect Wallet
                        </button>
                    </div>
                </nav>
            </header>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-40">
                    <div className="relative bg-opacity-90 rounded-lg p-8 max-w-4xl mx-auto flex">
                        <div className="w-1/2 flex items-center justify-center p-4">
                            <img src={MenuImage} alt="Menu Image" className="w-full h-auto rounded-lg" />
                        </div>
                        <div className="w-1/2 flex flex-col items-start space-y-4 text-white p-8">
                            <a href="#the-collection" className="text-2xl glow hover:before:content-['>'] before:mr-2 before:opacity-0 hover:before:opacity-100 before:-translate-x-2 hover:before:translate-x-0 before:transition-all before:ease-in-out">The Collection</a>
                            <a href="#community" className="text-2xl glow hover:before:content-['>'] before:mr-2 before:opacity-0 hover:before:opacity-100 before:-translate-x-2 hover:before:translate-x-0 before:transition-all before:ease-in-out">Community</a>
                            <a href="#join-the-club" className="text-2xl glow hover:before:content-['>'] before:mr-2 before:opacity-0 hover:before:opacity-100 before:-translate-x-2 hover:before:translate-x-0 before:transition-all before:ease-in-out">Join the Club!</a>
                            <a href="#terms-conditions" className="text-2xl glow hover:before:content-['>'] before:mr-2 before:opacity-0 hover:before:opacity-100 before:-translate-x-2 hover:before:translate-x-0 before:transition-all before:ease-in-out">Terms & Conditions</a>
                            <a href="#vinyl-productions" className="text-2xl glow hover:before:content-['>'] before:mr-2 before:opacity-0 hover:before:opacity-100 before:-translate-x-2 hover:before:translate-x-0 before:transition-all before:ease-in-out">Vinyl Productions</a>
                            <div className="flex gap-5 mt-4">
                                <a href="#discord" className="text-3xl"><img src={Discord} className='w-1/2 hover:scale-105 duration-300 ease-in-out' alt="Discord Logo" /></a>
                                <a href="#opensea" className="text-3xl"><img src={Opensea} className='w-1/2 hover:scale-105 duration-300 ease-in-out' alt="Opensea Logo" /></a>
                                <a href="#x-logo" className="text-3xl"><img src={XLogo} className='w-1/2 hover:scale-105 duration-300 ease-in-out' alt="X Logo" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
