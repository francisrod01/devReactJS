const request = require('request-promise');
const parse = require('xml2js').parseString;
const envs = require('./envs');

const email = envs.PAGSEGURO_EMAIL;
const token = envs.PAGSEGURO_TOKEN;

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
