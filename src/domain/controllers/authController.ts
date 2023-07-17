import { Response, Request } from 'express';
import bcrypt from 'bcryptjs';

import user from '../models/Schemas/usersSchema';
import { generarJWT } from '../helpers/generar-jwt';


export const login = async(req:Request, res:Response) => {

    const { email, password } = req.body;

    try {

        //Verificacion de email
        const usuario = await user.findOne({ email });
        if( !usuario ){
            return res.status(400).json({
                msg: "Usuario / Password no son correctos - email"
            });
        }
        //verificar si el usuario esta activo
        if( !usuario.state ){
            return res.status(400).json({
                msg: "Usuario / Password no son correctos - estado: false"
            });
        }
        //verficar la contrasenia
        const validPassword = bcrypt.compareSync( password, usuario.password);
        if( !validPassword ){
            return res.status(400).json({
                msg: "Usuario / Password no son correctos - password"
            });
        }
        //Generar el JWT
        const token = await generarJWT( usuario.id );

        res.json({
            usuario,
            token
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Hubo un error, hablar con administracion'
        });
    }
    
}