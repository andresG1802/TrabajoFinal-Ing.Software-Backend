"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarioBC_1 = __importDefault(require("../TeleticketBC/usuarioBC"));
const router = (0, express_1.Router)();
const usuarioBC = new usuarioBC_1.default();
router.get('/', usuarioBC.getUsuarios);
router.get('/:id', usuarioBC.getUsuario);
router.post('/', usuarioBC.postUsuarios);
router.put('/:id', usuarioBC.putUsuarios);
router.delete('/:id', usuarioBC.deleteUsuario);
exports.default = router;
