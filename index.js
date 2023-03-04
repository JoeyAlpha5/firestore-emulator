const { getFirestore, connectFirestoreEmulator, collection, getDocs } = require("firebase/firestore");
const { initializeApp } = require ("firebase/app");


// initialize firebase app
const firebaseConfig = {

}

// firebaseApps previously initialized using initializeApp()
const app = initializeApp(firebaseConfig);
const db = getFirestore();
connectFirestoreEmulator(db, 'localhost', 8080);


// get firestore data
const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "customers"));
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    });
}

// call function
getData();

