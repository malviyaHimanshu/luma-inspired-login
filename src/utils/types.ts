export type Post = {
    id: number;
    user: User;
    created_at: string;
    content: string;
    likes: number;
}

export type User = {
    id: number;
    name: string;
    username: string;
    is_verified: boolean;
    profilePicture: string;
}