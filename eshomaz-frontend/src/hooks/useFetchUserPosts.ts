import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

interface UseFetchUserPosts {
    email: string;
}

const useFetchUserPosts = (user: UseFetchUserPosts) => {
    const axiosPublic = useAxiosPublic();

    return useQuery({
        queryKey: ['posts', user?.email],
        queryFn: async () => {
            const response = await axiosPublic.get(`/posts/get-posts/${user?.email}`)
            return response.data.post
        },
        enabled: !!user?.email,
    }) 
};

export default useFetchUserPosts;