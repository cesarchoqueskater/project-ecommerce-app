import { collection, getDocs, getFirestore, query, where, getDoc, doc, addDoc, updateDoc } from "firebase/firestore";
import { app } from './config'

const db = getFirestore(app)

export const getItems = async () => {
    const items = []
    const querySnapshot = await getDocs(collection(db, "items"));

    querySnapshot.forEach((doc) => {
        items.push(doc.data())
    });

    return items;
}


export const getItemsId = async (id) => {
    
    const items = []

    const docRef = doc(db, "items", id)
    const querySnapshot = await getDoc(docRef);

    console.log(querySnapshot)

    if (querySnapshot.exists()) {
        items.push(querySnapshot.data())
    }

    return items;
}


export const getItemsCategory = async (category) => {
    const items = []
    const q = query(collection(db, "items"), where("category", "==", category));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {

        items.push(doc.data())
    });

    return items
}


export const createOrder = async (order) => {

    try {
        const docRef = collection(db, "order");
        const querySnapshot = await addDoc(docRef , order);
        console.log(querySnapshot)
        console.log(querySnapshot.id)
        return querySnapshot.id;

    }catch(e){
        console.log(e)
    }

}