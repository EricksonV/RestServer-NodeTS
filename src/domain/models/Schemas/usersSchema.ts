import {Schema, model} from 'mongoose';


import { userI } from '../interfaces/usersInterface';

const userSchema = new Schema<userI>({
    name:{
        type: String,
        require: [true, 'El nombre es obligatorio']
    },
    email:{
        type: String,
        require: [true, 'El correo es obligatorio'],
        unique: true
    },
    password:{
        type: String,
        require: [true, 'Debe ingresar una contrasenia']
    },
    image:{
        type: String,
    },
    role:{
        type: String,
        require: true,
        
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

userSchema.methods.toJSON = function(){
    const { __v, password, ...user  } = this.toObject();
    return user;
}

export default model<userI>( 'User', userSchema );