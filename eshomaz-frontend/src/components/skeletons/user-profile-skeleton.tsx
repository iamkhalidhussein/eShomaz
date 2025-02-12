import { Skeleton } from '@/components/ui/skeleton';

export const UserProfileSkeleton = () => {
    return (
        <div className="max-w-4xl mx-auto p-4">
            <div className="space-y-6">
                
                <Skeleton className="h-40 bg-gray-300 rounded-md" />
                
                <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                        <Skeleton className="h-16 w-16 rounded-full bg-gray-300" />
                        <Skeleton className="h-6 w-32 bg-gray-300" />
                        <Skeleton className="h-4 w-48 bg-gray-300" />
                    </div>
                </div>
                </div>

                <div className="mt-6">
                <h3 className="text-xl font-bold mb-4 dark:text-gray-400">Posts</h3>
                
                <div className="flex items-center space-x-3 mb-4">
                    <Skeleton className="w-10 h-10 rounded-full" />
                    <div>
                        <Skeleton className="w-32 h-5 mb-1" />
                        <Skeleton className="w-24 h-4" />
                    </div>
                </div>

                <Skeleton className="h-4 w-3/4 mb-3" />
                <Skeleton className="h-4 w-2/3 mb-3" />
                <Skeleton className="h-4 w-1/2 mb-4" />

                <Skeleton className="w-full h-56 rounded-lg mb-4" />

            </div>
        </div>
    )
};