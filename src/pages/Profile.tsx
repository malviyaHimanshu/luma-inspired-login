import VerifyIcon from '../assets/icons/verify.svg';
import UserEditIcon from '../assets/icons/user-edit.svg';
import CopyIcon from '../assets/icons/copy.svg';
// import CopySuccessIcon from '../assets/icons/copy-success.svg';
import Post from "../components/Post";
import { Post as PostType } from "../utils/types";
import { PostData, User } from "../utils/data";

export default function Profile() {
    const data: PostType[] = PostData;

    return (
        <div className='animate-[fadeIn_0.3s_ease-in-out_forwards]'>
            {/* <div className='animate-[fadeUp_0.3s_ease-in-out_forwards] w-44 h-6 absolute bottom-40 left-1/2 -translate-x-1/2 bg-pop-green blur-3xl'></div>
            <div className='animate-[fadeUp_0.3s_ease-in-out_forwards] absolute bottom-40 left-1/2 -translate-x-1/2'>
                <button className='flex items-center gap-2 z-20'>
                    <span><img src={CopySuccessIcon} alt="" className='h-4'/></span>
                    <p className='text-sm font-medium'>Copied to Clipboard</p>
                </button>
            </div> */}
            <div className="max-w-5xl mx-auto p-5 mt-10">
                <h1 className='text-3xl font-bold'>Profile</h1>
            </div>
            <hr className="border-primary-light" />
            <div className="max-w-5xl mx-auto p-5">
                <div className="flex gap-7 flex-wrap items-start my-5">
                    <div>
                        <img className="h-24 w-24 rounded-full pointer-events-none select-none" src={User.profilePicture} alt="" />
                    </div>
                    <div>
                        <div className="flex items-center gap-1 w-full">
                            <p className="text-xl font-semibold text-white leading-none m-0 capitalize">{User.name}</p>
                            {User.is_verified && (<img src={VerifyIcon} alt="" className='h-5 pointer-events-none select-none' />)}
                        </div>
                        <p className='text-sm font-medium text-text-secondary mt-1'>@{User.username}</p>
                        <p className='text-sm text-white mt-2 leading-normal'>I am supreme, the creator, death and destroyer of the worlds.
                        <br />🏄🏻 professional surfing
                        <br />🏔️ adventures, travelling</p>
                        <div className='flex gap-3 my-5'>
                            <button className='flex gap-2 items-center bg-transparent'>
                                <span><img src={UserEditIcon} alt="" className='h-3' /></span>
                                <p className='text-xs font-medium text-white'>Edit Profile</p>
                            </button>
                            <button className='flex gap-2 items-center bg-transparent hover:scale-95 duration-100'>
                                <span><img src={CopyIcon} alt="" className='h-3' /></span>
                                <p className='text-xs font-medium text-white'>Copy Profile</p>
                            </button>
                        </div>
                    </div>
                </div>

                <Post PostData={data[0]} />
                <Post PostData={data[1]} />
            </div>
        </div>
    );
}