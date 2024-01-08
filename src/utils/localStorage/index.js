// import AsyncStorage from '@react-native-async-storage/async-storage';

// export const storeData = async (key, value) => {
//     try {
//         await AsyncStorage.setItem(key, JSON.stringify(value));
//     } catch (e) {
//         // saving error
//     }
// };

// export const getData = async (key) => {
//     try {
//         const value = await AsyncStorage.getItem(key);
//         if (value !== null) {
//             // value previously stored
//             return JSON.parse(value)
//         } else {
//             return 0;
//         }
//     } catch (e) {
//         // error reading value
//     }
// };

// export const clearStorage = async () => {
//     AsyncStorage.clear();
// }

// export const checkAsyncStorage = async (position) => {
//     const keys = await AsyncStorage.getAllKeys();
//     const items = await AsyncStorage.multiGet(keys);

//     console.log(position, "ASYNCSTORAGE: ", items);
// };

import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        // saving error
    }
};

export const getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            // value previously stored
            return JSON.parse(value)
        } else {
            return 0;
        }
    } catch (e) {
        // error reading value
    }
};

export const clearStorage = async () => {
    AsyncStorage.clear();
}

export const checkAsyncStorage = async (position) => {
    const keys = await AsyncStorage.getAllKeys();
    const items = await AsyncStorage.multiGet(keys);

    console.log(position, "ASYNCSTORAGE: ", items);
};

export const setData = async (key, updatedValue) => {
    try {
        const existingValue = await AsyncStorage.getItem(key);

        if (existingValue !== null) {
            // If the key exists, update its value
            const parsedExistingValue = JSON.parse(existingValue);
            const newValue = { ...parsedExistingValue, ...updatedValue };
            await AsyncStorage.setItem(key, JSON.stringify(newValue));
        } else {
            // If the key doesn't exist, create a new entry
            await AsyncStorage.setItem(key, JSON.stringify(updatedValue));
        }
    } catch (e) {
        // handle error
    }
};