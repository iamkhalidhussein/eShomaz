import { userData } from "@/data/mock-data";
import { Home } from '@/pages/home';
import { EditProfileModal } from '@/components/profile/edit-profile-modal';

const App = () => {

  return (
    <div className="min-h-screen bg-gray-100">
        <Home
          newPost={''}
          setNewPost={() => {}}
          onNewPost={() => {}}
        />
        <EditProfileModal
          isOpen={false}
          onClose={() => false}
          editedUser={userData}
          setEditedUser={() => {}}
          onSubmit={() => {}}
        />
    </div>
  );
};

export default App;