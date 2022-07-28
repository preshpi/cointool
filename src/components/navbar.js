import React from 'react'
import { useRef } from 'react';
import ScrollToTop from './ScrollToTop';
import { FiTwitter } from 'react-icons/fi';
import { TbBrandTelegram } from 'react-icons/tb';
import { FiInstagram } from 'react-icons/fi';
import { FaBtc } from 'react-icons/fa';
import { GiSuitcase } from 'react-icons/gi';
import { TbCurrencyEthereum } from 'react-icons/tb'
import { AiOutlineStar } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import { MdOutlineStorefront } from 'react-icons/md';
import { BsLaptop } from 'react-icons/bs';
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
    <div className="font-nunito">
        <ScrollToTop/>
                         {/* Navbar */}

            <div className="flex max-w-[1240px] mx-auto  lg:px-4 justify-between">
                <div className="flex mt-1 lg:mt-4 mx-4 ">
                    <img src={require('../images/logo.svg').default} height={40} width={40} className="md:block sm:hidden"/>
                    <ul className="mx-2 hidden sm:flex sm:visible">
                        <li onClick={() => scrollToSection(howItWorks)} className='my-6 mx-4 cursor-pointer'>How it works</li>
                        <li onClick={() => scrollToSection(features)} className='my-6 mx-2 cursor-pointer'>Features</li>
                        <li onClick={() => scrollToSection(tokenomics)} className='my-6 mx-2 cursor-pointer'>Tokenomics</li>
                        <li onClick={() => scrollToSection(roadmaps)} className='my-6 mx-2 cursor-pointer'>Roadmaps</li>
                    </ul>
                </div>

                <div className="flex mt-3 mx-3">
                <div className="grid lg:grid-cols-3 md:grid-rows-3 grid-cols-3 gap-3 cursor-pointer lg:gap-10 mx-2 my-6">
                  <a href="#"><FiTwitter /></a> 
                  <a href="#"><TbBrandTelegram/></a>
                  <a href="#"><FiInstagram/></a>
                </div> 
                <div className="flex mt-3 mb-2">
                    <Toggle/>
                </div>
                
                    <div className="md:grid grid-cols-2 ">
                     <a href="#">
                        <button className="bg-blue-500 rounded mt-5 lg:mx-1  text-white font-semibold py-1 px-3 md:mx-3">Lightpaper</button>
                    </a>   
                    <a href="#">
                        <button className="bg-transparent hover:bg-blue-500 rounded mt-5 lg:mx-2 mx-2 text-blue-700 font-semibold hover:text-white py-1 px-3  border border-blue-500 hover:border-transparent">Telegram</button>
                    </a>   

                </div>

                </div>
                                          
            </div>


            <div className="m-5 relative overflow-hidden ">

                <div className="container-lg text-center relative  gradient rounded-lg bg-gray-100 ">
                    <div className="pt-5">
                    <p className="text-black-100 mt-6">Find, store and share your crypto in one place</p>
                    <h1 className="text-3xl mt-4 font-semibold" >The <div class="text-blue-500 inline text-4xl font-semibold" data-v-642916aa="">fully customisable</div> crypto trade and research tool</h1>
                    <p className="text-red-600 mt-8">You won't need 5 tabs any longer</p>
                    <div className="lg:m-28 m-10 hover:shadow-lg">
                            <img src={require('../images/lightimg.jpg').default} className=" rounded-lg " height={80} weight={80}/>
                    </div>

                    
                    </div>
                </div>  

            </div> 

            <div ref={howItWorks} className="m-5 relative  overflow-hidden ">
            <div class="max-w-[517px] mx-auto text-center">
                <small class="tag text-red-500 tracking-wider">APPLICATION</small> 
                <h1 className="text-2xl text-black dark:text-white mt-2">We're giving you the power to decide... </h1>
                <p class="mb-3 text-gray-500 mt-2 lg:text-xl m-4 lg:m-8">Cointools keeps the application design easy to learn with features that keep it simple. Browse
                  through thousands of crypto opportunities and keep your eye on the ball with our intuitive app.</p>
                   <a target="_blank" href="#"><button className="bg-white border-2 rounded-lg px-2 py-1 text-gray-500">Join our Telegram</button></a></div>
                
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

            <div ref={features} className="m-5 overflow-hidden relative">
                <div className="rounded-lg bg-gray-50 relative  container-lg ">
                   <img src={require('../images/btc.svg').default} className="w-full h-full object-cover absolute rounded-lg imp hidden md:flex md:visible"/>
                <div className="lg:h-full">
                    <div className="relative lg:m-24 lg:pt-8 ">
                        <div className="grid lg:grid-cols-2 ">
                        <div className="m-10 pt-5">
                        <h1 className="text-2xl text-black mb-3">Stay on-top of all crypto assets, in one place</h1>
                        <h3 className="text-xl text-gray-500">Get started with your Technical Analysis and Market Research immediately without first needing to register your account.</h3>
                       </div>

                       <div>
                        <div className="flex gap-5  lg:p-8 m-10  mx-auto px-4 justify-between">
                            <div className="rounded-lg bg-white shadow-lg w-full mb-5 lg:w-screen">
                               <div className="flex mx-3 mt-3 place-content-between">
                                 <div className="flex ">
                                    <FaBtc className="h-8 w-8 bg-yellow-600 rounded-full"/>
                                    <h1 className="mx-2 text-xl text-black">BTC</h1>        
                                 </div>
                                  <div className="flex">
                                        <GiSuitcase/>
                                        <AiOutlineStar className="hover:text-yellow-400 cursor-pointer"/>
                                    </div>
                               </div>

                               <div className="flex pt-8 mx-3 place-content-between">
                                <p className="text-sm text-gray-400">Price</p>
                                <p className="text-xs text-red-600">-8.17%</p>
                               </div>
                               <div className="flex mx-3 place-content-between">
                                <img src={require('../images/snake.png').default}/>
                                <h3 className="text-black text-sm ">$21458</h3>
                                </div>
                                
                               <hr className="mt-6"/>
                               <div className="place-content-end mt-4 mx-3">
                                <p className="text-xs text-gray-400 text-right">Market cap.</p>
                                <h3 className="text-black text-sm text-right">$409529330539</h3>
                                <p className="text-xs text-gray-400 text-right mt-3">Volume</p>
                                <h3 className="text-black text-sm text-right mb-4">$44436430834</h3>
                               </div>
                               
                            </div>

                            <div className="rounded-lg bg-white shadow-lg w-full mb-5 lg:w-screen">
                               <div className="flex mx-3 mt-3 place-content-between">
                                 <div className="flex ">
                                    <img src={require('../images/bnb.png').default} height={30} width={30}/>
               
                                    <h1 className="mx-2 text-xl text-black">BNB</h1>        
                                 </div>
                                  <div className="flex">
                                        <GiSuitcase/>
                                        <AiOutlineStar className="hover:text-yellow-400 cursor-pointer"/>
                                    </div>
                               </div>

                               <div className="flex pt-8 mx-3 place-content-between">
                                <p className="text-sm text-gray-400">Price</p>
                                <p className="text-xs text-red-600">-3.16%</p>
                               </div>
                               <div className="flex mx-3 place-content-between">
                                <img src={require('../images/snake.png').default}/>
                                <h3 className="text-black text-sm ">$259.91</h3>
                                </div>
                                
                               <hr className="mt-6"/>
                               <div className="place-content-end mt-4 mx-3">
                                <p className="text-xs text-gray-400 text-right">Market cap.</p>
                                <h3 className="text-black text-sm text-right">$42229768839</h3>
                                <p className="text-xs text-gray-400 text-right mt-3">Volume</p>
                                <h3 className="text-black text-sm text-right mb-4">$87319725</h3>
                               </div>
                               
                            </div>

                            <div className="rounded-lg bg-white shadow-lg w-full mb-5 lg:w-screen">
                               <div className="flex mx-3 mt-3 place-content-between">
                                 <div className="flex ">
                                    <TbCurrencyEthereum className="h-8 w-8 bg-blue-400 rounded-full"/>
                                    <h1 className="mx-2 text-xl text-black">ETH</h1>        
                                 </div>
                                  <div className="flex">
                                        <GiSuitcase/>
                                        <AiOutlineStar className="hover:text-yellow-400 cursor-pointer"/>
                                    </div>
                               </div>

                               <div className="flex pt-8 mx-3 place-content-between">
                                <p className="text-sm text-gray-400">Price</p>
                                <p className="text-xs text-red-600">-3.42%</p>
                               </div>
                               <div className="flex mx-3 place-content-between">
                                <img src={require('../images/snake.png').default}/>
                                <h3 className="text-black text-sm ">$1489.9</h3>
                                </div>
                                
                               <hr className="mt-6"/>
                               <div className="place-content-end mt-4 mx-3">
                                <p className="text-xs text-gray-400 text-right">Market cap.</p>
                                <h3 className="text-black text-sm text-right">$178465092518</h3>
                                <p className="text-xs text-gray-400 text-right mt-3">Volume</p>
                                <h3 className="text-black text-sm text-right mb-4">$159249233564</h3>
                               </div>
                               
                            </div>

                          
                           
                        </div>

                        
                       </div>   
                        </div>

                        <div className="grid lg:grid-cols-3 gap-5 mx-3 ">
                        <div className="m-3">
                            <div className="flex">
                             <BsLaptop className="mt-2"/>
                             <h3 className="text-black mx-2 mt-1">Trading View</h3>   
                            </div>
                            
                            <p className="text-gray-500 mb-2 mt-2">Use the familiar TradingView to get the best experience for your Technical Analysis. Alternatively switch to a different view.</p>
                        </div>
                        <div className="m-3">
                            <div className="flex mt-4">
                                <MdOutlineStorefront className="mt-2"/>
                               <h3 className="text-black mx-2 mt-1">Customisable market page</h3>  
                            </div>
                           
                            <p className="text-gray-500 mt-2"> Customisable market page Two column? Three? Four? You decide how you want to experience our market page and which modules to show.</p>
                        </div>
                        <div className="m-3">
                            <div className="flex mt-4">
                              <BiUserCircle className="mt-2"/>
                               <h3 className="text-black mx-2 mt-1">No account required</h3> 
                            </div>
                            
                            <p className="text-gray-500  mt-2 mb-10">Start using the application free of charge and without an account, call it decentralized. *Better experience when you do have an account</p>
                        </div>
                        </div>
               
                    </div>
                </div>                        
               </div>

               <div className="rounded-lg bg-gray-50 relative  container-lg">
                   <img src={require('../images/btc.svg').default} className="w-full h-full object-cover absolute rounded-lg hidden md:flex md:visible"/>
                <div className="lg:h-full">
                    <div className="relative lg:m-24 lg:p-10">
                        <div className="grid lg:grid-cols-2 lg:px-5 lg:mt-10">
                        <div className="flex gap-10 m-10  px-4 place-content-between">
                            <img src={require('../images/network.png').default}/>
                           
                        </div>
                   
                         <div className="m-5 lg:p-6 lg:pt-8 pt-3 lg:mx-auto">
                        <h1 className="text-2xl text-black mb-3">Tracking your coins comfortably on multiple networks</h1>
                        <h3 className="text-xl text-gray-500">Switching your Metamask wallet from BSC to ETH and back again isn’t fun. We’re putting the puzzle pieces in place to solve switching back and forth so much.</h3>
                         </div>
                      
                        </div>

                        <div className="grid lg:grid-cols-3 gap-5 mx-3 ">
                        
                        <div className="lg:p-10 m-3">
                            <div className="flex mt-4">
                             <BsLaptop className="mt-2"/>
                             <h3 className="text-black mx-2 mt-1">Trading View</h3>   
                            </div>
                            
                            <p className="text-gray-500 mb-2 mt-2">Use the familiar TradingView to get the best experience for your Technical Analysis. Alternatively switch to a different view.</p>
                        </div>
                        <div className="lg:p-10 m-3">
                            <div className="flex mt-4">
                                <MdOutlineStorefront className="mt-2"/>
                               <h3 className="text-black mx-2 mt-1">Customisable market page</h3>  
                            </div>
                           
                            <p className="text-gray-500 mt-2"> Customisable market page Two column? Three? Four? You decide how you want to experience our market page and which modules to show.</p>
                        </div>
                        <div className="lg:p-10 m-3">
                            <div className="flex mt-4">
                              <BiUserCircle className="mt-2"/>
                               <h3 className="text-black mx-2 mt-1">No account required</h3> 
                            </div>
                            
                            <p className="text-gray-500  mt-2 mb-10">Start using the application free of charge and without an account, call it decentralized. *Better experience when you do have an account</p>
                        </div>
                        </div>
               
                    </div>

                </div>                        
               </div>

               <div className="rounded-lg bg-gray-50 relative  container-lg ">
                   <img src={require('../images/btc.svg').default} className="w-full h-full object-cover absolute rounded-lg imp hidden md:flex md:visible"/>
                <div className="lg:h-full mb-5">
                    <div className="relative lg:m-24 lg:pt-8 ">
                        <div className="grid lg:grid-cols-2 ">
                        <div className="m-10 pt-5">
                        <h1 className="text-2xl text-black mb-3">Stay connected, earn and learn about crypto</h1>
                        <h3 className="text-xl text-gray-500">Share with your friends, recommend crypto to your family, read about crypto currency and earn by holding our coin while doing it.</h3>
                       </div>

                       <div>
                        <div className="flex gap-5  lg:p-8 m-10  mx-auto px-4 justify-between">
                         <img src={require('../images/community.png').default}/>   
                        </div>

                        
                       </div>   
                        </div>

                        <div className="grid lg:grid-cols-3 gap-5 mx-3 ">
                        <div className="m-3">
                            <div className="flex">
                             <BsLaptop className="mt-2"/>
                             <h3 className="text-black mx-2 mt-1">Trading View</h3>   
                            </div>
                            
                            <p className="text-gray-500 mb-2 mt-2">Use the familiar TradingView to get the best experience for your Technical Analysis. Alternatively switch to a different view.</p>
                        </div>
                        <div className="m-3">
                            <div className="flex mt-4">
                                <MdOutlineStorefront className="mt-2"/>
                               <h3 className="text-black mx-2 mt-1">Customisable market page</h3>  
                            </div>
                           
                            <p className="text-gray-500 mt-2"> Customisable market page Two column? Three? Four? You decide how you want to experience our market page and which modules to show.</p>
                        </div>
                        <div className="m-3">
                            <div className="flex mt-4">
                              <BiUserCircle className="mt-2"/>
                               <h3 className="text-black mx-2 mt-1">No account required</h3> 
                            </div>
                            
                            <p className="text-gray-500  mt-2 mb-10">Start using the application free of charge and without an account, call it decentralized. *Better experience when you do have an account</p>
                        </div>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-5 mx-3">
                        <div className="m-3">
                            <div className="flex">
                             <BsLaptop className="mt-2"/>
                             <h3 className="text-black mx-2 mt-1">Trading View</h3>   
                            </div>
                            
                            <p className="text-gray-500 mb-2 mt-2">Use the familiar TradingView to get the best experience for your Technical Analysis. Alternatively switch to a different view.</p>
                        </div>
                        <div className="m-3 lg:mb-12 ">
                        <div class="w-full h-full bg-blue-800 hover:bg-blue-500 text-center cursor-pointer rounded flex items-center justify-center text-white">
                            <a target="_blank" href="#" class="text-lg text-center py-5">
                            <div class="block">Join us on Telegram</div>
                            </a>
                        </div>
                        </div>
                        <div className="m-3 lg:mb-12">
                           <div class="w-full h-full bg-blue-500 hover:bg-blue-800 text-center cursor-pointer rounded flex items-center justify-center text-white">
                            <a target="_blank" href="#" class="text-lg text-center py-5">
                            <div class="block">Share on twitter</div>
                            </a>
                        </div>  
                        </div>
                       
                        </div>
               
                    </div>
                </div>                        
               </div>
            </div>

            <div className="mx-auto md:w-2/3 text-center">
                <h3 className="mb-8 text-2xl">Interested in Cointools? We're launching our coin soon and would love to have you as an early adopter.</h3> 
                 <a href="#"><button className="bg-white rounded-lg py-2 px-2 border-2 hover:bg-blue-500 text-black hover:text-white">Read the lightpaper</button></a> 
                 <hr className="border-0 my-2 md:hidden"/>
                 <a href="#"><button className="bg-blue-500 rounded-lg px-2 py-2  hover:text-black text-white hover:border-2 lg:mx-3">Follow us on Twitter</button></a>
            </div>


            <div ref={tokenomics} className="m-5 overflow-hidden relative">
              <div className="rounded-lg bg-gray-50 relative  container-lg">
                <div className="lg:m-30">
                    <div className="m-3">
                        <h1 className="mx-2 text-xl lg:text-3xl text-black pt-5 lg:text-center lg:pt-10">Tokenomics</h1>
                        <p className="text-gray-500 mx-2 mt-2 lg:mt-4 mb-3 lg:text-center">Within the sale period, there is no tax implementation. This will start only after an AMM listing. All unsold tokens will be burned.</p>
                        <div class="grid lg:grid-cols-3 gap-5 pt-5">
                            <div class="bg-white dark:bg-dark-800 rounded p-5 text-lg lg:mb-10">
                                <h6>0.5% Burn</h6>
                                <p class="mb-0">For every transaction, 0.5% will be burned to increase the value of your tokens. Burning will stop at 21M tokens.</p>
                            </div> 
                                <div class="bg-white dark:bg-dark-800 rounded p-5 text-lg lg:mb-10">
                                    <h6>0.5% Eco-vault</h6> 
                                    <p class="mb-0">0.5% of every transaction goes into our eco-vault that we will use for rewards.</p>
                                </div> 
                                    <div class="bg-white dark:bg-dark-800 rounded p-5 text-lg lg:mb-10 mb-10">
                                        <h6>80% Ad-Revenue Buyback</h6> 
                                        <p class="mb-0">We are allocating 80% of ad-revenue profits back into the Cointools coin.</p>
                                    </div>
                        </div>
                    </div>

                    
                </div>
              </div>
             </div>
            



             <div ref={roadmaps} className="m-5 overflow-hidden">
             <div className="rounded-lg bg-gray-50 relative  container-lg">
                <div className="lg:m-24">
                
                <div className="text-center p-5">
                <h1 className="text-2xl text-black mb-3 pt-8">Roadmap</h1>
                <p className="text-gray-500">Project features and marketing roadmap for the year 2021</p>
              </div>

               <div className="flex m-4 mt-4">
                    <p className="text-xl text-blue-500"><i class="fa-solid fa-signs-post"></i></p>
                   <h1 className="text-blue-500 text-xl mx-3">Q1 - 2021</h1> 
                </div>
              <div class="grid md:grid-cols-3 gap-4">
                
                <div class="dark:shadow-lg text-left bg-white dark:bg-dark-800 rounded p-5 flex items-center m-3">
                    <div>
                        <h4 class="mb-0">New website</h4>
                         <p class="mb-0 mt-2">Launch branding for product</p>
                    </div>
                    </div>
                    <div class="dark:shadow-lg text-left bg-white dark:bg-dark-800 rounded p-5 flex items-center m-3">
                        <div>
                            <h4 class="mb-0">Token Sale</h4> 
                            <p class="mb-0 mt-2">Seed &amp; Public Sales, see tokenomics</p>
                        </div>
                    </div>
                    <div class="dark:shadow-lg text-left bg-white dark:bg-dark-800 rounded p-5 flex items-center m-3">
                        <div>
                            <h4 class="mb-0">Basic demo</h4> 
                            <p class="mb-0 mt-2">Provide a public demo so you can test Cointools</p>
                        </div>
                    </div>
                    <div class="dark:shadow-lg text-left bg-white dark:bg-dark-800 rounded p-5 flex items-center m-3">
                        <div>
                            <h4 class="mb-0">Closed beta group</h4> 
                            <p class="mb-0 mt-2">Early testers for the app</p>
                        </div>
                    </div>
                        <div class="dark:shadow-lg text-left bg-white dark:bg-dark-800 rounded p-5 flex items-center m-3">
                            <div>
                                <h4 class="mb-0">PancakeSwap Listing</h4> 
                                <p class="mb-0 mt-2">12% of total supply will be added as liquidity</p>
                                </div>
                            </div>
                            <div class="dark:shadow-lg text-left bg-white dark:bg-dark-800 rounded p-5 flex items-center m-3">
                                 <div>
                                    <h4 class="mb-0">Listing on Coingecko</h4> 
                                </div>
                                    </div>
                                    <div class="dark:shadow-lg text-left bg-white dark:bg-dark-800 rounded p-5 flex items-center m-3">
                                        <div>
                                            <h4 class="mb-0">Listing on Coinmarketcap</h4>
                                        </div>
                                    </div>
                                    <div class="dark:shadow-lg text-left bg-white dark:bg-dark-800 rounded p-5 flex items-center m-3">
                                        <div>
                                            <h4 class="mb-0">Marketing campaign</h4> 
                                            <p class="mb-0 mt-2">We will start our marketing listing</p>
                                        </div>
                                    </div>
                                    <div class="dark:shadow-lg text-left bg-white dark:bg-dark-800 rounded p-5 flex items-center m-3">
                                        <div>
                                            <h4 class="mb-0">Contract Audit</h4>
                                             <p class="mb-0 mt-2">Our contract will get audited by TBD</p>
                                        </div>
                                    </div>
              </div>

              <div className="flex m-4 mt-4">
                    <p className="text-xl text-blue-500"><i class="fa-solid fa-signs-post"></i></p>
                   <h1 className="text-blue-500 text-xl mx-3">Q2 - 2021</h1> 
                </div>
              <div class="grid md:grid-cols-3 gap-4">
                <div class="dark:shadow-lg text-left bg-white dark:bg-dark-800 rounded p-5 flex items-center m-3">
                    <div>
                        <h4 class="mb-0">Release 0.1</h4> 
                        <p class="mb-0 mt-2">The BETA version of our app goes public</p>
                    </div>
                </div>
                <div class="dark:shadow-lg text-left bg-white dark:bg-dark-800 rounded p-5 flex items-center m-3">
                    <div>
                        <h4 class="mb-0">Submit your own coin</h4>
                         <p class="mb-0 mt-2">New coin submission</p>
                    </div>
                </div>
                <div class="dark:shadow-lg text-left bg-white dark:bg-dark-800 rounded p-5 flex items-center m-3">
                    <div>
                        <h4 class="mb-0">All core concept features</h4> 
                        <p class="mb-0 mt-2">Cointools proof of concept</p>
                    </div>
                </div>
                <div class="dark:shadow-lg text-left bg-white dark:bg-dark-800 rounded p-5 flex items-center m-3">
                    <div>
                        <h4 class="mb-0">Multi-network profiles</h4>
                         <p class="mb-0 mt-2">Track on ETH &amp; BSC Networks</p>
                    </div>
                </div>
                <div class="dark:shadow-lg text-left bg-white dark:bg-dark-800 rounded p-5 flex items-center m-3">
                    <div>
                        <h4 class="mb-0">Buyback integration</h4>
                         <p class="mb-0 mt-2">Start seeing your rewards from holding our coin</p>
                    </div>
                </div>
                <div class="dark:shadow-lg text-left bg-white dark:bg-dark-800 rounded p-5 flex items-center m-3">
                    <div>
                        <h4 class="mb-0">Learning Pad</h4>
                         <p class="mb-0 mt-2">Community learning centre for crypto currencies and tokens</p>
                    </div>
                </div>
                <div class="dark:shadow-lg text-left bg-white dark:bg-dark-800 rounded p-5 flex items-center m-3">
                    <div>
                        <h4 class="mb-0">Accounts</h4> 
                        <p class="mb-0 mt-2">Start customising your experience even more with accounts</p>
                    </div>
                </div>
                <div class="dark:shadow-lg text-left bg-white dark:bg-dark-800 rounded p-5 flex items-center m-3">
                    <div>
                        <h4 class="mb-0">UX/UI Review</h4> 
                        <p class="mb-0 mt-2">Refinement of user experience</p>
                    </div>
                </div>
              </div>

              <div className="flex m-4 mt-4">
                    <p className="text-xl text-blue-500"><i class="fa-solid fa-signs-post"></i></p>
                   <h1 className="text-blue-500 text-xl mx-3">Q3 - 2021</h1> 
                </div>

              <div class="grid md:grid-cols-3 gap-4">
                <div class="dark:shadow-lg text-left bg-white dark:bg-dark-800 rounded p-5 flex items-center m-3 lg:mb-10">
                    <div>
                        <h4 class="mb-0">Omnichain Support</h4> 
                        <p class="mb-0 mt-2">Added support for all blockchains (TBD)</p>
                    </div>
                </div>
                <div class="dark:shadow-lg text-left bg-white dark:bg-dark-800 rounded p-5 flex items-center m-3 lg:mb-10">
                    <div>
                        <h4 class="mb-0">Learning Enhancements</h4>
                         <p class="mb-0 mt-2">Partnerships to promote</p>
                    </div>
                </div>
                <div class="dark:shadow-lg text-left bg-white dark:bg-dark-800 rounded p-5 flex items-center m-3 lg:mb-10">
                    <div>
                        <h4 class="mb-0">Price Alerts</h4>
                         <p class="mb-0 mt-2">Get alerts on events for your tracked coins</p>
                     </div>
                 </div>
             </div>
                </div>                    
               </div>
            </div>    

             <div  className="container-lg text-center bg-blue-500 m-5 rounded-lg lg:h-64 h-40">
                <div className="p-10 lg:p-20">
                <h3 className="text-white text-center text-xl">You're early, want to find out how to get access in the sale?</h3>
               <div className=" text-center">
               <a href="#"><button className="bg-white  text-blue-500  rounded-lg py-2 px-5 mt-4 mb-3 mx-2">Ask in telegram</button></a> 
               <a href="#"><button className="bg-white  text-blue-500  rounded-lg py-2 px-5 mt-4 mb-3 mx-2">Direct email</button></a>
                </div> 
                </div>
              
  
            </div>    

                    
       
            

            
    </div>
  )
}

export default Navbar