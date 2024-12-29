import { StyleSheet, Text, View, Image } from "react-native";
import { ExtendedCropper } from "./ExtendedCropper";

export default function App() {
  return (
    <View style={styles.container}>
      <ExtendedCropper/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
