import logo from './images/logo.png';
// import resume from './Himanshu_Singh.pdf'

import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import {CgMenuRight} from 'react-icons/cg';
import {IoClose} from 'react-icons/io5';




function Navbar() {

  const [hambState, setHambState] = useState('close');

  const handleMenu = (e)=>{
    e.preventDefault();
    console.log(e)
    console.log(e.target.id);
    console.log('hamstate',  hambState);
    hambState === 'close' ? setHambState('open') : setHambState('close');
    
  }





    return (
    
      <section className="navbar animate__animated animate__fadeInDown animate__faster py-4  sm:px-5 bg-sky-200 border-b-2 border-sky-300 shadow-md shadow-sky-200/60">
          <div className="flex justify-between items-center">
            {/* logo  */}
            <div className="flex flex-1 items-center justify-between">
              <Link to="/" className="mx-2 sm:mx-6 flex flex-nowrap items-center gap-3 md:gap-6 " rel="noopener noreferrer">
                <img src={logo}
                  alt="SGS school" className="w-14 sm:w-16 inline-block" srcSet="" /> 
                <span className='flex flex-col text-center text-sky-800'> 
                  <p className="uppercase text-lg sm:text-xl lg:text-2xl  font-serif font-extrabold tracking-widest ">S.G.S INTER COLLEGE</p>
                  <p className="capitalize text-xs sm:text-sm font-serif font-semibold tracking-widest">lalgarhi jagmohanpur </p>
                </span>
                
              </Link>
            </div>

            {/* <!-- navbar on right side --> */}

            <div>
              {/*menu for pc */}
              <div id="menuForPC"
                className="hidden mr-7 font-calibre  text-lightslate xl:flex gap-3 justify-center items-center
                text-lg text-gray-800">
                
                <Link to="/" className="m-1 px-5 py-2 capitalize  hover:bg-sky-300 rounded  hover:text-sky-800 moveup duration-300" rel="noopener noreferrer">home</Link>
              
                <Link to="/#faculty" className="m-1 px-5 py-2 capitalize  hover:bg-sky-300 rounded  hover:text-sky-800 moveup duration-300" target="_parent"  rel="noopener noreferrer">
                  our team</Link>
              
                <Link to="/#facilities" className="m-1 px-5 py-2 capitalize  hover:bg-sky-300 rounded  hover:text-sky-800 moveup duration-300" target="_parent" rel="noopener noreferrer">
                  facilities</Link>
              
              
              
              
                <Link to="/events" className="m-1 px-5 py-2 capitalize  hover:bg-sky-300 rounded  hover:text-sky-800 moveup duration-300" rel="noopener noreferrer">
                  Events</Link>
              
              
                <Link to='/#contact' className="m-1 px-5 py-2 capitalize  hover:bg-sky-300 rounded  hover:text-sky-800 moveup duration-300" target="_parent"  rel="noopener noreferrer">contact us</Link>
                
              </div>


              {/* menu for phone */}

              <div id=""
                className="align-middle md:flex md:items-center  transition-all ease-in-out duration-500
                text-lg text-gray-800">

                <button name='hambtn' title='menu' id="hambtn" className={`relative text-3xl cursor-pointer mx-2 xl:hidden block ${ hambState==='close'? '' : 'z-20 ' }`} onClick={(e)=>handleMenu(e)}>
                  <CgMenuRight className={`w-9 h-9 ${ hambState==='close'? 'stroke-slate-400' : 'hidden' }`}/>
                  <IoClose className={` w-9 h-9  stroke-1 ${ hambState==='close'? 'hidden ' : 'fill-slate-600/80 animate__animated animate__rotateIn animate__faster' }`}/>
                </button>

                <div className={`h-screen lg:hidden fixed z-10  font-calibre text-slate-50  bg-sky-400/70 border-l border-l-lightestnavy/80 flex flex-col justify-center items-center  gap-10   ${ hambState==='close'? 'hidden top-0 right-0 ' : 'w-2/3  top-0 right-0 touch-none duration-200 ease-in-out transition-all' } `}>
                
                  <Link to="/" className="m-1 px-5 py-2 capitalize  hover:bg-sky-300 rounded  hover:text-sky-800 moveup duration-300" rel="noopener noreferrer" onClick={()=> setHambState('close')} >home</Link>
                
                  <Link to="/#faculty" className="m-1 px-5 py-2 capitalize  hover:bg-sky-300 rounded  hover:text-sky-800 moveup duration-300" target="_parent"  rel="noopener noreferrer" onClick={()=> setHambState('close')}>
                    our team</Link>
                
                  <Link to="/#facilities" className="m-1 px-5 py-2 capitalize  hover:bg-sky-300 rounded  hover:text-sky-800 moveup duration-300" target="_parent" rel="noopener noreferrer" onClick={()=> setHambState('close')}>
                    facilities</Link>
                
                
                
                
                  <Link to="/events" className="m-1 px-5 py-2 capitalize  hover:bg-sky-300 rounded  hover:text-sky-800 moveup duration-300" rel="noopener noreferrer" onClick={()=> setHambState('close')}>
                    Events</Link>
                
                
                  <Link to='/#contact' className="m-1 px-5 py-2 capitalize  hover:bg-sky-300 rounded  hover:text-sky-800 moveup duration-300" target="_parent"  rel="noopener noreferrer" onClick={()=> setHambState('close')}>contact us</Link>

                </div>
                
              </div>
            </div>
          </div>
      </section>

    );
}

export default Navbar;