
import GalleryBuns from '../images/collection.png';
import DiscordIcon from '../images/discord-logo.png';
import OpenseaIcon from '../images/opensea-logo.png';
import BunStore from '../images/bun-checking.png';
import BunCommunity from '../images/bun-artistic.png';
import XIcon from '../images/x-logo.png';
import HeaderParallax from '../components/HeaderParallax';
import FooterParallax from '../components/FooterParallax';
import EmblaCarousel from '../components/EmblaCarousel'
import Lottie from 'lottie-react';
import BunSurf from '../lotties/bunSurf.json'
import Header from '../components/Header';
import '../css/embla.css'
import ComicBun from '../components/ComicBun';
export default function Root() {
  const items = [
    { href: 'https://example.com/1', imgSrc: 'https://i.seadn.io/s/primary-drops/0x248e21b0aa161efe3045e3d067d972cd6a01d1b5/31488398:about:media:a947d416-7696-4d76-b1c2-ed1344003fb9.png?auto=format&dpr=1&w=1920', imgAlt: 'Project Lil Buns', title: 'Lil Buns', socialUrlX: 'https://x.com/TheBunsNFTs', socialUrlDis: 'https://discord.gg/vinylverse', socialUrlOS: 'https://opensea.io/collection/hefty-presents' },
    { href: 'https://example.com/2', imgSrc: 'https://i.seadn.io/s/primary-drops/0x805024a55ed4931ce6cebe30fbcecc6d6ce06051/32536419:about:media:6f86f9b6-24f5-46d6-aa7b-2b45b18633db.png?auto=format&dpr=1&w=1920', imgAlt: 'Project Dobutsu', title: 'Dobutsu', socialUrlX: 'x.com/DobutsuNFTs', socialUrlDis: 'https://discord.gg/9kDa6KzWGg', socialUrlOS: 'https://opensea.io/collection/dobutsunfts' },
    { href: 'https://example.com/3', imgSrc: 'https://via.placeholder.com/500', imgAlt: 'Image 3', title: 'Title 3' },
    { href: 'https://example.com/4', imgSrc: 'https://i.seadn.io/s/primary-drops/0x7dbc433c92266ab268ae1040837a212b77fec393/31484123:about:media:4a21eb50-9bdf-43e6-b18b-80f8af2aeb33.png?auto=format&dpr=1&w=1920', imgAlt: 'Project The Buns', title: 'The Buns', socialUrlX: 'https://x.com/TheBunsNFTs', socialUrlDis: 'https://discord.gg/vinylverse', socialUrlOS: 'https://opensea.io/collection/thebunbuns' },
    { href: 'https://example.com/5', imgSrc: 'https://via.placeholder.com/500', imgAlt: 'Image 5', title: 'Title 5' },
  ];

  const OPTIONS = { dragFree: true }
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
    return (
      <>
        <Header></Header>
        <div className='static block w-full xl:h-screen lg:h-[85vh] md:h-[50vh] 2xl:h-[125vh]'>
          <HeaderParallax></HeaderParallax>
        </div>
        <section className='relative h-auto w-full text-center md:py-0 pt-64'>
            <div className='pt-0 2xl:pt-40 bg-[#000014]'>
                <h2 className='text-white text-4xl 2xl:text-9xl xl:text-8xl md:text-7xl font-bold xl:py-0 py-5'>The Buns Hefty Hares</h2>
                <p className='text-white 2xl:text-2xl 2xl:px-72 xl:text-lg xl:px-52 lg:px-40 md:px-24 px-10 text-sm font-light 2xl:py-32'>The community of The Buns consists of digital art enthusiasts, tech innovators, and passionate collectors who share a love for rotund bunnies and blockchain technology. This vibrant and active community is dedicated to fostering creativity and innovation, providing a space where members can connect, share experiences, and collaborate on new projects.
                <br />
                By joining The Buns community, members gain access not only to a unique collection of NFTs but also to a group of individuals who value originality and imagination. Participation in special events, early access to future releases, and the opportunity to influence the collection's development are just a few of the benefits of being part of this community.
                <br />
                The collection is not just a showcase of digital art but also an example of the power of collaboration and creativity in the blockchain world. Each rotund bunny in this collection represents a piece of a larger puzzle, a community that celebrates innovation and artistic expression in its purest form.</p>
                <div className='z-10'>
                  <Lottie animationData={BunSurf}></Lottie>
                </div>
            </div>
            <div className='bg-blue-buns w-full text-center md:py-40 z-50'>
                  <ComicBun></ComicBun>
                  <h3 className='text-4xl 2xl:text-9xl xl:text-8xl md:text-7xl font-black text-white'>The Collection</h3>
                  <p className='text-sm 2xl:text-2xl xl:text-xl md:text-lg font-light 2xl:px-72 md:px-20 px-10 text-white py-10'>The Buns is a captivating collection of 4,444 enchanting, rotund hares, each uniquely frolicking through the verdant forests of the Ethereum blockchain. This collection, rich in intellectual property rights, showcases a tapestry of digital artistry and innovation, marking a milestone of creativity in the blockchain ecosystem.</p>
                  <div className='flex 2xl:px-0 justify-center'>
                    <img className='drop-shadow-md xl:px-20 md:px-10 px-10 hover:scale-105 hover:drop-shadow-lg ease-in-out duration-300' src={GalleryBuns} alt="Gallery of the collection buns hefty hares" />
                  </div>
                  <div className='flex py-20 w-full justify-center'>
                    <div className='flex 2xl:gap-32 gap-16'>
                        <a href="https://x.com/TheBunsNFTs"><img className='2xl:w-20 w-10 hover:scale-105 ease-in-out duration-300 hover:drop-shadow-md' src={XIcon} alt="" /></a>
                        <a href="https://discord.gg/vinylverse"><img className='2xl:w-20 w-10 hover:scale-105 ease-in-out duration-300 hover:drop-shadow-md' src={DiscordIcon} alt="" /></a>
                        <a href="https://opensea.io/collection/thebunbuns"><img className='2xl:w-20 w-10 hover:scale-105 ease-in-out duration-300 hover:drop-shadow-md' src={OpenseaIcon} alt="" /></a>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-center">
                      <p className='font-light 2xl:text-5xl text-3xl text-white py-5 px-9 border-slate-100 border-2 rounded-xl'>Join the club!</p>
                    </div>
                    <div className='grid grid-cols-2'>
                        <div className='2xl:px-20 xl:px-10 px-5 border-r-2 border-slate-100'>
                          <h4 className='text-3xl 2xl:text-6xl xl:text-5xl font-bold text-white py-5'>Store</h4>
                          <p className='text-xs 2xl:text-2xl xl:text-xl text-white font-light'>Coming soon, the store will feature exclusive merchandise inspired by The Buns. Get ready to explore a range of unique products that bring the charm of our enchanting, rotund hares into the physical world. From apparel to collectibles, our merchandise will allow fans to celebrate their love for "The Buns" both online and offline. Stay tuned for exciting updates and be among the first to own these special items!</p>
                          <div className='py-10 hidden'>
                            <a className='font-light text-xl 2xl:text-5xl text-white py-5 2xl:px-20 px-5 border-slate-100 border-2 rounded-xl' href="#">Shop Now</a>
                          </div>
                          <div className='flex justify-center'>
                            <img className='2xl:w-80 w-40' src={BunStore} alt="" />
                          </div>
                        </div>
                        <div className='2xl:px-20 px-5 border-slate-100'>
                          <h4 className='2xl:text-6xl xl:text-5xl text-3xl font-bold text-white py-5'>Community</h4>
                          <p className='text-xs 2xl:text-2xl xl:text-xl text-white font-light'>Join a vibrant community of digital art enthusiasts and blockchain innovators who celebrate originality and imagination. Engage with like-minded individuals, participate in exclusive events, and enjoy early access to future releases, all while being part of a creative and collaborative environment.</p>
                          <div className='flex justify-center'>
                            <img className='2xl:w-80 w-40' src={BunCommunity} alt="" />
                          </div>
                        </div>
                    </div>
                  </div>
              </div>
              <section className='w-full bg-black text-white'>
                <div>
                  <p className='font-bold text-center xl:py-5 py-20 text-white text-4xl 2xl:text-9xl xl:text-8xl md:text-7xl'>Coming Soon</p>
                </div>
                <div className='xl:grid grid-flow-col justify-center'>
                  <div className="xl:py-20 px-20">
                    <EmblaCarousel slides={SLIDES} options={OPTIONS} />
                  </div>
                  <div className="xl:pr-32 px-20 py-20">
                    <p className='xl:text-start text-center text-4xl 2xl:text-9xl xl:text-8xl md:text-7xl font-semibold'>We Bun</p>
                    <p className='xl:text-start text-center py-5 font-light text-sm xl:md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A aliquam itaque at repellendus assumenda non dignissimos aperiam labore, odio ab voluptates recusandae quaerat rerum provident pariatur illum modi saepe perferendis. Dignissimos porro, ab, commodi, hic autem incidunt itaque distinctio error nemo laudantium soluta? Praesentium, provident quod. Itaque voluptatibus optio ex facilis laudantium est quae amet magni, voluptatum enim quas nulla corporis porro possimus quidem dignissimos quod accusantium? Velit pariatur id eligendi cum quo officiis asperiores provident, rem voluptatibus error nobis, cupiditate assumenda et quibusdam vel excepturi beatae. Ut consequuntur saepe consequatur culpa itaque quia error eius voluptate, quo doloremque maxime.</p>
                    <div className='xl:text-start text-center py-2'>
                      <a href="http://" className='items-center py-2 px-5 border-2 rounded-lg hover:bg-[#fb592f] ease-in-out duration-300'>More...</a>
                    </div>
                  </div>
                </div>
              </section>
              <section className='w-full bg-black'>
                <div>
                  <p className='font-bold text-center xl:py-5 py-20 text-white text-4xl 2xl:text-9xl xl:text-8xl md:text-7xl'>More projects</p>
                </div>
                <div className="xl:px-32 px-10 xl:py-20">
                  <div className="grid place-content-center auto-rows-[350px] xl:grid-cols-3 grid-cols-1 xl:gap-4 gap-20">
                    {items.map((item, i) => (
                      <div
                        href={item.href}
                        key={i}
                        className={`group relative hover:scale-95 hover:border-[#fb592f] hover:drop ease-in-out duration-300 row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900 ${i === 3 || i === 6 ? "xl:col-span-2 col-span-1" : ""}`}
                      >
                        <img src={item.imgSrc} alt={item.imgAlt} className="w-full h-full object-cover rounded-xl group-hover:opacity-75" />
                        <div className="absolute inset-0 rounded-xl flex items-end text-start xl:opacity-0 xl:group-hover:opacity-100 xl:transition-opacity xl:ease-in-out xl:duration-300">
                          <div className="w-full bg-gradient-to-t from-black via-transparent to-transparent p-10 rounded-b-xl">
                            <span className="text-white text-6xl font-semibold">{item.title}</span>
                            <div className='flex 2xl:gap-5 gap-16 justify-start'>
                                <a target='__blank' href={item.socialUrlX}><img className='2xl:w-8 w-5 hover:scale-105 ease-in-out duration-300 hover:drop-shadow-md' src={XIcon} alt="" /></a>
                                <a target='__blank' href={item.socialUrlDis}><img className='2xl:w-8 w-5 hover:scale-105 ease-in-out duration-300 hover:drop-shadow-md' src={DiscordIcon} alt="" /></a>
                                <a target='__blank' href={item.socialUrlOS}><img className='2xl:w-8 w-5 hover:scale-105 ease-in-out duration-300 hover:drop-shadow-md' src={OpenseaIcon} alt="" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className='py-10'>
                    <p className='py-5 px-10 text-white' href="">
                      More information
                    </p>
                    <div className='flex 2xl:gap-10 gap-16 justify-center'>
                        <a href="http://"><img className='2xl:w-10 w-10 hover:scale-105 ease-in-out duration-300 hover:drop-shadow-md' src={XIcon} alt="" /></a>
                        <a href="http://"><img className='2xl:w-10 w-10 hover:scale-105 ease-in-out duration-300 hover:drop-shadow-md' src={DiscordIcon} alt="" /></a>
                        <a href="http://"><img className='2xl:w-10 w-10 hover:scale-105 ease-in-out duration-300 hover:drop-shadow-md' src={OpenseaIcon} alt="" /></a>
                    </div>
                  </div>
                </div>
              </section>
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