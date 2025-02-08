import React, { FormEvent } from 'react';
import { X } from 'lucide-react';

interface EditProfileModalProps {
    isOpen: boolean;
    onClose: () => void;
    editedUser: {
        name: string;
        bio: string
    };
    setEditedUser: (user: any) => void;
    onSubmit: (e: React.FormEvent) => void;
};

export const EditProfileModal = ({
    isOpen,
    onClose,
    editedUser,
    setEditedUser,
    onSubmit
}: EditProfileModalProps) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-md">

          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">Edit Profile</h3>
            <CloseButton onClick={onClose}/>
          </div>
          
          <form onSubmit={onSubmit}>
            <div className="space-y-4">
              <InputField
                label="Label"
                type="text"
                value={editedUser.name}
                onChange={(e) => setEditedUser({...editedUser, name: e.target.value})}
                rows={0}
              />
              <InputField
                label="Bio"
                type="textarea"
                value={editedUser.bio}
                onChange={(e) => setEditedUser({...editedUser, bio: e.target.value})}
                rows={3}
              />
            </div>
            <ActionButtons
              onClose={onClose}
              onSubmit={onSubmit}
            />
          </form>
        
        </div>
      </div>
    )
};

interface CloseButtonProps {
  onClick: () => void;
};

const CloseButton = ({ onClick }: CloseButtonProps) => {
  return (
      <button onClick={onClick}>
        <X className="h-6 w-6" />
      </button>
  )
};

interface InputFieldProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  rows?: number;
};

const InputField = ({ 
  label, 
  type, 
  value, 
  onChange, 
  rows 
}: InputFieldProps) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          value={value}
          onChange={onChange}
          rows={rows}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      )}
  </div>
  )
};

interface ActionButtonsProps {
  onClose: () => void;
  onSubmit: (e: FormEvent<Element>) => void;
}

const ActionButtons = ({ onClose, onSubmit }: ActionButtonsProps) => {
  return (
    <div className="mt-6 flex justify-end space-x-3">
      <button
        type="button"
        onClick={onClose}
        className="px-4 py-2 border rounded-lg hover:bg-gray-50"
      >
        Cancel
      </button>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        onSubmit={onSubmit}
      >
        Save Changes
      </button>
  </div>
  )
};