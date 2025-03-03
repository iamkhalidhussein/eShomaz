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
exports.updateUserCoverImg = exports.updateUserProfileImg = exports.updateUserInfo = exports.getUserInfo = exports.saveUserInfo = void 0;
const user_model_1 = __importDefault(require("../models/user-model"));
const saveUserInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const email = data === null || data === void 0 ? void 0 : data.email;
        const searchQuery = { email: email };
        const userExist = yield user_model_1.default.findOne(searchQuery);
        if (userExist) {
            res.status(201).json({ error: 'user already exist', success: false });
            return;
        }
        const saveUser = yield new user_model_1.default(data).save();
        res.status(200).json({ message: 'User created successfully', savedUser: saveUser, success: true });
    }
    catch (error) {
        res.status(500).json({ error: error, message: 'error in userController saveUserInfo()' });
    }
});
exports.saveUserInfo = saveUserInfo;
const getUserInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.params.email;
        const searchQuery = { email: email };
        const getUser = yield user_model_1.default.findOne(searchQuery);
        res.status(200).json({ message: 'User found successfully', savedUser: getUser, success: true });
    }
    catch (error) {
        res.status(500).json({ error: error, message: 'error in userController getUserInfo()' });
    }
});
exports.getUserInfo = getUserInfo;
const updateUserInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.params.email;
        const searchQuery = { email: email };
        const data = req.body;
        const updateUser = yield user_model_1.default.findOneAndUpdate(searchQuery, { $set: data }, { new: true });
        res.status(200).json({ message: 'User updated successfully', updatedUser: updateUser, success: true });
    }
    catch (error) {
        res.status(500).json({ error: error, message: 'error in userController updateUserInfo()' });
    }
});
exports.updateUserInfo = updateUserInfo;
const updateUserProfileImg = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.params.email;
        const searchQuery = { email: email };
        const data = req.body;
        const updateUser = yield user_model_1.default.findOneAndUpdate(searchQuery, { $set: data }, { new: true });
        res.status(200).json({ message: 'User ProfileImg update successfully', updatedUser: updateUser, success: true });
    }
    catch (error) {
        res.status(500).json({ error: error, message: 'error in userController updateUserProfileImg()' });
    }
});
exports.updateUserProfileImg = updateUserProfileImg;
const updateUserCoverImg = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.params.email;
        const searchQuery = { email: email };
        const data = req.body;
        console.log(data);
        if (!data) {
            return;
        }
        const updateUser = yield user_model_1.default.findOneAndUpdate(searchQuery, { $set: data }, { new: true });
        res.status(200).json({ message: 'User CoverImg update successfully', updatedUser: updateUser, success: true });
    }
    catch (error) {
        res.status(500).json({ error: error, message: 'error in userController updateUserCoverImg()' });
    }
});
exports.updateUserCoverImg = updateUserCoverImg;
