import { config } from "dotenv";
import mongoose from "mongoose";
import path from "path";
import { Init } from ".";




config({path:path.resolve(__dirname,"./../.env")})
class Database extends Init{
    constructor(){
        super();  
        this.setDBConnection()
        
      }

  public setDBConnection() {
    console.log("setDBConnection", process.env.MONGO_URI)
    mongoose.connect(process.env.MONGO_URI as string, 
      {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      // authSourve: 'admin',
    })
    const db = mongoose.connection
    db.on('error', console.error.bind(console, 'connection error:'))
    db.once('open', () => {
      console.log('Connected to MongoDB')
  })
    }
  }

new Database()