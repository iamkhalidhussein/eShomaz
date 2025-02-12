import { Request, Response } from 'express';
import userModel from '../models/user-model';

const saveUserInfo = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const email = data?.email;
        const searchQuery = { email: email };
        const userExist = await userModel.findOne(searchQuery);
        if(userExist) {
            res.status(201).json({ error: 'user already exist', success: false });
            return;
        }
        const saveUser = await new userModel(data).save();
        res.status(200).json({ message: 'User created successfully', savedUser: saveUser, success: true })
    } catch (error) {
        res.status(500).json({ error: error, message: 'error in userController saveUserInfo()' });
    }
};

const getUserInfo = async (req: Request, res: Response) => {
    try {
        const email = req.params.email;
        const searchQuery = { email: email }
        const getUser = await userModel.findOne(searchQuery);
        res.status(200).json({ message: 'User found successfully', savedUser: getUser, success: true })
    } catch (error) {
        res.status(500).json({ error: error, message: 'error in userController getUserInfo()' });
    }
};

const updateUserInfo = async (req: Request, res: Response) => {
    try {
        const email = req.params.email;
        const searchQuery = { email: email }
        const data = req.body;
        const updateUser = await userModel.findOneAndUpdate(
            searchQuery,
            { $set: data },
            { new: true } 
        );
        res.status(200).json({ message: 'User updated successfully', updatedUser: updateUser, success: true })
    } catch (error) {
        res.status(500).json({ error: error, message: 'error in userController updateUserInfo()' });
    }
};

const updateUserProfileImg = async (req: Request, res: Response) => {
    try {
        const email = req.params.email;
        const searchQuery = { email: email }
        const data = req.body;
        const updateUser = await userModel.findOneAndUpdate(
            searchQuery,
            { $set: data },
            { new: true } 
        );
        res.status(200).json({ message: 'User ProfileImg update successfully', updatedUser: updateUser, success: true })
    } catch (error) {
        res.status(500).json({ error: error, message: 'error in userController updateUserProfileImg()' });
    }
};

const updateUserCoverImg = async (req: Request, res: Response) => {
    try {
        const email = req.params.email;
        const searchQuery = { email: email }
        const data = req.body;
        console.log(data);
        if(!data) {
            return;
        }
        const updateUser = await userModel.findOneAndUpdate(
            searchQuery,
            { $set: data },
            { new: true } 
        );
        res.status(200).json({ message: 'User CoverImg update successfully', updatedUser: updateUser, success: true })
    } catch (error) {
        res.status(500).json({ error: error, message: 'error in userController updateUserCoverImg()' });
    }
};

export { 
    saveUserInfo, 
    getUserInfo, 
    updateUserInfo, 
    updateUserProfileImg, 
    updateUserCoverImg 
};