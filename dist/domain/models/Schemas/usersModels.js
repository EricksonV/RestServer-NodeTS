"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userRoleEnum_1 = require("../enums/userRoleEnum");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        require: [true, 'El nombre es obligatorio']
    },
    email: {
        type: String,
        require: [true, 'El correo es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        require: [true, 'Debe ingresar una contrasenia']
    },
    image: {
        type: String,
    },
    role: {
        type: String,
        require: true,
        enum: Object.values(userRoleEnum_1.Role)
    },
    state: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
});
module.exports = (0, mongoose_1.model)('User', userSchema);
