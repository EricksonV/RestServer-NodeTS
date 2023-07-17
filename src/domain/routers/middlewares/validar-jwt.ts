import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from 'express';

import Usuario from '../../models/Schemas/usersSchema';

export const validarJWT = async(req:Request, res:Response, next:NextFunction) => {
    const token = req.header('x-token');
    if( !token ){
        return res.status(401).json({
            msg: 'No hay token en las peticiones'
        });
    }

    try {
        let secret = process.env.SECRETORPRIVATEKEY || '';    
        const { uid } = jwt.verify( token, secret) as JwtPayload;

        const usuario = await Usuario.findById( uid );

        if( !usuario ){
            return res.status(401).json({
                msg: 'Token no valido - usuario no existe en bd'
            });
        }

        //verificar si el usuario tiene estado true
        if( !usuario?.state){
            return res.status(401).json({
                msg: 'Token no valido - usuario estado false'
            });
        }

        (req as any).usuario = usuario;
        next();

    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'Token no valido'
        });
    }
}