import HomeIcon from '../assets/icons/home.svg';
import NotificationIcon from '../assets/icons/notification.svg';
import SettingIcon from '../assets/icons/setting.svg';
import SearchIcon from '../assets/icons/search-normal.svg';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NewPost from '../components/NewPost';
import { useState } from "react";
import { User } from '../utils/data';
import VerifyIcon from '../assets/icons/verify.svg';

export default function Navbar() {
    const [showCreatePost, setShowCreatePost] = useState(false);
    const [themeColor, setThemeColor] = useState('bg-pop-blue');
    const location = useLocation();
    const [showContainer, setShowContainer] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        if(location.pathname==='/') {
            setThemeColor('bg-pop-blue')
        } else if(location.pathname==='/activity') {
            setThemeColor('bg-error')
        } else if(location.pathname==='/settings') {
            setThemeColor('bg-warning')
        } else if(location.pathname==='/profile') {
            setThemeColor('bg-pop-green')
        }

        const handleOutsideClick = (event: any) => {
            if(showContainer && !event.target.closest('#container-content')) {
                toggleContainer();
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        }
    }, [location.pathname, showContainer, toggleContainer]);

    function createPost() {
        setShowCreatePost(true);
    }

    function toggleContainer() {
        if(showContainer) {
            setIsClosing(true);
            setTimeout(() => {
                setIsClosing(false);
                setShowContainer(!showContainer);
            }, 200);
            return;
        }
        setShowContainer(!showContainer);
    }

    return (
        <>
            <div className={'fixed w-[150%] mx-auto top-0 right-0 left-1/2 -translate-x-1/2 h-10 blur-3xl ' + themeColor}></div>
            {showCreatePost && <NewPost isVisible={showCreatePost} setIsVisible={setShowCreatePost} />}
            <nav className="z-10 fixed top-0 right-0 left-0 backdrop-blur-md">
                <div className="max-w-5xl mx-auto my-5 px-5 flex items-center justify-between">
                    <div className='flex gap-6'>
                        <Link to='/'>
                            <div className={'flex items-center gap-2 hover:opacity-100 transition-all ease-in-out duration-100 cursor-pointer' + (location.pathname=='/' ? ' opacity-100' : ' opacity-50')}>
                                <img src={HomeIcon} alt="" className='h-4 pointer-events-none select-none' loading='lazy' />
                                <p className='text-sm font-semibold hidden sm:block text-white select-none'>Home</p>
                            </div>
                        </Link>
                        <Link to='/activity'>
                            <div className={'flex items-center gap-2 hover:opacity-100 transition-all ease-in-out duration-100 cursor-pointer' + (location.pathname=='/activity' ? ' opacity-100' : ' opacity-50')}>
                                <img src={NotificationIcon} alt="" className='h-4 pointer-events-none select-none' loading='lazy' />
                                <p className='text-sm font-semibold hidden sm:block text-white select-none'>Activity</p>
                            </div>
                        </Link>
                        <Link to='/settings'>
                            <div className={'flex items-center gap-2 hover:opacity-100 transition-all ease-in-out duration-100 cursor-pointer' + (location.pathname=='/settings' ? ' opacity-100' : ' opacity-50')}>
                                <img src={SettingIcon} alt="" className='h-4 pointer-events-none select-none' loading='lazy' />
                                <p className='text-sm font-semibold hidden sm:block text-white select-none'>Settings</p>
                            </div>
                        </Link>
                    </div>
                    <div className='flex items-center gap-6'>
                        <p onClick={createPost} className='text-sm font-semibold opacity-80 hover:opacity-100 transition-all ease-in-out duration-100 cursor-pointer select-none'>Post</p>
                        <img src={SearchIcon} alt="" className='h-4 opacity-50 hover:opacity-100 transition-all ease-in-out duration-100 cursor-pointer select-none' loading='lazy' />
                        <div className='relative'>
                            <img onClick={toggleContainer} className='h-7 w-7 rounded-full ring-4 ring-transparent hover:ring-white hover:ring-opacity-10 hover:scale-95 transition-all duration-150 ease-in-out select-none' src={User.profilePicture} alt=''></img>
                            {showContainer && (<div onClick={toggleContainer} id='container-content' className={'absolute top-10 right-0 min-w-[150px] pt-3 bg-primary-dark border border-primary-light rounded-xl'  + ( isClosing ? ' animate-[fadeHideTranslateUp_0.2s_ease-in-out_forwards]' : ' animate-[fadeShowTranslateDown_0.2s_ease-in-out_forwards]')}>
                                <div className='px-3'>
                                    <div className="flex items-center gap-1 w-full">
                                        <p className="text-sm font-semibold text-white">{User.name}</p>
                                        {User.is_verified && (<img src={VerifyIcon} alt="" className='h-4 pointer-events-none select-none' />)}
                                    </div>
                                    {/* <p className='text-sm font-semibold text-white'>{User.name}</p> */}
                                    <p className='text-xs font-medium text-text-secondary'>{User.username}</p>
                                </div>
                                <hr className='border-primary-light mt-3' />
                                <Link to='/profile'><p className="text-xs font-medium text-text-primary hover:bg-primary-light transition-all ease-in-out duration-100 px-3 py-2">Profile</p></Link>
                                <Link to='/settings'><p className="text-xs font-medium text-text-primary hover:bg-primary-light transition-all ease-in-out duration-100 px-3 py-2">Settings</p></Link>
                                <hr className='border-primary-light' />
                                <Link to='/login'><p className="text-xs font-bold text-text-primary hover:bg-primary-light transition-all ease-in-out duration-100 rounded-b-lg px-3 py-3">Logout</p></Link>
                            </div>)}
                        </div>
                    </div>
                </div>
            </nav>
            <div className='h-16 w-full'></div>
        </>
    );
}