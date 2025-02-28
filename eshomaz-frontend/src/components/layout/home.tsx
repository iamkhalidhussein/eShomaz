import { CreatePost } from "@/components/posts/create-post";
import { Post } from "@/components/posts/post";
import { PostSkeleton } from "@/components/skeletons/post-skeleton";
import useFetchAllPosts from "@/hooks/useFetchAllPosts";
import { Loader } from "lucide-react";
import { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';

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
    verified: boolean
}


export const Home = () => {
    const [page, setPage] = useState(1);
    const { ref, inView } = useInView()
    const [allPosts, setAllPosts] = useState<any[]>([])
    const { 
        data, 
        isFetching: allPostsFetching, 
        isLoading: isAllPostsLoading,
        refetch: fetchAllPosts 
    } = useFetchAllPosts(page);
    
    useEffect(() => {
        if (data) {
            setAllPosts((prevPosts) => {
                const postMap = new Map(prevPosts.map(post => [post._id, post]));

                data.forEach((post: any) => postMap.set(post._id, post));
                
                return Array.from(postMap.values());
            });
        }
    }, [data]);

    useEffect(() => {
        if(inView && !isAllPostsLoading) {
            setPage((prevPage) => prevPage + 1);
        };
    }, [inView, isAllPostsLoading])

    const refetchAllPosts = async () => {
        await fetchAllPosts();
    };


    // console.log('posts', allPosts)
    return (
        <div className="max-w-2xl mx-auto">
            <CreatePost refetchAllPosts={refetchAllPosts}/>
            { isAllPostsLoading ? Array.from({ length: 4 }).map((_, index) => (
                <PostSkeleton key={index}/>
            ))  : allPosts.map((post: Post) => (
                <Post key={post._id} post={post} refetchAllPosts={refetchAllPosts}/>
            ))}
            {allPostsFetching && <Loader className="animate-spin mx-auto"/>}
            <div ref={ref}></div>
        </div>
    )
};