require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyPArser = require('body-parser');
const handlers = require('./handlers');
const routes = require('./routes');

const db = require('./models');


const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyPArser.json());

app.use('/api/auth', routes.auth);

app.use(handlers.notFound);
app.use(handlers.errors);

app.listen(port, console.log('server started on port 4000'));