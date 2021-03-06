
//Install express server
const express = require('express');
const path = require('path');

const happ = express();

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
happ.use(express.static(distDir));

// Serve only the static files form the dist directory
happ.use(express.static(__dirname + '/dist/fs-assignment'));

happ.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/fs-assignment/index.html'));
});

// Start the app by listening on the default Heroku port
happ.listen(process.env.PORT || 8080);



const debug = require('debug')('node-angular');
const app = require("./backend/app.js");
const http = require('http');

const normalizePort = val => {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        // named pipeno
        return val;
    }

    if (port >= 0) {
        //port number
        return port;
    }
    return false;
};

const onError = error => {
    if (error.syscall !== "listen") {
        throw error;
    }
    const bind = typeof addr === "string" ? "pipe" + addr : "port " + port;
    switch (error.code) {
        case "EACCES":
            console.error(bind + " requires elevated privilages");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
};

const onListening = () => {
    const addr = server.address();
    const bind = typeof addr === "string" ? "pipe" + addr : "port " + port;
    debug("Listening on " + bind);
    console.log("listening on port :" + port);
};

const port = normalizePort(process.env.PORT || "3000");
app.set('port', port);
const server = http.createServer(app);
server.on("error",onError);
server.on("listening", onListening);
server.listen(port);