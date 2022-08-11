import { FiArrowRightCircle, FiArrowLeftCircle } from 'react-icons/fi';


function Carousel() {
  return (
    <div className="Carousel   w-10/12 md:h-[450px] my-7 md:my-20 mx-2 md:mx-10  relative flex items-center gap-2  animate__animated  animate__fadeIn ">
      <button title='previous'><FiArrowLeftCircle className='w-4 h-4 opacity-50' /></button>
      <div className="flex h-full items-center gap-20 snap-mandatory snap-x">
        <img className='snap-center rounded-md ' src={require('./images/slider.jpeg')}  alt="slider" srcset="" />
        {/* <img className='snap-center rounded-md ' src={require('./images/slider2.jpg')}  alt="slider" srcset="" />
        <img className='snap-center rounded-md ' src={require('./images/slider3.jpg')}  alt="slider" srcset="" />
        <img className='snap-center rounded-md ' src={require('./images/playground.jpeg')}  alt="slider" srcset="" />
        <img className='snap-center rounded-md ' src={require('./images/slider4.jpg')}  alt="slider" srcset="" /> */}
      </div>
      <button title='next'><FiArrowRightCircle className='w-4 h-4  opacity-50'/></button>
    </div>
  );
}

export default Carousel;
