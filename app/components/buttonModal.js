import Modal from "react-native-modal";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from "../styles/colors";

export default function ButtonModal({ id, visible, toggleModal, name, color, setColor, isFavorite, setIsFavorite, editButton }) {

  changeColor = (changedColor) => {
    setColor(changedColor);
    editButton(id,changedColor,isFavorite);
  }

  changeFavorite = (favorite) => {
    setIsFavorite(favorite);
    editButton(id,color,favorite);
  }

  return (
    <View>
      <Modal isVisible={visible} onBackdropPress={toggleModal} backdropOpacity={0}>

        <View style={styles.modalContainer}>

          <Ionicons name="close" size={20} color="white" style={styles.closeButton} onPress={toggleModal}/>

          <Text style={styles.modalText}> {name} {isFavorite ? <Ionicons name="star" size={15}/> : ''}</Text>

          <View style={styles.colorsContainer}>
            <TouchableOpacity onPress={() => changeColor("red")} style={[styles.setColorButton, {backgroundColor: "red"}, color === 'red' ? {borderWidth: 2}: {}]}></TouchableOpacity>
            <TouchableOpacity onPress={() => changeColor("blue")} style={[styles.setColorButton, {backgroundColor: "blue"}, color === 'blue' ? {borderWidth: 2}: {}]}></TouchableOpacity>
            <TouchableOpacity onPress={() => changeColor("green")} style={[styles.setColorButton, {backgroundColor: "green"}, color === 'green' ? {borderWidth: 2}: {}]}></TouchableOpacity>
            <TouchableOpacity onPress={() => changeColor("gold")} style={[styles.setColorButton, {backgroundColor: "gold"}, color === 'gold' ? {borderWidth: 2}: {}]}></TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.setFavoriteButton} onPress={() => changeFavorite(!isFavorite) }>
            <Text style={styles.setFavoriteButtonText}>{isFavorite ? 'Unset' : 'Set'} Favorite</Text>
          </TouchableOpacity>
          
        </View>

      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: "center",
    alignItems: 'center', 
    alignSelf: "center",
    backgroundColor: Colors.modalBackround,
    padding: "3%",
    borderRadius: 10,
    width: "80%"
  },
  modalText: {
    color: "white",
    fontWeight: "bold",
    letterSpacing: 1,
    fontSize: 18
  },
  closeButton: {
    alignSelf: "flex-end"
  },
  setFavoriteButton: {
    borderRadius: 20,
    backgroundColor: Colors.action,
    margin: "3%",
    padding: "3%"
  },
  setFavoriteButtonText: {
    color: "white",
    fontSize: 15
  },
  setColorButton: {
    borderRadius: 20,
    borderColor: "white",
    height: 40,
    width: 40,
    margin: "2%"
  },
  colorsContainer: {
    marginTop: "5%",
    flexDirection: "row",
  }
});