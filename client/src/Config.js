import { initializeApp } from "firebase/app"; 
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDxXXezAVer7hYGYz3OS1mC9U09YUNBX4w",
  authDomain: "task-manager-app-811a4.firebaseapp.com",
  projectId: "task-manager-app-811a4",
  storageBucket: "task-manager-app-811a4.firebasestorage.app",
  messagingSenderId: "86516654925",
  appId: "1:86516654925:web:ba0ba78e426dad4d0a0d04",
  measurementId: "G-Y3164B14B0"
}
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth