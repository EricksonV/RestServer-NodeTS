import { Router } from 'express';
import { check } from 'express-validator';

import * as auths from '../controllers/authController';
import { validarCampos } from './middlewares/validaCampos';

export const router = Router();

router.post('/login',[
    check('email', 'El Email debe ser obligatorio').isEmail(),
    check('password', 'La contrasenia es obligatoria').not().isEmpty(),
    validarCampos
], auths.login);