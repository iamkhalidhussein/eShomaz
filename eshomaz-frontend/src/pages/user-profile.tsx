import { EditProfileModal } from "@/components/profile/edit-profile-modal";
import { Profile } from "@/components/profile/profile";
import { userData } from "@/data/mock-data";
import { useState } from "react";

export const UserProfile = () => {
    const [isEditing, setIsEditing] = useState(false);
    return (
        <>
            <Profile user={userData} onEditClick={() => setIsEditing(!isEditing)}/>
            <EditProfileModal
                isOpen={isEditing}
                onClose={() => setIsEditing(!isEditing)}
                editedUser={userData}
                setEditedUser={() => {}}
                onSubmit={() => {}}
            />
        </>
    )
};