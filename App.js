import { StyleSheet, View } from 'react-native';
import { StatusBar } from "expo-status-bar";
import RootStack from './app/root';

export default function App() {
  return (
    <View style={styles.container}>
      <RootStack/>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});