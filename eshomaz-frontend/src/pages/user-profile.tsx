import { EditProfileModal } from "@/components/profile/edit-profile-modal";
import { Profile } from "@/components/profile/profile";
import { userData } from "@/data/mock-data";

export const UserProfile = () => {
    return (
        <>
            <Profile user={userData} onEditClick={() => true}/>
            <EditProfileModal
                isOpen={false}
                onClose={() => false}
                editedUser={userData}
                setEditedUser={() => {}}
                onSubmit={() => {}}
            />
        </>
    )
};