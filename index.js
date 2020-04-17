const express = require('express');
const bodyParser = require('body-parser');
const { createProxyMiddleware } = require('http-proxy-middleware');

const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/songs/', createProxyMiddleware({ target: 'http://54.241.202.220' }));
app.use('/api/comments/songId', createProxyMiddleware({ target: 'http://54.241.202.220' }));
app.use('/songs', createProxyMiddleware({ target: 'http://3.21.230.11:3000' }))
app.use('/api/songId', createProxyMiddleware({ target: 'http://54.151.19.84:4001' }))

app.use(express.static(__dirname));

app.listen(port, () => console.log(`listening on port ${port}`));
