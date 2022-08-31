import {FaPhoneAlt, FaFacebook, FaRegCopyright } from 'react-icons/fa';
import {HiMailOpen, HiHeart} from 'react-icons/hi';
import {ImLocation2} from 'react-icons/im';

function Footer() {
    return ( 
        <div id='contact' className="w-full bg-sky-300/70 flex flex-col justify-center border-t-2 border-sky-400/40 text-[10px] md:text-xs ">
            <div className="py-8 md:p-12 flex justify-center">
                <div className="w-11/12 text-gray-800 flex flex-wrap justify-evenly items-center">
                    <div className='flex flex-nowrap items-center gap-3'>
                        <ImLocation2 className='leading-1'/>
                        <address className="">
                        Village- Lalgarhi <br />Post- Hasona, Jagmohanpur  <br />Aligarh, Uttar Pradesh <br />202129
                        </address>
                    </div>
                    <hr className="w-px h-full bg-gray-600" />
                    <div className="flex flex-col">
                        <a href="tel:+919756226127" className='hover:text-teal-600 duration-150'><FaPhoneAlt className='m-2 inline'/>+919756226127</a>
                        <a href="mailto:sgsschoollalgarhi@gmail.com" className='hover:text-teal-600 duration-150'> <HiMailOpen className='m-2 inline'/> sgsschoollalgarhi@gmail.com</a>
                        <a href="https://www.facebook.com/sgsschoollalgarhi" className='hover:text-teal-600 duration-150'><FaFacebook className='m-2 inline' />Facebook</a>
                    </div>
                </div>
            </div>
            <div className='p-4 bg-slate-800 text-sky-200   border-t-4 border-slate-600/90 flex justify-evenly'>
                <h1 className=""><FaRegCopyright className='inline'/> All rights reserved | S.G.S School</h1>
                <h1 className="">Built with <HiHeart className='inline fill-red-500'/> by <a href="https://himanshusingh.site/" className='hover:text-emerald-300 duration-150' target='_blank'>Himanshu Singh</a></h1>
            </div>
        </div>
    );
    
}

export default Footer;