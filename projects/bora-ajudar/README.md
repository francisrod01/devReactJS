# Bora Ajudar #

Project for donation and campaign management.

Made in ReactJS and Firebase Cloud Functions.

- Author: [Francis Rodrigues][1]

## Firebase ##

Our database can be setted using a [Firebase project][2].

## Pagseguro ##

### 1. How to generate a token ###

In your Pagseguro account, you'll generate a token by item from menu: `Preferências` >> `Integrações`. You can access this page [here][6].

### 2. Using Sandbox Configurations ###

As I know, this API changes very much in many times so, I will not put many information about it here.

First you will create your account and after that, you will access the [Sandbox page][7] and receive credentials to integrate using Pagseguro.

Example of credentials as below.

App Credentials:

- appID: `app1234567890`
- AppKey: `C012345678901234567890ABCDEFGHIJKLMNOPQRSTUVXZ`

Test seller:

- email: `v1234567890@sandbox.pagseguro.com.br`
- senha: `1234567890U`
- Chave pública: `PUB12345678901234567890ACBDEF`

### 3. Making a Payment Request ###

HTTP Parameters:

- Sandbox URL: `POST https://ws.sandbox.pagseguro.uol.com.br/v2/checkout`
- Production URL: `POST https://ws.pagseguro.uol.com.br/v2/checkout`

Content-Type header:

You need to change the `CHARSET_HERE` to charset from your app/website (ISO-8859-1, UTF-8, etc).

```json
Content-Type: application/x-www-form-urlencoded; charset=ISO-8859-1
```

### Example to a request containing all parameters ###

For an example in Sandbox, there is an example in [Pagseguro Payment][8] our references.

### 4. Finishing the Payment ###

After that request, you will receive a XML code containing a transaction code. Copy that and you need to redirect the user via browser to a Pagseguro payment page to finish this transaction.

```txt
https://pagseguro.uol.com.br/v2/checkout/payment.html?code=YOUR-CODE-HERE
```

### 5. Notifications ###

Receive a notification every time the transaction changes.

See [references][9] for more details.

## Environment variables ##

Loads environment variables from `.env` for nodejs projects.

[Dotenv][10] is a zero-dependency module that loads environment variables from a `.env` file into `process.env`. Storing configuration in the environment separate from code is based on The [Twelve-Factor App][11] methodology.

## How to run it ##

### Front-end ###

First you will create a env file corresponding to your node environment mode and type as below:

At this moment, you will run as `development`, so create a env file to front-end changing the values as the firebase configuration. This file is called as `.env.dev`.

```bash
API_URL=http://localhost:5001/bora-ajudar-abcd/us-central1/api
FIREB_API_KEY=0123456789ABCDEFGHIJKLMNOP
FIREB_AUTH_DOMAIN=bora-ajudar-abcd.firebaseapp.com
FIREB_PROJECT_ID=bora-ajudar-abcd
FIREB_DATABASE_URL=https://bora-ajudar-abcd.firebaseio.com
FIREB_STORAGE_BUCKET=bora-ajudar-abcd.appspot.com
FIREB_MESSAGING_SENDER_ID=0123456789
```

Run the localhost website as `yarn start` and see the output:

```bash
~$ react-app-env --env-file=.env.dev start
Starting the development server...
...
Done in 14.72s.
```

### In the Back-end (API) ###

Run the local API in `functions/`:

At this moment, running as `development`, create a `.env.development` file and type the code below:

```bash
PAGSEGURO_URI=https://ws.pagseguro.uol.com.br/v2/checkout
PAGSEGURO_CHECKOUT_URI=https://pagseguro.uol.com.br/v2/checkout/payment.html
PAGSEGURO_NOTIFICATIONS_URI=https://ws.pagseguro.uol.com.br/v3/transactions/notifications
PAGSEGURO_EMAIL=my-store-email@gmail.com
PAGSEGURO_TOKEN=0123456789ABCDEFGHIJKLMNOP
```

Now run the `yarn serve` command and see the output:

```bash
$ firebase serve --only functions

=== Serving from '/home/../projects/../bora-ajudar'...

i  functions: Preparing to emulate functions.
Warning: You're using Node.js v9.3.0 but Google Cloud Functions only supports v6.11.5.
✔  functions: api: http://localhost:5000/bora-ajudar-abcd/us-central1/api
info: Worker for api closed due to file changes.
```

## References ##

- [Console Firebase][2]
- [Node.js CORS middleware][3]
- [Firebase - Call Functions via HTTP Requests][4]
- [PagSeguro for Developers][5]
- [PagSeguro Sandbox - Dev environments][7]
- [PagSeguro for Developers - Default Payment][8]
- [PagSeguro for Developers - Notifications][9]
- [Dotenv - Loads environment variables from .env files][10]

## License ##

MIT

  [1]: https://github.com/francisrod01
  [2]: https://console.firebase.google.com
  [3]: https://github.com/expressjs/cors
  [4]: https://firebase.google.com/docs/functions/http-events
  [5]: https://dev.pagseguro.uol.com.br/documentacao
  [6]: https://pagseguro.uol.com.br/preferencias/integracoes.jhtml
  [7]: https://sandbox.pagseguro.uol.com.br/aplicacao/configuracoes.html
  [8]: https://dev.pagseguro.uol.com.br/documentacao/pagamento-online/pagamentos/pagamento-padrao
  [9]: https://dev.pagseguro.uol.com.br/documentacao/pagamento-online/notificacoes/api-de-notificacoes
  [10]: https://github.com/motdotla/dotenv/tree/v5.0.1#config
  [11]: https://12factor.net/config
