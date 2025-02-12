import { CreatePost } from "@/components/posts/create-post";
import { Post } from "@/components/posts/post";
import { PostSkeleton } from "@/components/skeletons/post-skeleton";
import useFetchAllPosts from "@/hooks/useFetchAllPosts";

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
    likedBy: string
    likes: number
    photo: string
    profilePhoto: string
    shares: number
    text: string
    timeAgo: string
    updatedAt: string
    _id: string
}


export const Home = () => {

    const { 
        data: allPosts, 
        // isFetching: allPostsFetching, 
        isLoading: isAllPostsLoading,
        refetch: fetchAllPosts 
    } = useFetchAllPosts();

    const refetchAllPosts = async () => {
        await fetchAllPosts();
    };

    return (
        <div className="max-w-2xl mx-auto">
            <CreatePost refetchAllPosts={refetchAllPosts}/>
            { isAllPostsLoading ? Array.from({ length: 4 }).map((_, index) => (
                <PostSkeleton key={index}/>
            ))  : allPosts.map((post: Post) => (
                <Post key={post._id} post={post} refetchAllPosts={refetchAllPosts}/>
            ))}
        </div>
    )
};