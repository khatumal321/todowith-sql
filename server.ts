import * as dotenv from "dotenv";
import express from 'express';
import client from './src/config/db';
var cors = require('cors')
const app = express();
const pg = require("pg");
dotenv.config();
// Database connection
// const client = new pg.client(process.env.POSTGRES_URI);

const db = client.connection;
db.on('error',console.error.bind("connection error",console))
db.once('open',()=>{
  console.log("Database connected")
})


const PORT = process.env.PORT || 3005
app.listen(PORT, () => {
    console.log('Server Running')
});

app.use(cors());
app.use(express.json());
app.use("/todo", require("./src/Todo/post"))



