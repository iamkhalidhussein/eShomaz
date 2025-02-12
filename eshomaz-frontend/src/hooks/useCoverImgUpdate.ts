import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import toast from "react-hot-toast";
import useAxiosPublic from "@/hooks/useAxiosPublic";

interface RefetchUserInfoPro {
    refetchUserInfo: () => void
}
const useCoverImgUpdate = (
    setImgUploading: (uploading: boolean) => void, 
    { refetchUserInfo }: RefetchUserInfoPro
) => {
    const { getUser } = useKindeAuth();
    const axiosPublic = useAxiosPublic();

    const handleImgUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if(!file) return;
        
        console.log(file);
        const imgFile = new FormData();
        imgFile.append('file', file);
        imgFile.append('upload_preset', 'eshomaz-cover-img-preset')
        imgFile.append("folder", "eshomaz_profile_cover_images");
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
                    const coverPhoto = { coverPhoto: imgURL.secure_url };
                    console.log(coverPhoto)
                    const user = await getUser();
                    const response = await axiosPublic.patch(
                        `/users/update-user-cover-img/${user?.email}`,
                        coverPhoto
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

export default useCoverImgUpdate;