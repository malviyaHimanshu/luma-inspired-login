import Auth from "../components/Auth";
import Otp from "../components/Otp";
import { useState } from "react";

export default function Login() {
    const [otpPage, setOtpPage] = useState(false);
    const [email, setEmail] = useState('');
    
    function handlePageChange(data: any) {
        setOtpPage(data);
    }
    function handleEmail(data: any) {
        setEmail(data);
    }

    return (
        <>
            <div className="h-screen w-screen absolute top-0 left-0 right-0 bottom-0 bg-primary z-50 grid place-content-center">
                <div className='relative animate-[fadeIn_0.3s_ease-in-out_forwards]'>
                    {otpPage ? (<Otp isOtpPage={handlePageChange} email={email} />) : <Auth isOtpPage={handlePageChange} handleEmail={handleEmail} />}

                    <div className='absolute h-40 animate-[glow_3s_ease-in-out_infinite_alternate] w-72 bg-pop-green opacity-60 top-0 left-1/2 -translate-x-1/2 -z-10 blur-3xl'></div>
                    <div className='absolute h-60 animate-[glow_3s_ease-in-out_infinite_alternate] w-44 bg-pop-blue opacity-60 bottom-0 right-0 -z-10 blur-2xl'></div>
                    <div className='absolute h-60 animate-[glow_3s_ease-in-out_infinite_alternate] w-44 bg-pop-pink opacity-50 -bottom-2 left-0 -z-10 blur-2xl'></div>
                </div>
            </div>
        </>
    );
}