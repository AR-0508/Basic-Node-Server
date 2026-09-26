import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const server = http.createServer((req, res) => {
    let absolutePath = fileURLToPath(import.meta.url);
    let dirName = path.dirname(absolutePath);

    let fileName, contentType, statusCode;

    if(req.url === "/"){
        fileName = path.join(dirName, "index.html");
        contentType = "text/html";
        statusCode = 200;
    }

    else if(req.url === "/index.css"){
        fileName = path.join(dirName, "index.css");
        contentType = "text/css";
        statusCode = 200;
    }

    else if(req.url === "/about"){
        fileName = path.join(dirName, "about.html");
        contentType = "text/html";
        statusCode = 200;
    }

    else if(req.url === "/contact-me"){
        fileName = path.join(dirName, "contact-me.html");
        contentType = "text/html";
        statusCode = 200;
    }

    else{
        fileName = path.join(dirName, "404.html");
        contentType = "text/html";
        statusCode = 404;
    }

    res.writeHead(statusCode, {
        "Content-Type" : contentType,
    })

    fs.readFile(fileName, (error, data) => {
        if(error){
            res.write("Error Reading File, could not get file contents.");
            res.end();
            return;
        }

        res.write(data);
        res.end();
    })
});

server.listen("8080");