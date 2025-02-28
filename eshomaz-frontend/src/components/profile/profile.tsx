import { Camera, Edit2, PenBox} from 'lucide-react';
import { Post } from '@/components/posts/post';
import { VerifiedBadge } from '@/components/ui/verified-badge';
import { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import { PostSkeleton } from '@/components/skeletons/post-skeleton';
import useCoverImgUpdate from '@/hooks/useCoverImgUpdate';
import useProfileImgUpdate from '@/hooks/useProfileImgUpdate';
import useFetchUserPosts from '@/hooks/useFetchUserPosts';

interface ProfileProps {
    user: {
        bio: string;
        coverPhoto: string
        createdAt: string
        email: string
        firstName: string
        lastName: string
        profilePhoto: string
        updatedAt: string
        verified: boolean
        _id: string
    };
    onEditClick: () => void;
    refetchUserInfo: () => void
};

interface Post {
    comments: string
    createdAt: string
    email: string 
    felling: {
        emoji: string
        text: string
        color: string
    }
    firstName: string
    lastName: string
    likedBy: []
    likes: number
    photo: string
    profilePhoto: string
    shares: number
    text: string
    timeAgo: string
    updatedAt: string
    _id: string
}



export const Profile = ({ user, onEditClick, refetchUserInfo }: ProfileProps) => {
    //console.log(user);
    
    const { data: posts, isFetching: postsFetching, isLoading: postsLoading } = useFetchUserPosts(user);
    
    return (
        <div className="max-w-4xl mx-auto">
        <Toaster/>
        <CoverPhoto 
            coverPhoto={user.coverPhoto} 
            refetchUserInfo={refetchUserInfo}
        />

        <ProfileInfo 
            user={user} 
            onEditClick={onEditClick}
            refetchUserInfo={refetchUserInfo}
        />

        <div className="mt-6">
            <h3 className="text-xl font-bold mb-4">Posts</h3>
            {posts?.length === 0 && postsFetching || postsLoading ? Array.from({ length: 4 }).map((_, index) => (
                <PostSkeleton key={index}/>
            )) : posts.map((post: Post) => (
            <Post key={post._id} post={post} refetchAllPosts={() => {}}/>
            ))}
        </div>
    </div>
    )
};

interface CoverPhotoProps {
    coverPhoto: string,
    refetchUserInfo: () => void
};

const CoverPhoto = ({ coverPhoto, refetchUserInfo }: CoverPhotoProps) => {
    const [imgUploading, setImgUploading] = useState(false);

    const handleImgUpload = useCoverImgUpdate(setImgUploading, {refetchUserInfo});

    return (
        <div className="relative group bg-gray-500 h-80 rounded-lg overflow-hidden mb-4">
            <img
                src={coverPhoto}
                alt="Cover"
                className="w-full h-full object-cover"
            />  
                <button disabled={imgUploading}>
                    <label htmlFor="cover" className='opacity-0 group-hover:opacity-100 invisible group-hover:visible'>
                        <PenBox className='absolute top-2 right-2 cursor-pointer'/>
                    </label>
                    <input
                        id='cover'
                        type="file"
                        accept='image/*'
                        onChange={handleImgUpload}
                        className='hidden'
                    />
                </button>
        </div>
    )
};

const ProfileInfo = ({ user, onEditClick, refetchUserInfo }: ProfileProps) => {
    const [imgUploading, setImgUploading] = useState(false);

    const handleImgUpload = useProfileImgUpdate(setImgUploading, {refetchUserInfo});

    return (
        <div className="bg-white dark:bg-black rounded-lg shadow-md relative px-6 pb-6">
            <div className="flex flex-col md:flex-row items-start md:items-end -mt-16 md:-mt-20 mb-6">
            <div className="relative">
                <img
                    src={user.profilePhoto}
                    alt='#'
                    className="w-32 h-32 mt-2 rounded-full border-4 border-white shadow-lg"
                />
                <button 
                    className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
                    disabled={imgUploading}
                >
                    <label htmlFor="profile">
                        <Camera className="h-4 w-4 text-gray-600"/>
                    </label>
                    <input
                        id='profile'
                        type="file"
                        accept='image/*'
                        onChange={handleImgUpload}
                        className='hidden'
                    />
                </button>
            </div>
            <div className="mt-4 md:mt-0 md:ml-6 flex-grow">
                <div className="flex items-center justify-between">
                <div>
                    <div className='flex items-baseline gap-1'>
                        <h2 className="text-3xl font-bold">{user.firstName}</h2>
                        <h2 className="text-3xl font-bold">{user.lastName}</h2>
                        {user.verified && <VerifiedBadge/>}
                    </div>
                    <p className="text-gray-600">{user.bio}</p>
                </div>
                <button
                    onClick={onEditClick}
                    className="bg-blue-600 text-white px-4 md:py-2 py-1 md:mt-0 mt-5 rounded-lg hover:bg-blue-700 flex items-center space-x-2"
                >
                    <Edit2 className="h-4 w-4" />
                    <span>Edit</span>
                </button>
                </div>
            </div>
            </div>
        </div>
    )
};