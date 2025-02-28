import { MessageCircle, Send,  Share2, ThumbsUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useUserInfo } from '@/provider/user-info-context';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import { VerifiedBadge } from '../ui/verified-badge';

interface PostProps {
    post: {
        _id: string;
        updatedAt: string;
        timeAgo: string;
        text: string;
        shares: number;
        profilePhoto: string;
        photo: string;
        likes: number;
        firstName: string;
        lastName: string;
        felling: {
            emoji: string,
            text: string,
            color: string
        };
        createdAt: string;
        email: string;
        comments: string
        verified?: boolean
    };
    refetchAllPosts: () => void;
};

export const Post = ({ post, refetchAllPosts }: PostProps) => {
    const { personalInfo } = useUserInfo();
    const axiosPublic = useAxiosPublic();
    
    const incrementLike = async () => {
        console.log('li');
        console.log(post)
        try {
            const response = await axiosPublic.post(`/posts/increment-likes/${post?.email}/${post?._id}`)
            console.log(response)
            refetchAllPosts();
        } catch (error) {
            console.log('error in incrementinglike',error);
        }
    };

    return (
        <div className="bg-white dark:bg-black w-full rounded-lg shadow-md mb-6">
            <div className="p-4">
                <PostHeader
                    profilePhoto={post.profilePhoto}
                    firstName={post.firstName}
                    lastName={post.lastName}
                    felling={post.felling}
                    timeAgo={post.timeAgo}
                    verified={ post.email === personalInfo.email ? personalInfo.verified : post.verified }
                />
                <PostContent
                    photo={post.photo}
                    text={post.text}
                />
                <PostActions
                    shares={post.shares}
                    comments={post.comments}
                    incrementLike={incrementLike}
                    likes={post.likes}
                />
            </div>
            <CommentInput profilePhoto={personalInfo?.profilePhoto}/>
        </div>
    )
};

interface PostHeaderProps {
    profilePhoto: string;
    firstName: string;
    lastName: string;
    felling: {
        emoji: string,
        text: string,
        color: string
    };
    timeAgo: string;
    verified: boolean;
};

const PostHeader = ({ 
    profilePhoto, 
    firstName, 
    lastName, 
    felling, 
    timeAgo, 
    verified 
}: PostHeaderProps) => {
    return (
        <div className="flex items-center space-x-3 mb-4">
        <img src={profilePhoto} alt="Profile" className="w-10 h-10 rounded-full" />
        <div>
            <div className="flex items-center">
            <h3 className="font-semibold">
                {firstName} {lastName}
            </h3>
            <span className='pl-1'>{verified && <VerifiedBadge/>}</span>
            {felling && (
                <Button variant="ghost" className="text-[#1877F2] border-0 hover:bg-gray-100 pointer-events-none">
                Feeling {felling.text}
                <span className="mr-2 text-xl">{felling.emoji}</span>
                </Button>
            )}
            </div>
            <p className="text-gray-500 text-sm">{timeAgo}</p>
        </div>
    </div>
    )
};

interface PostContentProps {
    text: string;
    photo: string
}
const PostContent = ({ text, photo }: PostContentProps) => {
    return (
        <div className='overflow-hidden'>
        <p className="mb-4">{text}</p>
        {photo && <img src={photo} alt="Post" className="w-full rounded-lg mb-4" />}
        </div>
    )
};

interface PostActionsProps {
    likes: number;
    comments: string;
    shares: number;
    incrementLike: () => void;
}

const PostActions = ({ 
    likes, 
    comments, 
    shares, 
    incrementLike 
}: PostActionsProps) => {
    return (
        <div className="flex items-center justify-between text-gray-500 border-t pt-4">
            <button onClick={incrementLike} className="flex items-center space-x-2 hover:text-blue-600">
                <ThumbsUp className="h-5 w-5" />
                <span>{likes}</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-blue-600">
                <MessageCircle className="h-5 w-5" />
                <span>{comments} comments</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-blue-600">
                <Share2 className="h-5 w-5" />
                <span>{shares}</span>
            </button>
        </div>
    )
};

interface CommentInputProps {
    profilePhoto: string
};

const CommentInput = ({ profilePhoto }: CommentInputProps) => {
    return (
        <div className="px-4 py-3 border-t">
            <div className="flex items-center space-x-3">
                <img src={profilePhoto} alt="Your avatar" className="w-8 h-8 rounded-full" />
                <div className="flex-grow relative">
                <input
                    type="text"
                    placeholder="Write a comment..."
                    className="bg-gray-100 dark:bg-[#27272A80] rounded-full py-2 px-4 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button className="absolute right-3 top-2.5 text-blue-600">
                    <Send className="h-5 w-5" />
                </button>
                </div>
            </div>
        </div>
    )
};