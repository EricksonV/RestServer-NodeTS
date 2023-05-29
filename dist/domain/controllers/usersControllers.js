"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersDelete = exports.usersPut = exports.usersPost = exports.usersGet = void 0;
const usersGet = (req, res) => {
    const { q, nombre = 'No name', apikey } = req.query;
    res.json({
        msg: 'Get api - controller',
        q,
        nombre,
        apikey
    });
};
exports.usersGet = usersGet;
const usersPost = (req, res) => {
    const body = req.body;
    res.status(201).json({
        msg: 'Post api - controller',
        body
    });
};
exports.usersPost = usersPost;
const usersPut = (req, res) => {
    const id = req.params.id;
    res.status(201).json({
        msg: 'Put api - Controller',
        id
    });
};
exports.usersPut = usersPut;
const usersDelete = (req, res) => {
    res.status(200).json({
        msg: 'Delete api - Controller'
    });
};
exports.usersDelete = usersDelete;
