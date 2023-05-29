"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const userRoutes_1 = require("../routers/userRoutes");
dotenv_1.default.config();
class App {
    constructor() {
        this.port = process.env.PORT || '8080';
        //rutas
        this.usuariosPath = '';
        //Variables Path
        this.usuariosPath = '/api/users';
        //Funciones
        this.app = (0, express_1.default)();
        this.middlewares();
        this.routes();
    }
    middlewares() {
        //CORS
        this.app.use((0, cors_1.default)());
        //Carpeta publica
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.usuariosPath, userRoutes_1.router);
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            this.app.listen(this.port, () => {
                console.log(`Listening: ${this.port}`);
            });
        });
    }
}
exports.App = App;
