"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const post_controller_1 = require("../controllers/post-controller");
router.post('/create-post', post_controller_1.createPost);
router.get('/get-posts/:email', post_controller_1.getPosts);
router.get('/get-all-posts', post_controller_1.getAllPosts);
router.post('/increment-likes/:email/:postid', post_controller_1.incrementLikes);
exports.default = router;
