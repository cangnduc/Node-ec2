import { Sequelize } from "sequelize";

const sequelize = new Sequelize('nodebae','root','',{
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
    define: {
        freezeTableName: true,
        }})

let connectDB = async () => {
    try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}}

export default connectDB;
