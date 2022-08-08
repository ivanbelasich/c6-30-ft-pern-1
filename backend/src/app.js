const express = require('express');
// import route from './routes/index'
const routes = require('./routes/index.js');

const app = express();

app.use(express.json({ limit: '50mb' }));

app.use("/api",routes)

export default app;