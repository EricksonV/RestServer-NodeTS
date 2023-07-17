import { Request,Response,NextFunction } from "express";


export const esAdminRole = (req:Request, res:Response, next:NextFunction) => {

    if( !(req as any).usuario){
        return res.status(500).json({
            msg: 'Se quiere verificar el role sin validar el token primero'
        });
    }

    const { role, name} = (req as any).usuario;

    if(role !== 'ADMIN_ROLE'){
        return res.status(401).json({
            msg: `${name} no es administrador - no tiene permiso`
        });
    }
    

    next();
}

export const tieneRole = (...roles:string[]) => {
    
    return (req:Request, res:Response, next:NextFunction)=>{
        if( !(req as any).usuario){
            return res.status(500).json({
                msg: 'Se quiere verificar el role sin validar el token primero'
            });
        }

        if (!roles.includes((req as any).usuario.role)){
            return res.status(401).json({
                msg: `${(req as any).usuario.name} no tiene un role con permiso`
            });
        }
        next();
    }
}