import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import useAxiosPublic from "@/hooks/useAxiosPublic";

export const useSaveUser = () => {
    const { getUser } = useKindeAuth();
    const axiosPublic = useAxiosPublic();
    
    // logout()
    const saveUser = async () => {
        try {
            const user = await getUser();
            // console.log(user);
            if(!user.email) return;
            
            const userInfo = {
                firstName: user.given_name,
                lastName: user.family_name,
                profilePhoto: user.picture,
                coverPhoto: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&h=300&fit=crop",
                email: user?.email,
            };
    
            const response = await axiosPublic.post('/users/save-user-info', userInfo)
            console.log(response);
        } catch (error) {
            console.error("Error fetching user info:", error);
        }
    };

    return { saveUser };
};