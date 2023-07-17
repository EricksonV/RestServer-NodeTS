import express, { Application} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import {router as userRoutes} from '../routers/userRoutes';
import {router as pathRoutes} from '../routers/authRoutes';
import * as dbConnection  from '../../infraestructure/db/configDb';
dotenv.config();

export class App{
    private port:string = process.env.PORT || '8080';
    public app: Application;

    //rutas
    private usuariosPath:string = '';
    private authPath:string = '';

    constructor(){
        //Variables Path
        this.usuariosPath = '/api/users';
        this.authPath = '/api/auth';

        //Funciones

        //express
        this.app = express();
        //Middlewares
        this.middlewares();
        //rutas
        this.routes();
        //Connect db
        this.connectDb();
    }

    //conexion a bd
    private async connectDb(){
        await dbConnection.dbConnection();
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
        this.app.use(this.authPath, pathRoutes);
       this.app.use(this.usuariosPath, userRoutes);
       

    }

    async start() {
        this.app.listen(this.port, () =>{
            console.log(`Listening: ${this.port}`);
        });
        
    }

}