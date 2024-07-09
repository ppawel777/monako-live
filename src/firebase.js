import fb from "firebase/app"
import firebaseConfig from './firebaseConfig';

export const firebase = !fb.apps.length ? fb.initializeApp(firebaseConfig) : fb.app()