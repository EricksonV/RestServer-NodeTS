"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const users = __importStar(require("../controllers/usersControllers"));
const validaCampos_1 = require("./middlewares/validaCampos");
const validators = __importStar(require("../helpers/db-validators"));
exports.router = (0, express_1.Router)();
exports.router.get('/', [
    (0, express_validator_1.check)('limit', 'El parametro limite debe ser numerico').optional().isInt(),
    (0, express_validator_1.check)('from', 'El parametro desde debe ser numerico').optional().isInt(),
    validaCampos_1.validarCampos
], users.usersGet);
exports.router.post('/', [
    (0, express_validator_1.check)('name', 'El nombre es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('password', 'La contrasenia es obligatoria y con mas de 6 letras').isLength({ min: 6 }),
    (0, express_validator_1.check)('email').isEmail().withMessage('El email no es valido'),
    (0, express_validator_1.check)('email').custom(validators.validEmail),
    (0, express_validator_1.check)('role').custom(validators.validRole),
    validaCampos_1.validarCampos
], users.usersPost);
exports.router.put('/:id', [
    (0, express_validator_1.check)('id', 'No es un ID de Mongo').isMongoId(),
    (0, express_validator_1.check)('id').custom(validators.existUserId),
    (0, express_validator_1.check)('role').custom(validators.validRole),
    validaCampos_1.validarCampos
], users.usersPut);
exports.router.delete('/', users.usersDelete);
