const express = require('express');
const cors = require('cors');

const useGraphql = require('./graphql');
//const { checkApiKey } = require('./middlewares/auth.handler');

const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/error.handler');

const createApp = async () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  require('./utils/auth');

  app.get('/api', (req, res) => {
    console.log('')
    const response =`
    <h1>Hola mi server en express</h1>
    `
    res.send(response);
  });

  app.get('/nueva-ruta', (req, res) => {
    res.send('Hola, soy una nueva ruta');
  });

  await useGraphql(app);

  app.use(logErrors);
  app.use(ormErrorHandler);
  app.use(boomErrorHandler);
  app.use(errorHandler);
  return app;
}

module.exports = createApp;