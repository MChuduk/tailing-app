import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ObjectType, OpenCV } from 'react-native-fast-opencv';

export default function App() {
  //test point
  const point = OpenCV.createObject(ObjectType.Point, 1, 2); // x, y
  OpenCV.clearBuffers();

  return (
    <View style={styles.container}>
      <Text>Test app</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
