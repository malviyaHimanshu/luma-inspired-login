import { Post as PostType, User as UserType } from "./types";

// TODO: add post data also for each user
export const User: UserType = {
    id: 1,
    name: "The God",
    username: 'supreme_leader',
    is_verified: true,
    profilePicture: "https://pbs.twimg.com/profile_images/1649928417117077507/IvnMwjLo_400x400.jpg",
}

export const PostData: PostType[] = [
    {
        id: 1,
        user: {
            id: 1,
            name: "Sarthak Sharma",
            username: 'sarthak_ishu11',
            is_verified: false,
            profilePicture: "https://pbs.twimg.com/profile_images/1683529035421237263/3OO4YYwr_400x400.jpg",
        },
        content: 'We all want to help one another. Human beings are like that. We want to live by each other’s happiness, not by each other’s misery.',
        created_at: '',
        likes: 43,
    },
    {
        id: 2,
        user: {
            id: 2,
            name: "Charles Patterson",
            username: 'CharlesPattson',
            is_verified: true,
            profilePicture: "https://pbs.twimg.com/profile_images/1551594698409648129/gHZ8lE9n_400x400.jpg",
        },
        content: 'That moment the client accepts the pricing offer and you know you should have priced higher.',
        created_at: '',
        likes: 320,
    },
];