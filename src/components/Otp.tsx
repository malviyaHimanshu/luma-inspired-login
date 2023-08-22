import { useEffect, useState } from 'react';
import OtpInput from './OtpInput';
import ArrowLeftIcon from '../assets/icons/arrow-left.svg';

export default function Otp({isOtpPage, email}: any) {
    const [otp, setOtp] = useState('');
    const [timeLeft, setTimeLeft] = useState(59);
    const [resendOtp, setResendOtp] = useState(false);
    const [authPage, setAuthPage] = useState(false);
    const [goingBack, setGoingBack] = useState(false);

    useEffect(() => {
        if(timeLeft === 0) {
            setResendOtp(true);
            setTimeLeft(59);
        };
        const intervalId = setInterval(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);
        return () => clearInterval(intervalId);
    }, [timeLeft])

    function sendCode() {
        if(resendOtp) {
            console.log('Code sent');
            setResendOtp(false);
            setTimeLeft(59);
        }
    }

    function handleClick() {
        if(!authPage) {
            setGoingBack(true);
            setTimeout(() => {
                setGoingBack(false);
                setAuthPage(true);
                isOtpPage(false);
            }, 400);
        }
    }

    return (
        <div className="p-5 bg-primary-dark border border-primary-light rounded-2xl w-80 max-w-sm transition-all duration-200 ease-in-out overflow-hidden">
            <div className={goingBack ? 'animate-[fadeOut_0.3s_ease-in-out_forwards]' : 'animate-[fadeIn_0.3s_ease-in-out_forwards]'}>
                <div onClick={handleClick} className='w-8 h-8 rounded-full bg-primary-light grid place-content-center cursor-pointer'><img src={ArrowLeftIcon} alt="" className='h-4 pointer-events-none select-none' /></div>
                <div className={goingBack ? 'animate-[slideGoingOut_0.5s_ease-in-out_forwards]' : 'animate-[slideIncoming_0.5s_ease-in-out_forwards]'}>
                    <p className='text-lg font-semibold text-white mt-7'>Enter Code</p>
                    <p className='text-sm font-medium text-text-secondary mt-1'>Please enter the code sent by Supreme Leader to <b className='text-text-primary'>{email}</b>.</p>

                    <OtpInput value={otp} onChange={(val) => setOtp(val)} />
                    {!resendOtp && (<p className='text-xs font-medium text-text-secondary mt-5 mb-2'>Resend code in {timeLeft}s</p>)}
                </div>
                {resendOtp ? (
                    <button className='w-full mt-3 px-3 py-2 text-sm font-semibold' onClick={sendCode}>Resend Code</button>
                ) : (
                    <button className='w-full mt-3 px-3 py-2 text-sm font-semibold'>Login</button>
                )}
            </div>
        </div>
    );
}