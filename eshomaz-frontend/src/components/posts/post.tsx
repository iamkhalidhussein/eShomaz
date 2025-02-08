import { MessageCircle, Send } from 'lucide-react';
import { userData } from '@/data/mock-data';

interface PostProps {
    post: {
        id: number;
        author: string;
        avatar: string;
        content: string;
        image?: string;
        likes: number;
        comments: number;
        timeAgo: string;
    };
};

export const Post = ({ post }: PostProps) => {
    return (
        <div className="bg-white rounded-lg shadow-md mb-6">
        <div className="p-4">
            <div className="flex items-center space-x-3 mb-4">
            <img src={post.avatar} alt={post.author} className="w-10 h-10 rounded-full" />
            <div>
                <h3 className="font-semibold">{post.author}</h3>
                <p className="text-gray-500 text-sm">{post.timeAgo}</p>
            </div>
            </div>
            <p className="mb-4">{post.content}</p>
            {post.image && (
            <img src={post.image} alt="" className="w-full rounded-lg mb-4" />
            )}
            <div className="flex items-center justify-between text-gray-500 border-t pt-4">
            <button className="flex items-center space-x-2 hover:text-blue-600">
                <span>👍 {post.likes}</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-blue-600">
                <MessageCircle className="h-5 w-5" />
                <span>{post.comments} comments</span>
            </button>
            </div>
        </div>
        <div className="px-4 py-3 border-t">
            <div className="flex items-center space-x-3">
            <img
                src={userData.avatar}
                alt="Your avatar"
                className="w-8 h-8 rounded-full"
            />
            <div className="flex-grow relative">
                <input
                type="text"
                placeholder="Write a comment..."
                className="bg-gray-100 rounded-full py-2 px-4 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button className="absolute right-3 top-2.5 text-blue-600">
                <Send className="h-5 w-5" />
                </button>
            </div>
            </div>
        </div>
    </div>
    )
};