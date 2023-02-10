// HTTPS in NextJS
// https://nextjs.org/docs/advanced-features/custom-server
// Middleware redirect
// https://stackoverflow.com/questions/66458059/how-do-i-force-or-redirect-my-next-js-website-to-use-https

const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const { default: sslRedirect } = require('heroku-ssl-redirect')

//Middleware
const express = require('express')

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = 80
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express();

    //Redirect
    server.use(sslRedirect());
    server.all('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://${hostname}:${port}`)
    })
})