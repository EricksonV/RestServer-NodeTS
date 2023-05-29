
import express, { Application} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import {router as userRoutes} from '../routers/userRoutes';

dotenv.config();

export class App{
    private port:string = process.env.PORT || '8080';
    public app: Application;

    //rutas
    private usuariosPath:string = '';

    constructor(){
        //Variables Path
        this.usuariosPath = '/api/users' 

        //Funciones
        this.app = express();
        this.middlewares();
        this.routes();
    }

    private middlewares(): void{

        //CORS
        this.app.use( cors() );

        //Lectura y parseo del body
        this.app.use( express.json() );

        //Carpeta publica
        this.app.use(express.static('public'));
    }

    private routes(): void {
       this.app.use(this.usuariosPath, userRoutes)

    }

    async start() {
        this.app.listen(this.port, () =>{
            console.log(`Listening: ${this.port}`);
        });
        
    }

}