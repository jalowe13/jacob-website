// HTTPS in NextJS
// https://nextjs.org/docs/advanced-features/custom-server
// Using express set up server https://stackoverflow.com/questions/55304101/https-on-localhost-using-nextjs-express

const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const express = require('express');
const http = require('http');
const https = require('https');
const fs = require('fs');

const ports = {
    http: 80,
    https: 443
}

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const server = express();  

const options = {
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('www_jacoblowe_dev.crt')
}


app.prepare().then(() => {
    server.all('*', (req, res) => {
        return handle(req, res);
    });
    http.createServer(server).listen(ports.http);
    https.createServer(options, server).listen(ports.https);
})