export const handlePhotoUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    setSelectedImage: (image: string) => void,
    setNewPost: (newPost: object) => void,
    newPost: object
) => {
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