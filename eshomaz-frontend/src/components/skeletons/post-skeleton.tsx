import { Skeleton } from "@/components/ui/skeleton";
import { ThumbsUp, MessageCircle, Share2, Send } from "lucide-react";

export const PostSkeleton = () => {
    return (
        <div className="bg-white dark:bg-black rounded-lg shadow-md mb-6 p-4">
            
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

            <div className="flex items-center justify-between text-gray-500 border-t pt-4">
                <div className="flex items-center space-x-2">
                    <ThumbsUp className="h-5 w-5 text-gray-400" />
                    <Skeleton className="w-10 h-4" />
                </div>
                <div className="flex items-center space-x-2">
                    <MessageCircle className="h-5 w-5 text-gray-400" />
                    <Skeleton className="w-10 h-4" />
                </div>
                <div className="flex items-center space-x-2">
                    <Share2 className="h-5 w-5 text-gray-400" />
                    <Skeleton className="w-10 h-4" />
                </div>
            </div>

            <div className="px-4 py-3 border-t mt-4">
                <div className="flex items-center space-x-3">
                    <Skeleton className="w-8 h-8 rounded-full" />
                    <div className="flex-grow relative">
                        <Skeleton className="w-full h-10 rounded-full" />
                        <Send className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                    </div>
                </div>
            </div>
        </div>
    )
};