const functions = require('firebase-functions');

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const request = require('request-promise');
const parse = require('xml2js').parseString;
const envs = require('./envs');

// Automatically allow cross-origin requests.
app.use(cors({ origin: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define constants.
const email = envs.PAGSEGURO_EMAIL;
const token = envs.PAGSEGURO_TOKEN;
const pagSeguroUri = envs.PAGSEGURO_URI;
const checkoutUri = envs.PAGSEGURO_CHECKOUT_URI;
const paymentUrl = checkoutUri + '?code=';

// Define routes.
app.get('/', (req, res, next) => {
  res.send('BoraAjudar Server!');
});

app.post('/donate', (req, res, next) => {
  const form = {
    token,
    email,
    currency: 'BRL',
    itemId1: 'campaignId',
    itemDescription1: 'Donation',
    itemQuantity1: 1,
    itemAmount1: 2.53,
  }
  
  const headers = {
    'Content-Type': 'application/x-www-urlencoded; charset=UTF-8'
  }

  request({
    uri: pagSeguroUri,
    method: 'POST',
    form,
    headers
  })
    .then(data => {
      parse(data, (err, json) => {
        res.send({
          url: paymentUrl + json.checkout.code[0]
        });
      });
    });
});

app.post('/webhook', (req, res, next) => {
  const notificationsUri = envs.PAGSEGURO_NOTIFICATIONS_URI;
  const notificationCode = req.body.notificationCode;
  const notificationsParams = '?email=' + email + '&token=' + token;
  const notificationsFullUri = notificationsUri + '/' + notificationCode + notificationsParams;

  request(notificationsFullUri)
    .then(notificationXML => {
      parse(notificationXML, (err, transactionJson) => {
        const transaction = transactionJson.transaction;
        const status = transaction.status[0];
        const amount = transation.grossAmount[0];
        const campaign = transaction.items[0].item[0].id[0];
        
        // Save data on Firebase.
        //

        res.send('OK');
      });
    });
});

exports.api = functions.https.onRequest(app);
