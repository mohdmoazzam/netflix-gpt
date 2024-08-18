import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfxrkVTmzyJqu6GtQdDH54NrIfmyTlm5A",
  authDomain: "netflixgpt-39c10.firebaseapp.com",
  projectId: "netflixgpt-39c10",
  storageBucket: "netflixgpt-39c10.appspot.com",
  messagingSenderId: "310104507884",
  appId: "1:310104507884:web:4889e0a03e5587dda0acc9",
  measurementId: "G-4VX5D4HZTM",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
