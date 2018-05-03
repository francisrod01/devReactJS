const functions = require('firebase-functions');

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

// Automatically allow cross-origin requests.
app.use(cors({ origin: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res, next) => {
  res.send('BoraAjudar Server!');
});

app.post('/donate', (req, res, next) => {
  res.send(req.body);
});

exports.api = functions.https.onRequest(app);
