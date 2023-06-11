import { Request, Response } from 'express';
import UsuarioDALC from '../TeleticketDALC/usuarioDALC';


class UsuarioBC{

    usuarioDALC = new UsuarioDALC();
    
    constructor(){

    }
    async getUsuarios (req:Request,res:Response){
        this.usuarioDALC.getUsuarios(req,res);
    }
    async getUsuario (req:Request,res:Response){
        this.usuarioDALC.getUsuarios(req,res);
    }
    async postUsuarios (req:Request,res:Response){
        this.usuarioDALC.postUsuario(req,res);
    }
    async putUsuarios (req:Request,res:Response){
        this.usuarioDALC.putUsuario(req,res);
    }
    async deleteUsuario (req:Request,res:Response){
        this.usuarioDALC.deleteUsuario(req,res);
    }
    
    
}

export default UsuarioBC;