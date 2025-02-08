import { CreatePost } from "@/components/posts/create-post";
import { Post } from "@/components/posts/post";
import { feedPosts } from "@/data/mock-data";

interface HomeProps {
    newPost: string;
    setNewPost: (value: string) => void;
    onNewPost: (e: React.FormEvent) => void;
}

export const Home = ({ newPost, setNewPost, onNewPost }: HomeProps) => {
    return (
        <div className="max-w-2xl mx-auto">
            <CreatePost
            newPost={newPost}
            setNewPost={setNewPost}
            onSubmit={onNewPost}
            />
            {feedPosts.map(post => (
            <Post key={post.id} post={post} />
            ))}
        </div>
    )
};