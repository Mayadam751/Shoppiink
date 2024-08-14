import dotenv from 'dotenv'
import express from 'express'
import { dbConnection } from './db/connection.js';
import userRoutes from './src/modules/users/user.routes.js';
import cors from 'cors'
const app = express()
const port = 5000;
dotenv.config({})
app.use(express.json());

dbConnection()
app.use('/user',userRoutes)
// app.use(cors({origin: "http://localhost:3000/register"}))
app.use(cors({
    origin: 'http://localhost:3000/register', 
    credentials: true
  }));


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))