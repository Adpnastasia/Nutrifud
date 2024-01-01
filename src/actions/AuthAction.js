import { Alert } from "react-native";
import FIREBASE from "../config/FIREBASE";
<<<<<<< HEAD
import { clearStorage, getData, storeData } from "../utils/localStorage";

=======
import { checkAsyncStorage, clearStorage, storeData } from "../utils/localStorage";
>>>>>>> ef483d5cffe0a3e22bc9f633239b1cd51ec6aed9
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
<<<<<<< HEAD
=======
        checkAsyncStorage('register');
>>>>>>> ef483d5cffe0a3e22bc9f633239b1cd51ec6aed9
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
<<<<<<< HEAD
=======
            checkAsyncStorage('login');
>>>>>>> ef483d5cffe0a3e22bc9f633239b1cd51ec6aed9
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
<<<<<<< HEAD
=======
            checkAsyncStorage('logout');
>>>>>>> ef483d5cffe0a3e22bc9f633239b1cd51ec6aed9
        })
        .catch((error) => {
            // An error happened.
            alert(error);
        });
};

<<<<<<< HEAD
export const addPhoto = async (data) => {
    try {
      // Ambil data yg sudah login dari fungsi 'getData'
      const userData = await getData("user");
  
      if (userData) {
        // Tambah note sesuai uid
        const dataBaru = {
          ...data,
          uid: userData.uid,
        };
  
        await FIREBASE.database()
          .ref("photos/" + userData.uid)
          .push(dataBaru);
  
        console.log("Photo added successfully");
      } else {
        Alert.alert("Error", "Login Terlebih Dahulu");
      }
    } catch (error) {
      throw error;
    }
  };
=======
>>>>>>> ef483d5cffe0a3e22bc9f633239b1cd51ec6aed9
