import { Link } from 'react-router-dom';
import onboarding from '../assets/img/onboarding.png';

export default function Onboarding() {

    return (
        <div className="bg-[#090514] h-screen w-screen absolute top-0 left-0 right-0 bottom-0 z-50 grid place-content-center">

            <div className='w-fit h-fit relative'>
                <img src={onboarding} alt="" className='select-none pointer-events-none'/>
                <Link to='/login'>
                    <div className='absolute top-[40%] right-[25%] p-5 hover:p-6 hover:scale-125 border-opacity-50 hover:border-opacity-100 transition-all ease-in-out duration-150 border border-red-600 h-20 w-20 grid place-content-center rounded-full cursor-pointer'></div>
                </Link>
                <Link to='/remainbrokie'>
                    <div className='absolute top-[38%] left-[24%] p-4 hover:p-5 hover:scale-125 border-opacity-50 hover:border-opacity-100 transition-all ease-in-out duration-150 border border-blue-600 h-20 w-20 grid place-content-center rounded-full cursor-pointer'></div>
                </Link>
            </div>
        </div>
    );
}