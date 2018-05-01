import rebase from 're-base';
import firebase from 'firebase';

const envs = process.env;

const config = {
  apiKey: envs.REACT_APP_FIREB_API_KEY,
  authDomain: envs.REACT_APP_FIREB_AUTH_DOMAIN,
  databaseURL: envs.REACT_APP_FIREB_DATABASE_URL,
  projectId: envs.REACT_APP_FIREB_PROJECT_ID,
  storageBucket: envs.REACT_APP_FIREB_STORAGE_BUCKET,
  messagingSenderId: envs.REACT_APP_FIREB_MESSAGING_SENDER_ID
}

const app = firebase.initializeApp(config);
const base = rebase.createClass(app.database());
export const auth = firebase.auth()

export default base;
