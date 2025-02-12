import express from 'express';
const router = express.Router();
import { 
    getUserInfo, 
    saveUserInfo, 
    updateUserCoverImg, 
    updateUserInfo, 
    updateUserProfileImg
} from '../controllers/user-controller';

router.post('/save-user-info', saveUserInfo);
router.get('/get-user-info/:email', getUserInfo);
router.patch('/update-user-info/:email', updateUserInfo);
router.patch('/update-user-profile-img/:email', updateUserProfileImg);
router.patch('/update-user-cover-img/:email', updateUserCoverImg);

export default router;