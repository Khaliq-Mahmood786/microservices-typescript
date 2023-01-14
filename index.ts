import express from "express";
import path from "path";
import { config } from "dotenv";
import bodyParser from "body-parser";
export class Init {
  private readonly _express: express.Application;

   constructor() {
    config({
      path: path.resolve(__dirname, "./.env"),
    });
    console.log("Initializing")
    this._express = express();
    this.getInit();
  }

  get express(): express.Application {
    return this._express;
  }
  public getInit(): void {
    this._express.use(bodyParser.json());
    this._express.listen(process.env.PORT, () => {console.log("app is running on port " + process.env.PORT)})
    }
}
new Init();


