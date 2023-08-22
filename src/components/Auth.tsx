import HeartIcon from '../assets/icons/heart-big.svg';
import { useState } from 'react';

const isEmail = (email: any) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

export default function Auth({isOtpPage, handleEmail}: any) {
    const [otpPage, setOtpPage] = useState(false);
    const [goingNext, setGoingNext] = useState(false);
    const [email, setEmail] = useState('');
    const [isError, setIsError] = useState(false);
    const [effect, setEffect] = useState(false);

    function handleClick() {
        if(email === '' || !isEmail(email)) {
            setIsError(true);
            setEffect(true);
            return;
        }
        handleEmail(email);
        if(!otpPage) {
            setGoingNext(true);
            setTimeout(() => {
                setGoingNext(false);
                setOtpPage(true);
                isOtpPage(true);
            }, 200);
        }
    }

    function handleInput(e: any) {
        setEmail(e.target.value);
        if(isEmail(e.target.value)) {
            setIsError(false);
        }
    }

    function handleKeyUp(e: any) {
        if(e.key === 'Enter') {
            handleClick();
        }
    }

    return (
        <div className={"py-5 bg-primary-dark border border-primary-light rounded-2xl w-80 max-w-sm transition-all duration-200 ease-in-out" + (effect && " animate-wiggle")} onAnimationEnd={() => setEffect(false)}>
            <div className={goingNext ? 'animate-[fadeOut_0.3s_ease-in-out_forwards]' : 'animate-[fadeIn_0.3s_ease-in-out_forwards]'}>
                <div className='px-5'>
                    <div className='w-12 h-12 rounded-full bg-primary-light grid place-content-center'><img src={HeartIcon} alt="" className='h-6 pointer-events-none select-none' /></div>
                    <p className='text-lg font-semibold text-white mt-7'>You're loved here.</p>
                    <p className='text-sm font-medium text-text-secondary mt-1'>Please sign in or sign up below.</p>
                    <div>
                        <p className='text-sm text-white font-medium mt-5'>Email</p>
                        <input onInput={e => handleInput(e)} onKeyDown={handleKeyUp} type="text" id='email' autoComplete='off' placeholder='you@example.com' className={'placeholder:text-text-secondary placeholder:font-medium placeholder:text-sm rounded-lg border focus:border-text-primary transition-all ease-in-out duration-150 bg-transparent w-full mt-2 font-medium text-sm text-text-primary px-3 py-2 outline-none' + (isError ? ' border-pop-pink': ' border-primary-light')} />
                    </div>
                    <button onClick={handleClick} className='w-full mt-3 px-3 py-2 text-sm font-semibold'>Continue with Email</button>
                </div>
                <hr className='border-primary-light my-4' />
                <div className='px-5'>
                    <button className='w-full px-3 py-2 text-sm font-semibold bg-primary-light border-primary-light text-text-primary flex items-center justify-center gap-2'>
                        <span><img src="https://www.seekpng.com/png/full/201-2014535_google-icon-logo-black-and-white-french-flag.png" alt="" className='h-3 opacity-70' /></span>
                        Sign in with Google
                    </button>
                </div>
            </div>
        </div>
    );
}