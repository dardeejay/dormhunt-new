import { collection, getDocs, query, where } from "firebase/firestore";
import { FIREBASE_AUTH, FIREBASE_DB } from "../FirebaseConfig";

const updateUserDetailsFunction = async () => {
  const db = FIREBASE_DB;
  const auth = FIREBASE_AUTH;
  const currentUser = auth.currentUser;
  const userRef = collection(db, "users");
  const q = query(userRef, where("uid", "==", currentUser?.uid));
  const userDoc = await getDocs(q);
  return userDoc.docs[0].data();
};


export default updateUserDetailsFunction;