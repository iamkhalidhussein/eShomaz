import { Home } from "@/components/layout/home";

export const HomePage = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Home
                newPost={''}
                setNewPost={() => {}}
                onNewPost={() => {}}
            />
        </div>
    )
};