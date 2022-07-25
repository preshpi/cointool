import React from 'react';
import Toggle from '../components/toggle';
import { FiTwitter } from 'react-icons/fi';
import { TbBrandTelegram } from 'react-icons/tb';
import { FiInstagram } from 'react-icons/fi';

const Navbar = () => {
  return (

    <div className="flex max-w-[1240px] mx-auto px-2 justify-between">
    <div className="flex mt-4 mx-3 mb-3 cursor-pointer">
         <img src={require('../images/logo.svg').default} height={40} width={40} className=""/>
        {/* <ul className="flex  mx-2">
            <li onClick={() => scrollToSection(howItWorks)} className='my-6 mx-2'>How it works</li>
            <li onClick={() => scrollToSection(features)} className='my-6 mx-2'>Features</li>
            <li onClick={() => scrollToSection(tokenomics)} className='my-6 mx-2'>Tokenomics</li>
            <li onClick={() => scrollToSection(roadmaps)} className='my-6 mx-2'>Roadmaps</li>
        </ul> */}
    </div>

    <div className="flex mt-7 mx-3 ">
       <div className="grid lg:grid-cols-3 cursor-pointer">
        <FiTwitter />
        <TbBrandTelegram/>
        <FiInstagram/>
       </div> 
       <Toggle />
        <div className="grid lg:grid-cols-2 mx-3">
          
         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 lg:mx-3 rounded ">Lightpaper</button>
         <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 mt-3 mb-3  border border-blue-500 hover:border-transparent rounded ">Telegram</button>
       </div>

    </div>
    

      
       
</div>
  );
};

export default Navbar;
