import { useState, useEffect } from "react";
import { View, StyleSheet } from 'react-native';
import Colors from '../styles/colors';
import manageStorage from '../data/manageData';
import SoundButton from "../components/button";
import { useIsFocused } from "@react-navigation/native";

export default function Favorites ({ navigation }) {
  const [favoriteButtons,setfavoriteButtons] = useState([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    const loadButtons = async () => {
      const data = await manageStorage.getFavoriteButtons();
      if (data) setfavoriteButtons(data)
    }
    loadButtons();
  },[isFocused]);

  const editButton = async (id, color, isFavorite) => {
    let updatedButtons = await manageStorage.getButtons();
    updatedButtons[id].color = color;
    updatedButtons[id].isFavorite = isFavorite;
    await manageStorage.setButtons(updatedButtons)

    let updatedFavorites = await manageStorage.getFavoriteButtons();
    setfavoriteButtons(updatedFavorites);
  }

  const buttonsPerRow = 3;

  return (
    <View style={styles.container}>

      {Object.keys(favoriteButtons).map((name, index) => (
        index % buttonsPerRow === 0 && (
          <View style={styles.row} key={`row-${index / buttonsPerRow}`}>
            {Object.keys(favoriteButtons).slice(index, index + buttonsPerRow).map(buttonName => (
              <SoundButton key={buttonName} id={buttonName} name={favoriteButtons[buttonName].name} color={favoriteButtons[buttonName].color} mp3={favoriteButtons[buttonName].filename} favorite={favoriteButtons[buttonName].isFavorite} editButton={editButton}/>
            ))}
          </View>
        )
      )
    )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: "5%"
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: '2%',
  },
});
