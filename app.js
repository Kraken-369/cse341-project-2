const express = require('express');
const bodyParser = require('body-parser');
const { initDB, getDB } = require('./connects/db');
const routeUser = require('./routers/userRouter');
const routeTicket = require('./routers/ticketRouter');
const { swaggerUi, swaggerDocs } = require('./swagger');

const port = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/user', routeUser);
app.use('/tickets', routeTicket);

(async () => {
  try {
    await initDB();
    const db = getDB();

    app.listen(port, () => console.log('-==::APP is running::==-'));
  } catch (error) {
    console.error('Failed to initialize DB:', error);
  }
})();