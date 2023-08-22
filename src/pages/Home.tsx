import Post from "../components/Post";
import { Post as PostType } from "../utils/types";
import { PostData } from "../utils/data";

export default function Home() {
    const data: PostType[] = PostData;

    return (
        <div className="animate-[fadeIn_0.3s_ease-in-out_forwards]">
            <div className="max-w-5xl mx-auto p-5 mt-10">
                <h1 className='text-3xl font-bold'>Town Hall</h1>
            </div>
            <hr className="border-primary-light" />
            <div className="max-w-5xl mx-auto p-5">
                <Post PostData={data[0]} />
                <Post PostData={data[1]} />
            </div>
        </div>
    );
}