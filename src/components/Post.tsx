import HeartIcon from '../assets/icons/heart.svg';
import HeartFilledIcon from '../assets/icons/heart-filled.svg';
import VerifyIcon from '../assets/icons/verify.svg';
import { useEffect, useState } from 'react';
import { Post } from '../utils/types';

export default function Post({PostData}: {PostData: Post}) {
    const [isLiked, setIsLiked] = useState(false);
    const [likes, setLikes] = useState(89);
    const [isVerified, setIsVerified] = useState(true);

    useEffect(() => {
        setLikes(PostData.likes);
        setIsVerified(PostData.user.is_verified);
    }, []);

    // TODO: update likes on database
    function likePost() {
        setIsLiked(!isLiked);
        setLikes(isLiked ? likes-1 : likes+1);
    }

    return (
        <div className="w-full p-5 mb-3 bg-primary-dark border border-primary-light rounded-xl flex items-start gap-3">
            <img className="h-[32px] w-[32px] rounded-full pointer-events-none select-none" src={PostData.user.profilePicture} alt='' />

            <div className='w-full'>
                <div className='flex items-center justify-between w-full'>
                    <div className="flex items-center gap-3">
                        <div className='flex items-center gap-1'>
                            <p className="text-sm font-semibold text-white leading-none m-0 lowercase">{PostData.user.username}</p>
                            {isVerified && (<img src={VerifyIcon} alt="" className='h-4 pointer-events-none select-none' />)}
                        </div>
                         {/* TODO: add dynamic timestamp */}
                        <p className="text-xs text-text-secondary leading-none">5min</p>
                    </div>
                    <div className="flex items-center gap-1 cursor-pointer" onClick={likePost}>
                        <p className={'text-xs select-none' + (isLiked ? ' text-success': ' text-text-secondary')}>{likes}</p>
                        {isLiked ? (
                            <img src={HeartFilledIcon} alt="" className='h-3 pointer-events-none select-none hover:scale-110 transition-all ease-in-out duration-200' />
                        ):(
                            <img src={HeartIcon} alt="" className='h-4 pointer-events-none select-none hover:scale-110 transition-all ease-in-out duration-200' />
                        )}
                    </div>
                </div>
                <div className='mt-2 w-full'>
                    <p className='text-sm text-white'>{PostData.content}</p>
                </div>
            </div>
        </div>
    );
}