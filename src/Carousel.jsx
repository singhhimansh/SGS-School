// import { FiArrowRightCircle, FiArrowLeftCircle } from 'react-icons/md';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import React, {useState} from 'react';
import dataSlider from './dataSlider';

import './carousel.css';


function Carousel() {

  let [slideForward, setForward] = useState(0);


  
  const handleForward = () =>{
    
    if  (slideForward === 11) {slideForward=0}
    console.log(slideForward);
    setForward(slideForward+1);
    
    
  }

  const handleBackward =()=> {

    if  (slideForward === 0) {slideForward=11}
    console.log(slideForward);
    setForward(slideForward-1);
    

  }





  return (
  
    <section className="Carousel w-full bg-red-200 h-52 sm:h-[350px]  lg:h-[490px] relative my-5 md:my-8 mx-2  flex justify-center touch-pan-x animate__animated  animate__fadeIn">
        <button  title='previous' onClick={()=>handleBackward()} className='z-10 px-3 h-full absolute top-0 left-0 hover:bg-gray-500/10' ><MdArrowBackIos className='w-10 h-10 hover:scale-125 fill-white opacity-1 hover:fill-yellow-200' /></button>
        {/* <img className=' snap-center w-full h-full object-cover rounded-md ' src={require("./images/slider/slider1.jpeg")} alt="slider" srcset="" /> */}
        <div className=''>
        
        { dataSlider.map((obj,index) => {
            return (
              <img key={obj.id} id={obj.id} className={`touch-pan-x snap-center absolute top-0 right-0 w-full h-full object-fill rounded-md ${ slideForward === index ? '' : 'hidden' } `} src={require(`./images/slider/${obj.title}`)}  alt="slider" srcSet="" />

            );
          })
        }
        </div>


        <button title='next' className='absolute  px-3  h-full top-0 right-0 hover:bg-gray-500/10' onClick={(slideForward)=> handleForward(slideForward) } ><MdArrowForwardIos className='w-10 h-10 hover:scale-125  fill-white opacity-1 hover:fill-yellow-200'/></button>
    </section>
    
  );
}

export default Carousel;
