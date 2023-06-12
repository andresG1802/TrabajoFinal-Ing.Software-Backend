import { Request, Response } from 'express';
import { json } from 'sequelize/types';
import UsuarioBE from '../TeleticketBE/usuarioBE';

class UsuarioDALC{
    constructor()
    {

    }
    getUsuarios = async( req: Request , res: Response ) => {

        const usuarios = await UsuarioBE.findAll();
    
        res.json({ usuarios });
    }
    getUsuario = async( req: Request , res: Response ) => {

        const { id } = req.params;
    
        const usuario = await UsuarioBE.findByPk( id );
    
        if( usuario ) 
        {
            res.json(usuario);
        } 
        else 
        {
            res.status(404).json({
                msg: `No existe un usuario con el id ${ id }`
            });
        }
    
    
    }
    postUsuario = async( req: Request , res: Response ) => {

        const { body } = req;
    
        try {
            
            const existeEmail = await UsuarioBE.findOne({
                where: {
                    email: body.email
                }
            });
    
            if (existeEmail) {
                return res.status(400).json({
                    msg: 'Ya existe un usuario con el email ' + body.email
                });
            }
    
    
            const usuario = UsuarioBE.build(body);
            await usuario.save();
    
            res.json( usuario );
    
    
        } catch (error) {
    
            console.log(error);
            res.status(500).json({
                msg: 'Hable con el administrador'
            })    
        }
    
    }
    putUsuario = async( req: Request , res: Response ) => {

        const { id }   = req.params;
        const { body } = req;
    
        try {
            
            const usuario = await UsuarioBE.findByPk( id );
            if ( !usuario ) {
                return res.status(404).json({
                    msg: 'No existe un usuario con el id ' + id
                });
            }
    
            await usuario.update( body );
    
            res.json( usuario );
    
        } catch (error) {
    
            console.log(error);
            res.status(500).json({
                msg: 'Hable con el administrador'
            })    
        }   
    }
    deleteUsuario = async( req: Request , res: Response ) => {

        const { id } = req.params;
    
        const usuario = await UsuarioBE.findByPk( id );
        if ( !usuario ) {
            return res.status(404).json({
                msg: 'No existe un usuario con el id ' + id
            });
        }
    
        await usuario.update({ estado: false });
    
        // await usuario.destroy();
        res.json(usuario);
    }
    
}



export default UsuarioDALC;
