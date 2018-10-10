const Sequelize = require('sequelize')
const DataTypes = Sequelize.DataTypes

const db = new Sequelize('uniformdb','admin','password',{
    host:'localhost',
    dialect:'sqlite',
    storage:__dirname +'/data.db',
})

const User = db.define('users',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    Phn:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Address:{
        type: DataTypes.STRING,
        allowNull : false,      
    },
    Email:{
        type: DataTypes.STRING,
        allowNull: false,
    }
})

const Product = db.define('products',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    schoolname:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    price:{
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.0,
    }
})

db.sync()
    .then(()=>console.log("Database Synched"))
    .catch((err)=> console.error("Error while creating Database"))
    

exports = module.exports = {
    User, Product
} 