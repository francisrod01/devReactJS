const request = require('request-promise');
const parse = require('xml2js').parseString;
const envs = require('./envs');

const email = envs.PAGSEGURO_EMAIL;
const token = envs.PAGSEGURO_TOKEN;

const notificationCode = '766B9C-AD4B044B04DA-77742F5FA653-E1AB24'; // example code.
const notificationsUri = envs.PAGSEGURO_NOTIFICATIONS_URI;
const notificationsParams = '?email=' + email + '&token=' + token;
const notificationsFullUri = notificationsUri + '/' + notificationCode + notificationsParams;

console.log('=== notifications full uri: ', notificationsFullUri);

// Checkout implementation
/*
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
  uri: envs.PAGSEGURO_URI,
  method: 'POST',
  form,
  headers
})
.then(data => {
  parse(data, (err, json) => {
    console.log('DONATED? ', json.checkout.code[0]);
  });
});
*/

// Notifications implementation.
request(notificationsFullUri)
.then(notificationXML => {
  parse(notificationXML, (err, transactionJson) => {
    const transaction = transactionJson.transaction;
    const status = transaction.status[0];
    const amount = transation.grossAmount[0];
    const campaign = transaction.items[0].item[0].id[0];
    console.log('=== END transaction: ', status, amount, campaign);
  });
});
