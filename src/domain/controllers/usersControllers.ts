import { Request, Response } from 'express';


export const usersGet = (req:Request, res:Response) => {

    const {q, nombre = 'No name', apikey} = req.query;

    res.json({
        msg: 'Get api - controller',
        q,
        nombre, 
        apikey
    });
}

export const usersPost = (req:Request, res:Response)=>{

    const body = req.body;

    res.status(201).json({
        msg: 'Post api - controller',
        body
    });
}

export const usersPut = (req:Request, res:Response)=>{

    const id:any = req.params.id;

    res.status(201).json({
        msg: 'Put api - Controller',
        id
    });
}

export const usersDelete = (req:Request, res:Response)=>{
    res.status(200).json({
        msg: 'Delete api - Controller'
    });
}