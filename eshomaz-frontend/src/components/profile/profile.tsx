import { Camera, Edit2 } from 'lucide-react';
import { Post } from '@/components/posts/post';
import { userPosts } from '@/data/mock-data';

interface ProfileProps {
    user: {
        name: string;
        bio: string;
        avatar: string;
        coverPhoto: string;
    };
    onEditClick: () => void;
}

export const Profile = ({ user, onEditClick }: ProfileProps) => {
    return (
        <div className="max-w-4xl mx-auto">
        {/* Cover Photo */}
        <div className="relative h-80 rounded-lg overflow-hidden mb-4">
            <img
            src={user.coverPhoto}
            alt="Cover"
            className="w-full h-full object-cover"
            />
            <button className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100">
            <Camera className="h-5 w-5 text-gray-600" />
            </button>
        </div>

        {/* Profile Info */}
        <div className="bg-white rounded-lg shadow-md relative px-6 pb-6">
            <div className="flex flex-col md:flex-row items-start md:items-end -mt-16 md:-mt-20 mb-6">
            <div className="relative">
                <img
                src={user.avatar}
                alt={user.name}
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
                />
                <button className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100">
                <Camera className="h-4 w-4 text-gray-600" />
                </button>
            </div>
            <div className="mt-4 md:mt-0 md:ml-6 flex-grow">
                <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold">{user.name}</h2>
                    <p className="text-gray-600">{user.bio}</p>
                </div>
                <button
                    onClick={onEditClick}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2"
                >
                    <Edit2 className="h-4 w-4" />
                    <span>Edit Profile</span>
                </button>
                </div>
            </div>
            </div>
        </div>

        {/* User's Posts */}
        <div className="mt-6">
            <h3 className="text-xl font-bold mb-4">Posts</h3>
            {userPosts.map(post => (
            <Post key={post.id} post={post} />
            ))}
        </div>
    </div>
    )
};