import dotenv from 'dotenv';
import Server from './TeleticketBE/serverBE';

// Configurar dot.env
dotenv.config();

const server = new Server();


server.listen();