import { Skeleton } from "@/components/ui/skeleton";

export const HomePageSkeleton = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white dark:bg-gray-400 shadow-md fixed w-full top-0 z-50">
                <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <Skeleton className="h-8 w-32 rounded" />
                        <div className="relative">
                            <Skeleton className="h-10 w-64 rounded-full" />
                        </div>
                    </div>
                    <nav className="hidden md:flex items-center space-x-2">
                        <Skeleton className="h-8 w-8 rounded-full" />
                        <Skeleton className="h-8 w-8 rounded-full" />
                        <Skeleton className="h-8 w-8 rounded-full" />
                        <Skeleton className="h-8 w-8 rounded-full" />
                        <Skeleton className="h-10 w-10 rounded-full" />
                    </nav>
                    <Skeleton className="h-6 w-6" />
                </div>
            </header>

            <div className="container mx-auto px-4 pt-20 pb-8">
            <div className="bg-white dark:bg-gray-400 rounded-lg shadow-md p-4 mb-6">
                <div className="flex space-x-4">
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <Skeleton className="flex-grow h-10 rounded-full" />
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t">
                    <div className="flex space-x-4">
                        <Skeleton className="h-8 w-20 rounded" />
                        <Skeleton className="h-8 w-20 rounded" />
                    </div>
                    <Skeleton className="h-10 w-24 rounded-lg" />
                </div>
            </div>

            <div className="bg-white dark:bg-gray-400 rounded-lg shadow-md mb-6">
                <div className="p-4">
                    <div className="flex items-center space-x-3 mb-4">
                        <Skeleton className="h-10 w-10 rounded-full" />
                        <div>
                            <Skeleton className="h-5 w-32 rounded" />
                            <Skeleton className="h-4 w-20 rounded" />
                        </div>
                    </div>
                    <Skeleton className="h-4 mb-4 rounded" />
                    <Skeleton className="h-64 w-full rounded-lg mb-4" />
                    <div className="flex items-center justify-between text-gray-500 border-t pt-4">
                        <Skeleton className="h-8 w-20 rounded" />
                        <Skeleton className="h-8 w-20 rounded" />
                    </div>
                </div>
                <div className="px-4 py-3 border-t">
                    <div className="flex items-center space-x-3">
                        <Skeleton className="h-8 w-8 rounded-full" />
                        <Skeleton className="flex-grow h-10 rounded-full" />
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
};