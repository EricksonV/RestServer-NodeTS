"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersDelete = exports.usersPut = exports.usersPost = exports.usersGet = void 0;
const usersGet = (req, res) => {
    res.json({
        msg: 'Get api - controller'
    });
};
exports.usersGet = usersGet;
const usersPost = (req, res) => {
    res.status(201).json({
        msg: 'Post api - controller'
    });
};
exports.usersPost = usersPost;
const usersPut = (req, res) => {
    res.status(201).json({
        msg: 'Put api - Controller'
    });
};
exports.usersPut = usersPut;
const usersDelete = (req, res) => {
    res.status(200).json({
        msg: 'Delete api - Controller'
    });
};
exports.usersDelete = usersDelete;
