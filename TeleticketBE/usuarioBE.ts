import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Usuario = db.define('Usuario', {
    nombre: {
        type: DataTypes.STRING
    },
    apellido:{
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password:{
        type:DataTypes.STRING
    },
    direccion:{
        type:DataTypes.STRING
    },
    telefono:{
        type:DataTypes.STRING
    },
    estado:{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    }
        
},
{
    //para que corra el modelo 
    timestamps:false
});


export default Usuario;