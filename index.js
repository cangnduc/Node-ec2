const Sequelize = require('sequelize');
const { DataTypes } = require('sequelize');


const sequelize = new Sequelize("myDatabase",'root','',{
    host: 'localhost',
    dialect: 'mysql',
    define: {
        freezeTableName: true,
    }
});
const queryInterface = sequelize.getQueryInterface();

queryInterface.addColumn('users', 'password', { type: DataTypes.STRING,
    allowNull: false });
//createTable("User");
async function createTable(name) {
    const User = await sequelize.define(name,{  
        userID : {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
            },
        userName: {
            type: Sequelize.STRING,
            allowNull: false
            },
        firstName: DataTypes.STRING,
        passWord: {
            type: Sequelize.STRING,
            allowNull: false
            },
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        age: DataTypes.INTEGER
    });
    await User.create({
        userName: "admin3",
            firstName: "admin1",
            lastName: "admin1",
            passWord: "admin1",
            email: "admin1@gmail.com",
            age: 20
    })
    // User.sync().then(() => {
    //     const user = User.build({
    //         userName: "admin1",
    //         firstName: "admin1",
    //         lastName: "admin1",
    //         passWord: "admin1",
    //         email: "admin1@gmail.com",
    //         age: 20
    //     })
    //     return user.save();
    // }).then((data)=> {
    //     console.log(data);
    // }).catch((err) => {
    //     console.log(err);
    // });
    // (async () => {
    //     try {
    //         await sequelize.sync({force: true});
    //         const user = User.build({
    //             userName: "admin",
    //             firstName: "admin",
    //             lastName: "admin",
    //             passWord: "admin",
    //             email: "admin@gmail.com",
    //             age: 20
    //         })
    //         await user.save();
    //         console.log("all the table were synchronized successfully");
    //     } catch(error) {
    //         console.log(error);
    //     }
    // })();
}

// User.sync().then(() => {
//     console.log("table created");
// }).catch((err) => {
//     console.log(err);
// });

// sequelize.authenticate().then(() => {
//     console.log('Connection has been established successfully.');
// }).catch(err => {
//     console.error('Unable to connect to the database:', err);
// });

// try {
//     await sequelize.authenticate();
//     console.log("connected");
// } catch(error) {
//     console.error('Unable to connect to the database:', error);
// }
