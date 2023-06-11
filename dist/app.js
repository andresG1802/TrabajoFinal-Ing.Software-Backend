"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const serverBE_1 = __importDefault(require("./TeleticketBE/serverBE"));
// Configurar dot.env
dotenv_1.default.config();
const server = new serverBE_1.default();
server.listen();
