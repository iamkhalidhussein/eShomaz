import { useUserInfo } from "@/provider/user-info-context";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import toast from "react-hot-toast";
import useAxiosPublic from "@/hooks/useAxiosPublic";

interface newPost {
    text: string,
    photo: object,
    felling: object
};

const useCreatePost = (
    newPost: newPost, 
    refetchAllPosts: () => void, 
    setPosting: (value: boolean) => void
) => {
    const { getUser } = useKindeAuth();
    const { personalInfo } = useUserInfo();
    const axiosPublic = useAxiosPublic();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(newPost);
        
        const imgFile = new FormData();
        if(newPost.photo && newPost.photo instanceof File) {
            imgFile.append('file', newPost.photo);
            imgFile.append('upload_preset', 'eshomaz-posts-img-preset')
            imgFile.append("folder", "eshomaz_posts_images");
            console.log(imgFile);
        }

        return toast.promise(
            (async () => {
                try {
                    setPosting(true);

                    let imgSecureUrl;
                    if([...imgFile.entries()].length) {
                        const imgUpload = await fetch(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
                            {
                                method: "POST",
                                body: imgFile,
                            }
                        );
                        const imgURL = await imgUpload.json();
                        imgSecureUrl = imgURL.secure_url;
                    }

                    const user = await getUser();
                    const post = {
                        ...newPost,
                        photo: imgSecureUrl || "",
                        firstName: user.given_name,
                        lastName: user.family_name,
                        profilePhoto: personalInfo.profilePhoto,
                        email: user.email
                    };

                    console.log(post)
                    const response = await axiosPublic.post('/posts/create-post',
                        post
                    );
    
                    console.log("response", response);
                    refetchAllPosts();
                    // refetchUserInfo();
                } catch (error) {
                    console.error("Error while post creating:", error);
                    throw error; 
                } finally {
                    setPosting(false);
                }
            })(), 
            {
                loading: "Posting...",
                success: "Successfully Posted!",
                error: "Post failed!",
            }
        );

    };

    return handleSubmit;
};

export default useCreatePost;