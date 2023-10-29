import AsyncStorage from '@react-native-async-storage/async-storage';
import data from '../data/data.json'

let manageStorage = {}

manageStorage.getButtons = async () => {
  try {
    const buttons = await AsyncStorage.getItem('buttons');
    if (buttons === null) await AsyncStorage.setItem('buttons', JSON.stringify(data));
    else return JSON.parse(buttons);
  }
  catch (e) {
    console.log("Error retrieving data")
  }
}

manageStorage.getFavoriteButtons = async () => {
  try {
    const buttons = await AsyncStorage.getItem('buttons');
    if (buttons !== null) {
      let buttonsObject = JSON.parse(buttons)

      const favorites = {};
      
      Object.keys(buttonsObject).map(i => {
        if (buttonsObject[i].isFavorite) favorites[i] = buttonsObject[i];
      });

      return favorites;
    }
  }
  catch (e) {
    console.log("Error retrieving data")
  }
}

manageStorage.setButtons = async (data) => {
  try {
    await AsyncStorage.setItem('buttons', JSON.stringify(data));
  }
  catch (e) {
    console.log("Error setting data");
  }
}

manageStorage.removeButtons = async () => {
  try {
    const buttons = await AsyncStorage.getItem('buttons');
    if (buttons !== null) await AsyncStorage.removeItem('buttons');
  }
  catch (e) {
    console.log("Error trying to remove data")
  }
}

export default manageStorage;