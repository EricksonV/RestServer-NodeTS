

import roleSchema from "../models/Schemas/roleSchema";
import usersSchema from "../models/Schemas/usersSchema";

export const validRole = async(role:string = '') =>{
    const existRole = await roleSchema.findOne({ role });
    if ( ! existRole ){
        throw new Error(`El rol ${role} no esta en la bd`);
    }
}

export const validEmail = async(email:string = '') => {
    const existEmail = await usersSchema.findOne({email});
    if( existEmail ){
        throw new Error(`El email ${email} ya existe en la bd`);
    }
}

export const existUserId = async(id:string = '') => {
    const existUser = await usersSchema.findById(id);
    if( !existUser ){
        throw new Error(`El id: ${id} no existe en la bd`);
    }
}