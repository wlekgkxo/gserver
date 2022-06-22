// const httpServer = require("http").createServer();
// const io = require("socket.io")(3000);
//
// io.on("connection", (socket) => {
// 	console.log("connection");
// 	socket.on("init", (payload) => {
// 	    console.log(payload);
//     });
//
//     socket.on('send message', (item) => {
//         console.log(item.name + ' : ' + item.message);
//         io.emit('receive message', {name: item.name, message: item.message});
//     });
// });
//
// httpServer.listen(80);

const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer,{
    cors : {
        origin :"*",
        credentials :true
    }
});

io.on("connection", (socket) => {
    console.log("connection");
    socket.on("init", (payload) => {
        console.log(payload);
    });

    socket.on('send message', (item) => {
        console.log(item.name + ' : ' + item.message);
        io.emit('receive message', {name: item.name, message: item.message});
    });
});

httpServer.listen(80);
