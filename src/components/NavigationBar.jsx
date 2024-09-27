import React, { useState, useEffect } from 'react'
import { HiOutlineBars3 } from "react-icons/hi2";
import YoutubeLogo from '../assets/YoutubeLogo.png';
import { NavLink } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { MdKeyboardVoice } from 'react-icons/md';
import { BsPersonCircle } from "react-icons/bs";
import SearchInput from './SearchInput';
import { IoMdClose } from "react-icons/io";


function NavigationBar() {
    const [expand, isexpand] = useState(true);
    const [open, isopen] = useState(false)
    console.log(expand)

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth > 428 && open) {
            isopen(false);
          }
        };
    
        window.addEventListener('resize', handleResize);
    
        handleResize();
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, [open, isopen]);
      
      useEffect(() => {
        const handleResize = () => {
         if (window.innerWidth <= 1024) {
            isexpand(false);                                                                                
    
    
          } else {            
            isexpand(true);                        
                                                   
          }
        };
    
        window.addEventListener("resize", handleResize);
    
        handleResize();
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
     
  return (
    <>
    <section>
      <nav className='flex flex-col'>
      { !open ? (  
        <div className='h-14 w-full bg-background pl-0 after358:pl-6 pr-6 flex items-center overflow-hidden justify-between'>
                 {/* Logo and sideBr toggleButton */}
            <div className='flex items-center'>
               <button onClick={(() => (isexpand(!expand)))} className="rounded-full hover:bg-Hover w-10 h-10">
                 <HiOutlineBars3 className="text-text h-7 w-10 "/>
                </button>
               <NavLink to='/'>
                 <img src={YoutubeLogo} alt="youtube-logo" className="min-w-18 max-w-[100px] ml-3 object-cover"/>
               </NavLink>
            </div>
                  {/* SearchBar */}
            <section className="flex items-center justify-center p-4 w-search flex-grow">
              <div className='hidden after428:block w-full max-w-search'>
                  <SearchInput />
              </div>
            
                    {/* smallscreen Search Button */}
            <div onClick={( () => isopen(!open))} className=" ml-2 after428:hidden flex min-w-10 min-h-10 rounded-full bg-secondary after358:ml-4 justify-center items-center hover:bg-Hover">
               <FaSearch className="text-text" />
            </div>
                       {/* mic Button */}
              <button className="ml-2 mr-2 min-w-10 min-h-10 rounded-full bg-secondary after358:ml-5 flex justify-center items-center hover:bg-Hover">
                <MdKeyboardVoice className="text-text w-6 h-6" />
              </button>
             </section>

                      {/* Login Button */}
              <button className=" w-auto h-auto after428:flex gap-1 items-center rounded-3xl border border-Hover p-2 hover:border-transparent hover:bg-secondary after428:min-w-[86px] after428:min-h-[42px] whitespace-nowrap ">
                 <BsPersonCircle className="text-text" />
                 <p className="hidden  after428:text-text text-sm after428:block">Sign In</p>
               </button>
        </div>) :
        (
        <div className=" after428:hidden pl-6  w-full h-14 bg-background pr-6 flex items-center overflow-hidden  justify-between">
          <SearchInput />
            <button  onClick={( () => isopen(!open))} className="ml-3 min-w-10 min-h-10 rounded-full bg-secondary after358:ml-4 flex justify-center items-center">
              <IoMdClose className="text-text w-6 h-6" />
            </button>
        </div>

        )}

        <main className='grid grid-cols-[240px_1fr]'>
         <aside>
           <div className={`bg-background  h-screen ${expand ? 'max-w-[240px]' : 'max-w-[50px]'}
            overflow-hidden pt-5 relative`}>
           
           </div>
          </aside>
          <div className='bg-blue-500'>
            </div>
        </main>
      </nav>
    </section>
    </>
  )
}

export default NavigationBar