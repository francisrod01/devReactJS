import Rebase from 're-base'
import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyA5P_bMaU-Jh1-DSwDtdp4mTnmSGSdDZiI",
    authDomain: "devreactjs-8cdf4.firebaseapp.com",
    databaseURL: "https://devreactjs-8cdf4.firebaseio.com",
    projectId: "devreactjs-8cdf4",
    storageBucket: "",
    messagingSenderId: "514612843673"
}

const firebaseApp = firebase.initializeApp(config)
const database = firebase.database(firebaseApp)
const base = Rebase.createClass(database)

export const providers = {
    'facebook': new firebase.auth.FacebookAuthProvider()
}

export const auth = firebase.auth()
export default base
