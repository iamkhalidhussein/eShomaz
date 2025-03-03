"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const user_controller_1 = require("../controllers/user-controller");
router.post('/save-user-info', user_controller_1.saveUserInfo);
router.get('/get-user-info/:email', user_controller_1.getUserInfo);
router.patch('/update-user-info/:email', user_controller_1.updateUserInfo);
router.patch('/update-user-profile-img/:email', user_controller_1.updateUserProfileImg);
router.patch('/update-user-cover-img/:email', user_controller_1.updateUserCoverImg);
exports.default = router;
