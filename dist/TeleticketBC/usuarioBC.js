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
const usuarioDALC_1 = __importDefault(require("../TeleticketDALC/usuarioDALC"));
class UsuarioBC {
    constructor() {
        this.usuarioDALC = new usuarioDALC_1.default();
    }
    getUsuarios(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.usuarioDALC.getUsuarios(req, res);
        });
    }
    getUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.usuarioDALC.getUsuarios(req, res);
        });
    }
    postUsuarios(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.usuarioDALC.postUsuario(req, res);
        });
    }
    putUsuarios(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.usuarioDALC.putUsuario(req, res);
        });
    }
    deleteUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.usuarioDALC.deleteUsuario(req, res);
        });
    }
}
exports.default = UsuarioBC;
