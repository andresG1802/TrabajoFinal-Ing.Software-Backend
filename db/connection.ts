import { Sequelize } from 'sequelize';


const db = new Sequelize('teleticket','root', '', {
    host: 'localhost',
    dialect: 'mysql'
    //logging: false,
});

export default db;
