import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyB-5iZ8ZiONc1pmFqGlwCe1DS3y3EgJXUg',
  authDomain: 'mpn-generator.firebaseio.com',
  databaseURL: 'https://mpn-generator.firebaseio.com/'
}

firebase.initializeApp(config)
const database = firebase.database()

export default database
