import { useState, useEffect } from "react";
import { ScrollView, View, StyleSheet } from 'react-native';
import Colors from '../styles/colors';
import SoundButton from '../components/button';
import manageStorage from '../data/manageData';
import { useIsFocused } from "@react-navigation/native";

export default function Home ({ navigation }) {
  const [buttons,setButtons] = useState([])

  const isFocused = useIsFocused();

  useEffect(() => {
    const loadButtons = async () => {
      const data = await manageStorage.getButtons();
      if (data) setButtons(data)
    }
    loadButtons();
  },[isFocused])

  const editButton = async (id, color, isFavorite) => {
    const updatedButtons = buttons;
    updatedButtons[id].color = color;
    updatedButtons[id].isFavorite = isFavorite;

    setButtons(buttons);
    await manageStorage.setButtons(buttons);
  }

  const buttonsPerRow = 3;

  return (
    <ScrollView style={styles.container}>

      {Object.keys(buttons).map((name, index) => (
        index % buttonsPerRow === 0 && (
          <View style={styles.row} key={`row-${index / buttonsPerRow}`}>
            {Object.keys(buttons).slice(index, index + buttonsPerRow).map(buttonName => (
              <SoundButton key={buttonName} id={buttonName} name={buttons[buttonName].name} color={buttons[buttonName].color} mp3={buttons[buttonName].filename} favorite={buttons[buttonName].isFavorite} editButton={editButton}/>
            ))}
          </View>
        )
      )
    )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingVertical: "5%",
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: '5.5%',
  },
});
