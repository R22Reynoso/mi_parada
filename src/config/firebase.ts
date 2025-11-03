import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';  
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
     apiKey: "AIzaSyD3G-g86x3nuOXzcavLdkv9jzuyNNUZQHM",
  authDomain: "mi-parada-684c5.firebaseapp.com",
  projectId: "mi-parada-684c5",
  storageBucket: "mi-parada-684c5.firebasestorage.app",
  messagingSenderId: "933545408365",
  appId: "1:933545408365:web:4b012b72d99edd32900c64",
  measurementId: "G-VRH3NJBV42"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

async function getStops(db:any) {
    const stopsRef = db.collection(db, 'stops');
    const stopSnapshot = await getDocs(stopsRef);
    const stopsList = stopSnapshot.docs.map(doc => doc.data());
    return stopsList;

};


