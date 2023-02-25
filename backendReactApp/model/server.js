const express = require('express')
const cors = require('cors')

const { db } = require('../db/connection');

//Models
const { Post } = require('./post.model')

class Server {

  constructor (){
    this.app = express();
    this.port = process.env.PORT;

    //DB Connection
    this.dbConnection();

    //Middlewares
    this.middlewares();
    
    //Rutas de mi aplicación
    this.routes();
  }

  async dbConnection(){

    try {
      await db.authenticate();
      console.log('Database Online');
      // await db.sync()
    } catch (error){
      throw new Error( error );
    }

  }

  middlewares(){
    
    // CORS
    this.app.use( cors() );
    
    //Lectura y paseo del body
    this.app.use( express.json() );
    
    //Directorio público
    this.app.use( express.static('public') );
  }
  
  routes(){
    this.app.use('/api/post', require('../routes/post.routes'))
  }

  listen(){
    this.app.listen( this.port, ()=>{
      console.log('Servidor corriendo en puerto ', this.port)
    } );
  }

}

module.exports = Server