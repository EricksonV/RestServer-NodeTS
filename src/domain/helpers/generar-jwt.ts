import jwt from 'jsonwebtoken';



export const generarJWT = ( uid:string) =>{
    let secret = process.env.SECRETORPRIVATEKEY || '';
    return new Promise((resolve, reject)=>{
        const payload = { uid };

        jwt.sign( payload, secret, {
            expiresIn: '4h'
        },(err, token) =>{
            if(err){
                console.log(err);
                reject('No se pudo generar el token');
            }else{
                resolve( token );
            }
        });
    });
}