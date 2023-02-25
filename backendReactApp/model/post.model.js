const { DataTypes } = require('sequelize');
const { db } = require('../db/connection');


const Post = db.define('Post',{
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },  
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },{
    tableName: 'Posts',
    timestamps: false
  }
)

module.exports = {
  Post
}


