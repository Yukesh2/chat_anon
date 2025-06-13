//importing the express module 
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

//importing http and crocs
const http = require('http').Server(app);
const cors = require('cors');

//for establishing the connection thorugh local host 
const socketID = require('socket.io')(http,{
    cors:{
        origin : "https://anon-topaz.vercel.app",
        methods : ["GET", "POST"],
    },
});



app.use(cors());

//to connect 
socketID.on('connection',(socket)=>{
    console.log(`${socket.id} user has just connected`);
    socket.on('send_message',(data)=>{
        //server receives the message from the frontend
        //and console logs it 
        console.log(data);
        //server sends the message towards the 
        //receive_message event listener which is 
        //in the frontend
        socketID.emit('receive_message',data);
        
    })
    socket.on('disconnect',()=>{
        console.log('A user has been disconnected');
    })
})

http.listen(PORT,()=>{
    console.log(`server started`);
})


//rendering the message when we visit the api endpoint
app.get('/api',(req,res)=>{
    res.json({
        message: "Hello world",
    });
});



