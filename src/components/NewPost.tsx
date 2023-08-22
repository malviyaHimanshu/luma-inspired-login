import { useEffect, useState } from "react";
import VerifyIcon from '../assets/icons/verify.svg';
import SendIcon from '../assets/icons/send.svg';
import { User } from "../utils/data";

export default function NewPost({isVisible, setIsVisible}: any) {
    const [content, setContent] = useState('');
    const [isClosing, setIsClosing] = useState(false);

    const closeModal = () => {
        setIsClosing(true);
        setTimeout(() => {
            document.body.style.overflowY = 'unset';
            setIsClosing(false);
            setIsVisible(false);
        }, 300);
    }

    useEffect(() => {
        if(isVisible) {
            document.body.style.overflow = 'hidden';
        }
        const handleOutsideClick = (event: any) => {
            if(isVisible && !event.target.closest('#modal-content')) {
                closeModal();
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        }
    }, [isVisible, closeModal]);

    function handleContent(event: any) {
        setContent(formatText(event.target.innerHTML));
    }

    function sendPost() {
        if(content === '') {
            return;
        }
        console.log('Post sent:', content);
        closeModal();
    }

    function formatText(htmlString: string) {
        const text = htmlString.replace(/<div>/g, '\n').replace(/<\/div>/g, '').replace(/<br>/g, '\n').replace(/&nbsp;/g, ' ').replace(/<p>/g, '').replace(/<\/p>/g, '\n');
        return text;
    }

    return (
        <>
            {isVisible && (
                <div id="modal-overlay" className={"h-screen w-screen bg-black bg-opacity-25 backdrop-blur-sm overflow-hidden fixed z-20 top-0 left-0 right-0 bottom-0" + (isClosing ? " animate-[fadeOut_0.3s_ease-in-out_forwards]" : " animate-[fadeIn_0.3s_ease-in-out_forwards]")}>
                    <div id="modal-content" className="max-w-5xl mx-auto mt-40 px-5">
                        <div className={"relative w-full min-h-[150px] p-5 bg-primary-dark border border-primary-light rounded-xl flex items-start gap-3" + (isClosing ? " animate-[fadeDown_0.3s_ease-in-out_forwards]" : " animate-[fadeUp_0.3s_ease-in-out_forwards]")}>
                            <img className="h-[32px] w-[32px] rounded-full pointer-events-none select-none" src={User.profilePicture} alt='' />

                            <div className='w-full'>
                                <div className="flex items-center gap-1 w-full">
                                    <p className="text-sm font-semibold text-white leading-none m-0 lowercase">{User.username}</p>
                                    {User.is_verified && (<img src={VerifyIcon} alt="" className='h-4 pointer-events-none select-none' />)}
                                </div>
                                <div className='mt-2 w-full'>
                                    <p onInput={(e) => handleContent(e)} className='text-sm text-white outline-none empty:before:content-[attr(placeholder)] empty:before:text-text-secondary placeholder:text-text-secondary' contentEditable placeholder="Write your thought, you're loved here."></p>
                                </div>
                            </div>
                            <img src={SendIcon} alt="" onClick={sendPost} className={'absolute bottom-5 right-5 h-5 w-5 transition-all ease-in-out duration-100 select-none cursor-pointer' + (content.length>0 ? ' opacity-100': ' opacity-50')} />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}