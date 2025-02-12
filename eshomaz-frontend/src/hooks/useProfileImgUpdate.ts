import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import React from 'react';
import toast from 'react-hot-toast';
import useAxiosPublic from './useAxiosPublic';

interface RefetchUserInfo {
    refetchUserInfo: () => void
}

const useProfileImgUpdate = (
    setImgUploading: (uploading: boolean) => void, 
    {refetchUserInfo}: RefetchUserInfo
) => {
    const { getUser } = useKindeAuth();
    const axiosPublic = useAxiosPublic();

    const handleImgUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if(!file) return;

        console.log(file);
        const imgFile = new FormData();
        imgFile.append('file', file);
        imgFile.append('upload_preset', 'eshomaz-profile-img-preset')
        imgFile.append("folder", "eshomaz_profile_images");
        console.log(imgFile);

        return toast.promise(
            (async () => {
                try {
                    setImgUploading(true);
                    const imgUpload = await fetch(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
                        {
                            method: "POST",
                            body: imgFile,
                        }
                    );
    
                    const imgURL = await imgUpload.json();
                    const profilePhoto = { profilePhoto: imgURL.secure_url };
    
                    const user = await getUser();
                    const response = await axiosPublic.patch(
                        `/users/update-user-profile-img/${user?.email}`,
                        profilePhoto
                    );
    
                    console.log("response", response);
                    refetchUserInfo();
                } catch (error) {
                    console.error("Error uploading file:", error);
                    throw error; 
                } finally {
                    setImgUploading(false);
                }
            })(), 
            {
                loading: "Uploading...",
                success: "Profile photo updated!",
                error: "Upload failed!",
            }
        );

    };

    return handleImgUpload;
};

export default useProfileImgUpdate;