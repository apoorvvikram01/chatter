import express from 'express';
import cors from 'cors';
import http from 'http';
import {Server} from 'socket.io'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import userRoute from '../server/routes/user.route.js'

dotenv.config()

const PORT = process.env.PORT || 8000;

const app = express();

app.use (cors({
    origin:'http://localhost:5173',
    credentials:true,
}));
app.use(express.json());

try {
    mongoose.connect(process.env.MONGO_URI)
    .then (console.log('connected to mongodb'));
   
} catch (error) {
    console.log(error)
}
   


const server = http.createServer(app);

app.use('/api/v1', userRoute);


server.listen(PORT, ()=>{
console.log(`Server is listening on ${PORT}`);
})
