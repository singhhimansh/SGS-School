import { FiArrowRightCircle, FiArrowLeftCircle } from 'react-icons/fi';

function App() {
  return (
    <div className="Carousel relative m-20  animate__animated  animate__fadeIn ">
      <button><FiArrowLeftCircle className='absolute w-7 h-7 -left-9 top-1/2 opacity-50' /></button>
      <button><FiArrowRightCircle className='absolute w-7 h-7 -right-9 top-1/2 opacity-50'/></button>
      <img src={require('./images/slider.jpeg')} className='rounded-md ' alt="slider" srcset="" />
    </div>
  );
}

export default App;
