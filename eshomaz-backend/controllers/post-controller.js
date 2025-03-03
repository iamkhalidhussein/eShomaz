"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.incrementLikes = exports.getAllPosts = exports.getPosts = exports.createPost = void 0;
const post_model_1 = __importDefault(require("../models/post-model"));
const date_fns_1 = require("date-fns");
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const createPost = yield new post_model_1.default(data).save();
        res.status(200).json({ message: 'Post created successfully', post: createPost, success: true });
    }
    catch (error) {
        res.status(500).json({ error: error, message: 'error in postController createPost()' });
    }
});
exports.createPost = createPost;
const getPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.params.email;
        const searchQuery = { email: email };
        const getPosts = yield post_model_1.default.find(searchQuery).sort({ createdAt: -1 });
        if (!getPosts.length) {
            res.status(201).json({ message: 'Post Got successfully', post: [], success: false });
            return;
        }
        ;
        const formattedPosts = getPosts.map((post) => {
            const timeAgo = post.createdAt ? (0, date_fns_1.formatDistanceToNowStrict)(new Date(post.createdAt), { addSuffix: false }) : '';
            return Object.assign(Object.assign({}, post.toObject()), { timeAgo });
        });
        res.status(200).json({ message: 'Post Got successfully', post: formattedPosts, success: true });
    }
    catch (error) {
        res.status(500).json({ error: error, message: 'error in postController createPost()' });
    }
});
exports.getPosts = getPosts;
const getAllPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;
        const getAllPosts = yield post_model_1.default.find().sort({ createdAt: -1 }).skip(skip).limit(limit);
        const totalPostCount = yield post_model_1.default.countDocuments();
        res.status(200).json({ message: 'Fetched All Posts successfully', posts: getAllPosts, totalPostCount, success: true });
    }
    catch (error) {
        res.status(500).json({ error: error, message: 'error in postController getAllPosts()' });
    }
});
exports.getAllPosts = getAllPosts;
const incrementLikes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.params.email;
        const postId = req.params.postid;
        const post = yield post_model_1.default.findById(postId);
        if (!post)
            return;
        const isLiked = post === null || post === void 0 ? void 0 : post.likedBy.includes(email);
        if (isLiked) {
            post.likes -= 1;
            post.likedBy = post.likedBy.filter(userEmail => userEmail !== email);
        }
        else {
            post.likes += 1;
            post.likedBy.push(email);
        }
        yield post.save();
        res.status(200).json({ message: !isLiked && 'Post liked successfully', post: post, success: true });
    }
    catch (error) {
        res.status(500).json({ error: error, message: 'error in postController incrementPosts()' });
    }
});
exports.incrementLikes = incrementLikes;
