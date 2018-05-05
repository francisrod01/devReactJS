const dotenv = require('dotenv');

const NODE_ENV = process.env.NODE_ENV || 'development';
const CWD = process.cwd(); // current working directory.
const result = dotenv.config({ path: `${CWD}/.env.${NODE_ENV}` });
const envs = process.env;

module.exports = envs;
