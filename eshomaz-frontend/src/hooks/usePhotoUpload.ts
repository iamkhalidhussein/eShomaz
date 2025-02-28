import React, { Dispatch, SetStateAction } from 'react';

interface Post {
    text: string;
    photo: {}; 
    felling: {};
};

const usePhotoUpload = (
    setSelectedImage: Dispatch<SetStateAction<string | null>>, 
    setNewPost: Dispatch<SetStateAction<Post>>, 
    newPost: Post
) => {
    const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if(!file) return;
        if(file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result as string);
            }
            reader.readAsDataURL(file);
        }
        setNewPost({...newPost, photo: file});
    };

    return handlePhotoUpload;
};

export default usePhotoUpload;