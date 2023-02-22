// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut as signOutFirebase,
  User,
  getIdTokenResult
} from "firebase/auth"
import {getFirestore} from "firebase/firestore";
import { initializeAppCheck, ReCaptchaV3Provider, getToken } from "firebase/app-check"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = require("./config/firebase.json")

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore()

// Pass your reCAPTCHA v3 site key (public key) to activate(). Make sure this
// key is the counterpart to the secret key you set in the Firebase console.
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('6Ldhc6MjAAAAAEaBNLc8hbzKRJzOiCVZMXcmvGme'),
});

const provider = new GoogleAuthProvider()
export const auth = getAuth()

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .catch((reason) => {
      console.error(reason)
    })
}

// Sign current user out
export const signOut = () => {
  signOutFirebase(auth)
    .catch((error) => {
      console.error(error)
    });
}

// Async function which gets ID token for making request to the api
export const getIdTokenForApiCall = async () => {
  try {
    return await auth.currentUser?.getIdToken()
  } catch (error) {
    throw error
  }
}

// Async function which gets AppCheck token for making request to the api
export const getAppCheckTokenForApiCall = async () => {
  try {
    const result = await getToken(appCheck, false)
    return result.token
  } catch (error) {
    throw error
  }
}

// TODO make this function accept many claims and it checks them all at once
export const verifyClaim = (user: User | null, claim: string) => {
  if (user) {

    // admin.suppis@nummenpojat.fi is head admin account, so it can interact with suppis even if it's not given permission on custom claims
    if (user.email == "admin.suppis@nummenpojat.fi") {
      return;
    }

    getIdTokenResult(user)
      .then((IdTokenResult) => {
        if (!IdTokenResult.claims[claim]) {
          alert(" Sinulla ei ole oikeuksia Suppikseen\n Jos sinulla @nummenpojat.fi päätteinen email tili yritä uudelleen sillä\n\n Nyt sinut kirjataan ulos")
          signOut()
          location.replace("/login")
        }
      })
  }
}