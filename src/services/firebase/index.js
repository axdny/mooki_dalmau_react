import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAyg6DxGvdIxgR4E5JtZY5zSSYl3xSA8rE",
  authDomain: "mooki-51f70.firebaseapp.com",
  projectId: "mooki-51f70",
  storageBucket: "mooki-51f70.appspot.com",
  messagingSenderId: "832732755364",
  appId: "1:832732755364:web:e11ccf9303b888d6ccbd31"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);