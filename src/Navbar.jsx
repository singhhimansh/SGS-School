import logo from './images/logo.png';
// import resume from './Himanshu_Singh.pdf'

import React, { useState } from 'react'

function Navbar() {


    const hambergur =(e)=>{
      console.log(e)
      e.name === 'menu' ? (e.name='menuclose') : (e.name='menu')

      
    }



    return (
      <div className="navbar animate__animated animate__fadeInDown animate__faster py-4  sm:px-5 bg-sky-200 border-b-2 border-sky-300 shadow-md shadow-sky-200/60">
          <div className="flex justify-between">
            {/* logo  */}
            <div className="flex flex-1 items-center justify-between">
              <a href="." className="mx-2 sm:mx-6 flex flex-nowrap items-center gap-3 md:gap-6 " target="_parent" rel="noopener noreferrer">
                <img src={logo}
                  alt="SGS school" className="w-14 sm:w-16 inline-block" srcSet="" /> 
                <span className='flex flex-col text-center text-sky-800'> 
                  <p className="uppercase text-lg sm:text-xl lg:text-2xl  font-serif font-extrabold tracking-widest ">S.G.S INTER COLLEGE</p>
                  <p className="capitalize text-xs sm:text-sm font-serif font-semibold tracking-widest">lalgari jagmohanpur </p>
                </span>
                  {/* <img className='w-1/3 ml-3 inline-block fill-slate-500' src={require('./images/sgsname.png')} alt="name" srcset="" /></a> */}
              </a>

              <button className="text-3xl cursor-pointer  lg:hidden block" onClick={(e)=>hambergur(e)}>
                {/* <!-- <ion-icon ></ion-icon> --> */}
                <svg name="menu" id="hamburgerSVG"  className="fill-slate-500 w-5 sm:w-7 hover:fill-sky-400"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
                </svg>
              </button>
            </div>

            {/* <!-- navbar on right side --> */}
            <div id="listparentdiv"
              className="lg:visible navbar mr-4 shadow lg:shadow-none align-middle lg:flex lg:items-center lg:justify-between invisible z-[1] opacity-0 lg:opacity-100 transition-all ease-in-out duration-500">
              <div id="navbarlist"
                className="w-full flex flex-col text-lg lg:flex-row items-center text-gray-800 lg:bg-none border-opacity-100 border-y-2 border-slate-600 border-solid lg:border-none lg:z-auto lg:static absolute left-0 divide-y divide-opacity-60 divide-slate-400 lg:divide-none lg:w-auto lg:py-0 py-4 lg:pl-0 pl-7 top-[100px]">
                
                <a href="." className="m-1 px-5 py-2 capitalize  hover:bg-sky-300 rounded  hover:text-sky-800 moveup duration-300" target="_parent" rel="noopener noreferrer">home</a>
              
              
                <a href="#facilities" className="m-1 px-5 py-2 capitalize  hover:bg-sky-300 rounded  hover:text-sky-800 moveup duration-300" target="_parent" rel="noopener noreferrer">
                  facilities</a>
              
              
                <a href="#faculty" className="m-1 px-5 py-2 capitalize  hover:bg-sky-300 rounded  hover:text-sky-800 moveup duration-300" target="_parent"  rel="noopener noreferrer">
                  our team</a>
              
              
                <a href="#fees" className="m-1 px-5 py-2 capitalize  hover:bg-sky-300 rounded  hover:text-sky-800 moveup duration-300" target="_parent" rel="noopener noreferrer">
                  fees</a>
              
              
                <a href='#contact' className="m-1 px-5 py-2 capitalize  hover:bg-sky-300 rounded  hover:text-sky-800 moveup duration-300" target="_parent"  rel="noopener noreferrer">contact us</a>
                
              </div>
            </div>
          </div>
      </div>
    );
  }

export default Navbar;