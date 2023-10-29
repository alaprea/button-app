import { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from "../styles/colors";
import { Audio } from 'expo-av';
import ButtonModal from "./buttonModal";
import Ionicons from 'react-native-vector-icons/Ionicons';
import utils from "../utils/utils";

export default function SoundButton ({id, name, color, mp3, favorite, editButton}) {
  const [getColor, setColor] = useState(color)
  const [isModalVisible, setModalVisible] = useState(false);
  const [isFavorite, setIsFavorite] = useState(favorite);
  const [sound, setSound] = useState();

  useEffect(() => {
    return sound ? () => sound.unloadAsync() : undefined;
  }, [sound]);

  useEffect(() => {
    setColor(color);
    setIsFavorite(favorite)
  }, [color,favorite])

  const playSound = async () => {
    let file = utils.getFile(mp3);
    
    const { sound } = await Audio.Sound.createAsync(file);
    setSound(sound);
    await sound.playAsync();
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.buttonContainer}>

      <TouchableOpacity style={[styles.button, {backgroundColor: getColor}]} onPress={playSound} onLongPress={toggleModal}></TouchableOpacity>
      <Text style={styles.buttonLabel}> {name} {isFavorite ? <Ionicons name="star" size={10}/> : ''}</Text>
      <ButtonModal visible={isModalVisible} toggleModal={toggleModal} id={id} name={name} color={getColor} setColor={setColor} isFavorite={isFavorite} setIsFavorite={setIsFavorite} editButton={editButton}/>

    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center', 
    justifyContent: 'center',
    margin: "1%",
    width: "33%"
  },
  button: {
    borderRadius: 25,
    height: 50,
    width: 50,
    marginBottom: "2%"
  },
  buttonLabel: {
    fontWeight: "bold",
    color: Colors.title,
  }
});