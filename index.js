import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import { dbConnection } from './db/connection.js';
import userRoutes from './src/modules/users/user.routes.js';

const app = express();

// Enable CORS for the React frontend
app.use(cors({
  origin: 'http://localhost:3000', // Allow React's port 3000
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
  credentials: true, // Enable cookies and other credentials
}));

const port = 5000;
dotenv.config({})
app.use(express.json());

dbConnection()
app.use('/user',userRoutes)
// app.use(cors({origin: "http://localhost:3000/register"}))


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))