import express from "express";
import fs from "node:fs";
import path from "node:path";

const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
    fs.readFile("./index.html", (error, data) => {
        if(error)
        throw error;

        res.sendFile(path.join(process.cwd(), "index.html"));
    });
});

app.get("/index.css", (req, res) => {
    fs.readFile("./index.css", (error, data) => {
        if(error)
        throw error;

        res.sendFile(path.join(process.cwd(), "index.css"));
    });
});

app.get("/about", (req, res) => {
    fs.readFile("./about.html", (error, data) => {
        if(error)
        throw error;

        res.sendFile(path.join(process.cwd(), "about.html"));
    });
});

app.get("/contact-me", (req, res) => {
    fs.readFile("./contact-me.html", (error, data) => {
        if(error)
        throw error;

        res.sendFile(path.join(process.cwd(), "contact-me.html"));
    });
});

app.use((req, res) => {
    fs.readFile("./404.html", (error, data) => {
        if (error) throw error;

        res.status(404);
        res.sendFile(path.join(process.cwd(), "404.html"));
    });
});

app.listen(PORT, (error) => {
    if(error)
    throw error;

    console.log(`Server Running on Port ${PORT}`);
});