import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { 
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBbJDnmlNa2wObKWmQ6MLuXQ5KWbp0FDEA",
  authDomain: "insan-cemerlang-8011b.firebaseapp.com",
  projectId: "insan-cemerlang-8011b",
  storageBucket: "insan-cemerlang-8011b.appspot.com",
  messagingSenderId: "642542638808",
  appId: "1:642542638808:web:8dae3c0d85e3be8c5c29ad"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function ambilDaftarSiswa () {
  const siswaRef = collection(db,"siswa");
  const q = query(siswaRef,orderBy("nama"));
  const querySnapshot = await getDocs(q);
  
  let retval = [];
  querySnapshot.forEach(() => {
     retval.push({ id: doc.id,nama: doc.data().nama });
  });
  
  return retval;
}