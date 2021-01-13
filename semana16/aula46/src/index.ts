// Dependencies
import knex from "KNEX";
import Knex from "KNEX";
import express, { Express } from "express"

// Configurations
import dotenv from "dotenv"
import { AddressInfo } from "net";

dotenv.config()
const app: Express = express()

export const connection: Knex = knex({
    client: "mysql",
    connection: {
       host: process.env.DB_HOST,
       port: 3306,
       user: process.env.DB_USER,
       password: process.env.DB_PASSWORD,
       database: process.env.DB_NAME
    }
 });

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});