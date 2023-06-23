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
exports.existUserId = exports.validEmail = exports.validRole = void 0;
const roleSchema_1 = __importDefault(require("../models/Schemas/roleSchema"));
const usersSchema_1 = __importDefault(require("../models/Schemas/usersSchema"));
const validRole = (role = '') => __awaiter(void 0, void 0, void 0, function* () {
    const existRole = yield roleSchema_1.default.findOne({ role });
    if (!existRole) {
        throw new Error(`El rol ${role} no esta en la bd`);
    }
});
exports.validRole = validRole;
const validEmail = (email = '') => __awaiter(void 0, void 0, void 0, function* () {
    const existEmail = yield usersSchema_1.default.findOne({ email });
    if (existEmail) {
        throw new Error(`El email ${email} ya existe en la bd`);
    }
});
exports.validEmail = validEmail;
const existUserId = (id = '') => __awaiter(void 0, void 0, void 0, function* () {
    const existUser = yield usersSchema_1.default.findById(id);
    if (!existUser) {
        throw new Error(`El id: ${id} no existe en la bd`);
    }
});
exports.existUserId = existUserId;
