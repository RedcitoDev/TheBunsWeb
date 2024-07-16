import React, { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';

const NftChecker = () => {
  const { address, isConnected } = useAccount();
  const [bunbunsNFTs, setBunbunsNFTs] = useState([]);
  const [heftyNFTs, setHeftyNFTs] = useState([]);
  const [bunbunsNext, setBunbunsNext] = useState(null);
  const [heftyNext, setHeftyNext] = useState(null);
  const [hasNFT, setHasNFT] = useState(false);

  const fetchNFTs = async (url, setNFTs, setNext) => {
    const options = {
      method: 'GET',
      headers: { accept: 'application/json', 'x-api-key': '2dd1458507284649af80e7e33b6b87c4' },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setNFTs((prevNFTs) => [...prevNFTs, ...data.nfts]);
      setNext(data.next || null);
      return data.nfts && data.nfts.length > 0;
    } catch (err) {
      console.error(err);
      return false;
    }
  };

  useEffect(() => {
    if (isConnected) {
      const initialFetch = async () => {
        const bunbunsURL = `https://api.opensea.io/api/v2/chain/ethereum/account/${address}/nfts?collection=thebunbuns&limit=10`;
        const heftyURL = `https://api.opensea.io/api/v2/chain/ethereum/account/${address}/nfts?collection=hefty-presents&limit=10`;

        const hasBunbuns = await fetchNFTs(bunbunsURL, setBunbunsNFTs, setBunbunsNext);
        const hasHefty = await fetchNFTs(heftyURL, setHeftyNFTs, setHeftyNext);

        setHasNFT(hasBunbuns || hasHefty);
      };

      initialFetch();
    }
  }, [address, isConnected]);

  const loadMoreBunbuns = () => {
    if (bunbunsNext) {
      const bunbunsURL = `https://api.opensea.io/api/v2/chain/ethereum/account/${address}/nfts?collection=thebunbuns&limit=10&next=${bunbunsNext}`;
      fetchNFTs(bunbunsURL, setBunbunsNFTs, setBunbunsNext);
    }
  };

  const loadMoreHefty = () => {
    if (heftyNext) {
      const heftyURL = `https://api.opensea.io/api/v2/chain/ethereum/account/${address}/nfts?collection=hefty-presents&limit=10&next=${heftyNext}`;
      fetchNFTs(heftyURL, setHeftyNFTs, setHeftyNext);
    }
  };

  const downloadFile = () => {
    const link = document.createElement('a');
    link.href = '/color-book.pdf';
    link.download = 'color-book.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  

  return (
    <div>
      {isConnected ? (
        <>
          <div className='py-20'>
            <h2 className='text-white text-5xl font-bold'>Your Buns</h2>
            {bunbunsNFTs.length > 0 ? (
              <div className="overflow-x-auto whitespace-nowrap no-scrollbar py-5">
                <div className="inline-flex space-x-10">
                  {bunbunsNFTs.map((nft) => (
                    <div key={nft.identifier} className="flex-shrink-0">
                      <a target='_blank' href={nft.opensea_url}><img className="rounded-xl hover:scale-105 animate-ease-in duration-300" src={nft.image_url} alt={nft.name} width="300" /></a>
                      <p className="py-5 text-white text-lg">{nft.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p className='text-gray-400 text-xs font-light py-10'>Sorry but you don't have Buns. <br /> <a className='text-white hover:text-gray-400' href="https://opensea.io/collection/thebunbuns">Click here to buy :D</a></p>
            )}
            {bunbunsNext && <button className='py-2 px-5 text-white border-2 rounded-xl hover:bg-[#fb592f] hover:font-bold ease-in-out duration-300' onClick={loadMoreBunbuns}>More Buns</button>}
          </div>
          <div>
            <h2 className='text-white text-5xl font-bold'>Your Lil Buns</h2>
            {heftyNFTs.length > 0 ? (
              <div className='overflow-x-auto whitespace-nowrap no-scrollbar py-5'>
                <div className="inline-flex space-x-10">
                {heftyNFTs.map((nft) => (
                  <div key={nft.identifier} className="flex-shrink-0">
                    <a target='_blank' href={nft.opensea_url}><img className='rounded-xl hover:scale-105 animate-ease-in duration-300' src={nft.image_url} alt={nft.name} width="300" /></a>
                    <p className='py-5 text-white text-lg'>{nft.name}</p>
                  </div>
                ))}
                </div>
              </div>
            ) : (
                <p className='text-gray-400 text-xs font-light py-10'>Sorry but you don't have Lil Buns. <br /> <a className='text-white hover:text-gray-400' href="https://opensea.io/collection/hefty-presents">Click here to buy :D</a></p>
            )}
            <div className='flex gap-10 justify-center py-10'>
                {heftyNext && <button className='py-2 px-5 text-white border-2 rounded-xl hover:bg-[#fb592f] hover:font-bold ease-in-out duration-300' onClick={loadMoreHefty}>More Lil Buns</button>}
                {hasNFT && (
                <button className='py-2 px-5 text-white border-2 rounded-xl hover:bg-[#74ff5e] hover:text-slate-900 hover:font-bold ease-in-out duration-300' onClick={() => downloadFile()}>
                Download The Color Book
                </button>
                )}
            </div>
          </div>
          
        </>
      ) : (
        <p className='md:text-4xl text-2xl text-gray-500 py-10 px-20'>Please connect your wallet for verify if you have a bun or lil bun</p>
      )}
    </div>
  );
};

export default NftChecker;
