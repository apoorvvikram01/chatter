import express from 'express';
import cors from 'cors';
import http from 'http';
import {Server} from 'socket.io'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import userRoute from '../server/routes/user.route.js'
import authRoute from '../server/routes/auth.route.js'

dotenv.config()

const PORT = process.env.PORT || 8000;

const app = express();

app.use (cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Database connected successfully")
})
   


const server = http.createServer(app);

app.use('/api/', userRoute);
app.use('/api/', authRoute);


server.listen(PORT, ()=>{
console.log(`Server is listening on ${PORT}`);
})
