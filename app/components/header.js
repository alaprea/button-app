import { View, Text, StyleSheet } from 'react-native';
import Colors from '../styles/colors';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Button Booth!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    flexDirection: "row",
    paddingTop: "18%",
    paddingBottom: "3%",
    borderBottomWidth: 1,
    borderColor: "gray",
    backgroundColor: Colors.background,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 30,
    letterSpacing: 1.5,
    color: Colors.title
  }
})