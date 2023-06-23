import { Router } from 'express';
import { check } from 'express-validator';

import * as users from '../controllers/usersControllers'
import { validarCampos } from './middlewares/validaCampos';
import * as validators from '../helpers/db-validators';

export const router = Router();

router.get('/',
    [
        check('limit', 'El parametro limite debe ser numerico').optional().isInt(),
        check('from', 'El parametro desde debe ser numerico').optional().isInt(),
        validarCampos
    ]
, users.usersGet);

router.post('/',
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('password', 'La contrasenia es obligatoria y con mas de 6 letras').isLength( { min:6 }),
        check('email').isEmail().withMessage('El email no es valido'),
        check('email').custom( validators.validEmail ),
        check('role').custom( validators.validRole ),
        validarCampos
    ]
,users.usersPost);

router.put('/:id',
    [
        check('id', 'No es un ID de Mongo').isMongoId(),
        check('id').custom( validators.existUserId ),
        check('role').custom( validators.validRole ),
        validarCampos
    ]
, users.usersPut);

router.delete('/:id', 
    [
        check('id', 'No es un ID de Mongo').isMongoId(),
        check('id').custom( validators.existUserId ),
        validarCampos
    ]
,users.usersDelete);