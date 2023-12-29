import { Alert } from "react-native";
import FIREBASE from "../config/FIREBASE";
import { clearStorage, getData, storeData } from "../utils/localStorage";

export const registerUser = async (data, password) => {
    try {
        const success = await FIREBASE.auth().createUserWithEmailAndPassword(data.email, password);

        const dataBaru = {
            ...data,
            uid: success.user.uid,
        };

        await FIREBASE.database()
            .ref("users/" + success.user.uid)
            .set(dataBaru);
        //Local storage(Async Storage)
        storeData("user", dataBaru);
        return dataBaru;
    } catch (error) {
        throw error;
    }
};

export const loginUser = async (email, password) => {
    try {
        const success = await FIREBASE.auth().signInWithEmailAndPassword(email, password);
        const resDB = await FIREBASE.database()
            .ref("/users/" + success.user.uid)
            .once("value");

        if (resDB.val()) {
            // Local storage (Async Storage)
            await storeData("user", resDB.val());
            return resDB.val();
        } else {
            throw new Error("User data not found");
        }
    } catch (error) {
        throw error;
    }
};

export const logoutUser = () => {
    FIREBASE.auth()
        .signOut()
        .then(() => {
            // Sign-out successful.
            clearStorage();
        })
        .catch((error) => {
            // An error happened.
            alert(error);
        });
};