import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '@/hooks/useAxiosPublic';

const useFetchAllPosts = () => {
    const axiosPublic = useAxiosPublic();

    return useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const response = await axiosPublic.get('/posts/get-all-posts')
            return response.data?.posts;
        },
        enabled: !!axiosPublic
    })
};

export default useFetchAllPosts;