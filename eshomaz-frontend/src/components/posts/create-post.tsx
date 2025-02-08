import React from 'react';
import { Image, Smile } from 'lucide-react';
import { userData } from '@/data/mock-data';

interface CreatePostProps {
    newPost: string;
    setNewPost: (value: string) => void;
    onSubmit: (e: React.FormEvent) => void;
};

export const CreatePost = ({ newPost, setNewPost, onSubmit }: CreatePostProps) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <form onSubmit={onSubmit}>
            <div className="flex space-x-4">
            <img
                src={userData.avatar}
                alt="Your avatar"
                className="w-10 h-10 rounded-full"
            />
            <input
                type="text"
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                placeholder="What's on your mind?"
                className="flex-grow bg-gray-100 rounded-full px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            </div>
            <div className="flex items-center justify-between mt-4 pt-4 border-t">
            <div className="flex space-x-4">
                <button type="button" className="flex items-center space-x-2 text-gray-500 hover:text-blue-600">
                <Image className="h-5 w-5" />
                <span>Photo</span>
                </button>
                <button type="button" className="flex items-center space-x-2 text-gray-500 hover:text-blue-600">
                <Smile className="h-5 w-5" />
                <span>Feeling</span>
                </button>
            </div>
            <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
                Post
            </button>
            </div>
        </form>
    </div>
    )
};