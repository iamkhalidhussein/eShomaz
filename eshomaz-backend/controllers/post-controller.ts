import { Request, Response } from 'express';
import postModel from '../models/post-model';
import { formatDistanceToNowStrict } from 'date-fns';
import { ObjectId } from 'mongodb';

const createPost = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const createPost = await new postModel(data).save();
        res.status(200).json({ message: 'Post created successfully', post: createPost, success: true })
    } catch (error) {
        res.status(500).json({ error: error, message: 'error in postController createPost()' });
    }
};

const getPosts = async (req: Request, res: Response) => {
    try {
        const email = req.params.email;
        const searchQuery = { email: email };
        const getPosts = await postModel.find(searchQuery).sort({ createdAt: - 1 });
        
        if(!getPosts.length) {
            res.status(201).json({ message: 'Post Got successfully', post: [], success: false })
            return;
        };
        
        const formattedPosts = getPosts.map((post) => {
            const timeAgo = post.createdAt ? formatDistanceToNowStrict(new Date(post.createdAt), { addSuffix: false }): '';
            return {...post.toObject(), timeAgo};
        })

        res.status(200).json({ message: 'Post Got successfully', post: formattedPosts, success: true })
    } catch (error) {
        res.status(500).json({ error: error, message: 'error in postController createPost()' });
    }
};

const getAllPosts = async (req: Request, res: Response) => {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;
        
        const skip = (page - 1) * limit;

        const getAllPosts = await postModel.find().sort({ createdAt: -1 }).skip(skip).limit(limit);

        const totalPostCount = await postModel.countDocuments();

        res.status(200).json({ message: 'Fetched All Posts successfully', posts: getAllPosts, totalPostCount, success: true })
    } catch (error) {
        res.status(500).json({ error: error, message: 'error in postController getAllPosts()' });
    }
};

const incrementLikes = async (req: Request, res: Response) => {
    try {
        const email = req.params.email;
        const postId = req.params.postid;
        const post = await postModel.findById(postId);
        if(!post) return;

        const isLiked = post?.likedBy.includes(email);
        
        if(isLiked) {
            post.likes -= 1;
            post.likedBy = post.likedBy.filter(userEmail => userEmail !== email);
        } else {
            post.likes += 1;
            post.likedBy.push(email);
        }
        await post.save();

        res.status(200).json({ message: !isLiked && 'Post liked successfully', post: post, success: true })
    } catch (error) {
        res.status(500).json({ error: error, message: 'error in postController incrementPosts()' });
    }
};

export { createPost, getPosts, getAllPosts, incrementLikes };