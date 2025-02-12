import { EditProfileModal } from "@/components/profile/edit-profile-modal";
import { Profile } from "@/components/profile/profile";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useUserInfo } from "@/provider/user-info-context";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { useState } from "react";
import toast from 'react-hot-toast';

interface ProfileProps {
    user: {
        bio: string;
        coverPhoto: string;
        createdAt: string;
        email: string;
        firstName: string;
        lastName: string;
        profilePhoto: string;
        updatedAt: string;
        verified: boolean;
        _id: string;
    };
}

const UserProfile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const { personalInfo, refetchUserInfo } = useUserInfo();
    const [editedUser, setEditedUser] = useState({
        firstName: personalInfo.firstName,
        lastName: personalInfo.lastName,
        bio: personalInfo.bio,
    });
    const [infoUpdating, setInfoUpdating] = useState(false);
    const { user } = useKindeAuth();
    const axiosPublic = useAxiosPublic();
    // console.log('epr', personalInfo);
    // console.log('epr', editedUser);
    
    const handleUserInfoEdit = async (e: React.FormEvent) => {
        e.preventDefault();
        // console.log('userInfo', editedUser);
        try {
            setInfoUpdating(true);
            const response = await axiosPublic.patch(`/users/update-user-info/${user?.email}`, editedUser)

            if(response.data.success) {
                refetchUserInfo();
                const { firstName, lastName, bio } = response.data?.updatedUser;
                setEditedUser({
                    firstName: firstName,
                    lastName: lastName,
                    bio: bio,
                })
                toast.success('Profile Info Updated', {
                    position: 'top-center',
                    duration: 4000
                })
            }
            
        } catch (error) {
            console.error('error while updating userinfo', error);
            toast.error('Error updating profile info', {
                position: 'top-center',
                duration: 4000,
            });
        } finally {
            setInfoUpdating(false);
        }
    };

    return (
        <>
            <Profile
                user={personalInfo as ProfileProps['user']} 
                onEditClick={() => setIsEditing(!isEditing)}
                refetchUserInfo={refetchUserInfo}
            />
            <EditProfileModal
                isOpen={isEditing}
                onClose={() => setIsEditing(!isEditing)}
                editedUser={editedUser}
                setEditedUser={setEditedUser}
                onSubmit={(e) => handleUserInfoEdit(e)}
                infoUpdating={infoUpdating}
            />
        </>
    )
};

export default UserProfile;