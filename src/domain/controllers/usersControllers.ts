import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';

import User from '../models/Schemas/usersSchema'

export const usersGet = async(req:Request, res:Response) => {

    const { limit = 5, from = 0 } = req.query;
    const query = {state:true};

    const [total, users] = await Promise.all(
        [
            User.countDocuments( query ),
            User.find( query )
                .skip(Number(from))
                .limit(Number(limit))
        ]
    )

    res.status(200).json(
        { 
            total,
            users
        }
    );
}

export const usersPost = async(req:Request, res:Response)=>{

    const {name, email, password, role} = req.body;
    const user = new User({name, email, password, role});

    //encriptacion de password (hash)
    const salt:string | number = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync( password, salt );

    //Guardar en bd
    await user.save();

    res.status(201).json({user});
}

export const usersPut = async (req:Request, res:Response) => {

    const id:string = req.params.id;
    const{ _id, password, google, email, ...rest } = req.body;  

    if( password ){
        //encriptacion de password (hash)
        const salt:string | number = bcrypt.genSaltSync();
        rest.password = bcrypt.hashSync( password, salt );
    }   

    const user = await User.findByIdAndUpdate( id, rest);

    res.status(201).json({user});
}

export const usersDelete = async (req:Request, res:Response)=>{

    const { id } = req.params;


    //eliminarlo fisicamente
    //const user = await User.findByIdAndDelete( id );

    //actualizar el estado para desactivarlo
    const user = await User.findByIdAndUpdate( id, { state:false });

    res.status(200).json({
        user
    });
}