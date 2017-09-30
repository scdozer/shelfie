const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors');
const controller = require('./controller');
require('dotenv').config();

const app = express();
massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set('db', dbInstance)
});

app.use( bodyParser.json() );
app.use( cors() );
app.get('/api/shelfie', controller.getShelfie);
app.get('/api/shelf/:shelfid', controller.getShelf);
app.get('/api/bins/:shelfid', controller.getBins);

const port= process.env.PORT || 3001
app.listen( port, () => { console.log(`Listening on port ${port}`); } );
