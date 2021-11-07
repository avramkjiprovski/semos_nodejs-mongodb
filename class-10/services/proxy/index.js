require('dotenv').config();
const proxy = require('express-http-proxy');
const app = require('../../config/app');

const PROXY_PORT = process.env.PROXY_PORT;
const AUTHORS_PORT = process.env.AUTHORS_PORT;
const BOOKS_PORT = process.env.BOOKS_PORT;
const PREFIX = process.env.PREFIX;


app.use(
    `${PREFIX}/authors`,
    proxy(`http://localhost:${AUTHORS_PORT}`, {
        proxyReqPathResolver: async req => 
            {
                return req.url;
            }
    }),
);

app.use(
    `${PREFIX}/books`,
    proxy(`http://localhost:${BOOKS_PORT}`, {
        proxyReqPathResolver: async req => 
            {
                return req.url;
            }
    }),
);

app.listen(PROXY_PORT, () => {
    console.log(`Proxy server is running on port ${PROXY_PORT}`);
});