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
const usuarioBE_1 = __importDefault(require("../TeleticketBE/usuarioBE"));
class UsuarioDALC {
    constructor() {
        this.getUsuarios = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const usuarios = yield usuarioBE_1.default.findAll();
            res.json({ usuarios });
        });
        this.getUsuario = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const usuario = yield usuarioBE_1.default.findByPk(id);
            if (usuario) {
                res.json(usuario);
            }
            else {
                res.status(404).json({
                    msg: `No existe un usuario con el id ${id}`
                });
            }
        });
        this.postUsuario = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { body } = req;
            try {
                const existeEmail = yield usuarioBE_1.default.findOne({
                    where: {
                        email: body.email
                    }
                });
                if (existeEmail) {
                    return res.status(400).json({
                        msg: 'Ya existe un usuario con el email ' + body.email
                    });
                }
                const usuario = usuarioBE_1.default.build(body);
                yield usuario.save();
                res.json(usuario);
            }
            catch (error) {
                console.log(error);
                res.status(500).json({
                    msg: 'Hable con el administrador'
                });
            }
        });
        this.putUsuario = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { body } = req;
            try {
                const usuario = yield usuarioBE_1.default.findByPk(id);
                if (!usuario) {
                    return res.status(404).json({
                        msg: 'No existe un usuario con el id ' + id
                    });
                }
                yield usuario.update(body);
                res.json(usuario);
            }
            catch (error) {
                console.log(error);
                res.status(500).json({
                    msg: 'Hable con el administrador'
                });
            }
        });
        this.deleteUsuario = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const usuario = yield usuarioBE_1.default.findByPk(id);
            if (!usuario) {
                return res.status(404).json({
                    msg: 'No existe un usuario con el id ' + id
                });
            }
            yield usuario.update({ estado: false });
            // await usuario.destroy();
            res.json(usuario);
        });
    }
}
exports.default = UsuarioDALC;
