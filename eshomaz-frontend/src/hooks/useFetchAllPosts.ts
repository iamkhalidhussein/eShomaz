import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '@/hooks/useAxiosPublic';

const useFetchAllPosts = (page: number) => {
    const axiosPublic = useAxiosPublic();

    return useQuery({
        queryKey: ['posts', page],
        queryFn: async () => {
            const response = await axiosPublic.get(`/posts/get-all-posts?page=${page}&limit=10`)
            return response.data?.posts;
        },
        enabled: !!axiosPublic,
        keepPreviousData: true
    })
};

export default useFetchAllPosts;