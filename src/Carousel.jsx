// import { FiArrowRightCircle, FiArrowLeftCircle } from 'react-icons/md';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import React, {useState} from 'react';
import dataSlider from './dataSlider';
import './carousel.css';


function Carousel() {



  return (
    <div className="Carousel h-44 md:h-[450px] relative my-7 md:my-16 mx-2  flex justify-center animate__animated  animate__fadeIn">
        <button  title='previous' className='absolute top-1/2 left-2'><MdArrowBackIos className='w-5 h-5 hover:scale-125  fill-slate-400 opacity-1' /></button>
        <img className=' snap-center w-full h-full object-cover rounded-md ' src={require("./images/slider/slider1.jpeg")} alt="slider" srcset="" />
        {/* <div className='snap-x snap-mandatory flex overflow-x-auto gap-32'>
        
        { dataSlider.map((obj,index) => {
            return (
              <img className=' snap-center w-full h-full object-cover rounded-md ' src={require(`./images/slider/${obj.title}`)}  alt="slider" srcset="" />

            );
          })
        }
        </div> */}


        <button title='next' className='absolute top-1/2 right-2'><MdArrowForwardIos className='w-5 h-5 hover:scale-125  fill-slate-400 opacity-1'/></button>
    </div>
  );
}

export default Carousel;
