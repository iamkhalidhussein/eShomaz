import { Image, X } from 'lucide-react';
import { useUserInfo } from '@/provider/user-info-context';
import { useState } from 'react';
import { Fellings } from '@/components/posts/fellings';
import { Toaster } from 'react-hot-toast';
import useCreatePost from '@/hooks/useCreatePost';
import usePhotoUpload from '@/hooks/usePhotoUpload';

interface CreatePostProps {
    refetchAllPosts: () => void;
};

export const CreatePost = ({ refetchAllPosts }: CreatePostProps) => {
    const { personalInfo } = useUserInfo();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [newPost, setNewPost] = useState({
        text: '',
        photo: {},
        felling: {}
    });
    // console.log(newPost)
    const [posting, setPosting] = useState(false);

    const handlePhotoUpload = usePhotoUpload(setSelectedImage, setNewPost, newPost);

    const removePhoto = () => {
        setSelectedImage(null);
    };

    const handleSubmit = useCreatePost(newPost, refetchAllPosts, setPosting);

    return (
        <div className="bg-white dark:bg-black rounded-lg shadow-md p-4 mb-6">
        <Toaster/>
        {selectedImage && (
            <div className="relative mb-4">
            <img
                src={selectedImage || "/placeholder.svg"}
                alt="Uploaded preview"
                className="w-1/2 h-1/2 border rounded-lg"
            />
            <button
                onClick={removePhoto}
                className="absolute top-2 left-2 bg-gray-800 bg-opacity-50 text-white rounded-full p-1 hover:bg-opacity-70 transition-opacity"
            >
              <X size={20}/>
            </button>
          </div>
        )}
        <form onSubmit={handleSubmit}>
            <div className="flex space-x-4">
            <img
                src={personalInfo.profilePhoto}
                alt="Your avatar"
                className="w-10 h-10 rounded-full"
            />
            <input
                type="text"
                value={newPost.text}
                onChange={(e) => setNewPost({...newPost, text: e.target.value})}
                placeholder="What's on your mind?"
                className="flex-grow bg-gray-100 dark:bg-[#27272A80] rounded-full px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            </div>
            <div className="flex items-center justify-between mt-4 pt-4 border-t">
            <div className="flex space-x-4">
                <button type="button" className="flex items-center space-x-2 text-gray-500 hover:text-blue-600">
                <label htmlFor="image" className='flex items-center gap-1 cursor-pointer'>
                    <Image className="h-5 w-5" />
                    <span>Photo</span>
                </label>
                <input
                    id='image'
                    type="file"
                    accept='image/*'
                    onChange={handlePhotoUpload}
                    className='hidden'
                />
                </button>
                <Fellings setNewPost={setNewPost}/>
            </div>
            <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                disabled={posting}
            >
                Post
            </button>
            </div>
        </form>
    </div>
    )
};