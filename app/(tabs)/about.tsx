import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "red",
  },
  link: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "red",
  },
});

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Screen</Text>
      <Link href='/' style={styles.link} >Back to Home.</Link>
    </View>
  );
}
