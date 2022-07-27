import React from 'react'
import { useRef } from 'react';
import ScrollToTop from './ScrollToTop';
import { FiTwitter } from 'react-icons/fi';
import { TbBrandTelegram } from 'react-icons/tb';
import { FiInstagram } from 'react-icons/fi';
import Toggle from './toggle';


function Navbar() {
    const howItWorks = useRef(null);
    const features = useRef(null);
    const tokenomics = useRef(null);
    const roadmaps = useRef(null);

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth",
        });
    };
  return (
    <div>
        <ScrollToTop/>
                         {/* Navbar */}

            <div className="flex max-w-[1240px] mx-auto px-4 justify-between">
                <div className="flex mt-4 mx-3 mb-3 cursor-pointer">
                    <img src={require('../images/logo.svg').default} height={40} width={40}/>
                    <ul className="flex  mx-2">
                        <li onClick={() => scrollToSection(howItWorks)} className='my-6 mx-4'>How it works</li>
                        <li onClick={() => scrollToSection(features)} className='my-6 mx-2'>Features</li>
                        <li onClick={() => scrollToSection(tokenomics)} className='my-6 mx-2'>Tokenomics</li>
                        <li onClick={() => scrollToSection(roadmaps)} className='my-6 mx-2'>Roadmaps</li>
                    </ul>
                </div>

                <div className="flex mt-4 mx-3 mb-3 ">
                <div className="grid lg:grid-cols-3 cursor-pointer lg:gap-10 mx-4 my-6">
                    <FiTwitter />
                    <TbBrandTelegram/>
                    <FiInstagram/>
                </div> 
                <div className="flex mt-4 mx-3 mb-3">
                    <Toggle/>
                </div>
                
                    <div className="grid lg:grid-cols-2 ">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded mx-3 mb-3 py-2 px-4 mt-3">Lightpaper</button>
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 mt-3 mb-3  border border-blue-500 hover:border-transparent rounded ">Telegram</button>
                </div>

                </div>
                            
                
            </div>


            <div className="m-5 relative mt-0 overflow-hidden ">

                <div className="container-lg text-center relative  gradient rounded-lg bg-gray-100 ">
                    <div className="pt-5">
                    <p className="text-black-100 mt-6">Find, store and share your crypto in one place</p>
                    <h1 className="text-3xl mt-4 font-semibold" >The <div class="text-blue-500 inline text-4xl font-semibold" data-v-642916aa="">fully customisable</div> crypto trade and research tool</h1>
                    <p className="text-red-600 mt-8">You won't need 5 tabs any longer</p>
                    <div className="lg:m-28 m-10 hover:shadow">
                            <img src={require('../images/lightimg.jpg').default} className=" rounded-lg " height={80} weight={80}/>
                    </div>

                    
                    </div>
                </div>  

            </div>
             

            <div ref={howItWorks} className="m-5 relative  overflow-hidden ">
                <p className="text-center tracking-wider text-sm text-red-600">APPLICATION</p>
                <h1 className="text-center text-black text-4xl mt-4">We're giving you the power</h1> 
                <h1 className="text-center text-black text-4xl">to decide... </h1> 
                <div className="pq items-center justify-center">
                <p className="text-center mt-4 mb-3 mx-5 text-md"> Cointools keeps the application design easy to learn with features that keep it simple. Browse through thousands of crypto opportunities and keep your eye on the ball with our intuitive app.</p> 
                </div>
                <div className=" text-center">
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white border border-blue-500 hover:border-transparent py-2 px-4 mt-3 mb-3 rounded ">Telegram</button>
                </div>         
                
                  <div className="grid lg:grid-cols-3 mt-8 pt-6 gap-10 m-10 lg:m-20">
                    <div>
                        <p className="text-red-600">CONNECT</p>
                        <h3>Connect your wallet</h3>
                        <p>Using Metamask, you will have the ability to see your coins appear in your Cointools Portfolio automatically.</p>
                        <div className="bg-gray-50 rounded-lg mt-3 mb-3 lg:w-100 lg:h-46">
                        <img src={require('../images/img1.png').default}/>
                        </div>
                        
                    </div>
                    <div>
                        <p>PORTFOLIO</p>
                        <h3>Manage your portfolio</h3>
                        <p>Add tokens and keep track of your profit & loss. Your information sits on your machine.</p>
                        <div className="bg-gray-50 rounded-lg mt-3 mb-3 lg:w-100 lg:h-46">
                        <img src={require('../images/img2.png').default}/>
                        </div>

                    </div>
                    <div>
                        <p>DISCOVER</p>
                        <h3>Find opportunities</h3>
                        <p>Find upcoming events and project better what your stocks will do. Make better decisions.</p>
                        <div className="bg-gray-50 rounded-lg mt-3 mb-3 lg:w-100 lg:h-46">
                        <img src={require('../images/img3.png').default}/>
                        </div>
                    </div>
                  </div>
            </div>

            <div ref={features} className="m-5 relative mt-0 overflow-hidden">
                <div className="container-lg rounded-lg bg-gray-100 ">
                 <div className="rounded-lg lg:mr-auto">
                  <img src={require('../images/btc.svg').default} className="imp"/>
                </div>
                   </div>
                
            </div>
                 
            
            <div ref={tokenomics} className="h-96 bg-red-500">
                <h3>Tokenomics</h3>
            </div>
            <div ref={roadmaps} className="h-96 bg-pink-600">
                <h3>Roadmaps</h3>
            </div>   

              <div  className="h-96 bg-pink-100">
                <h3>Footer</h3>
            </div>    

                    
       
            

            
    </div>
  )
}

export default Navbar