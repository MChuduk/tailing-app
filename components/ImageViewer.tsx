import { StyleSheet, Text } from "react-native";
import { Image, type ImageSource } from "expo-image";

type Props = {
  imgSource: ImageSource;
  selectedImage?: string;
};

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

export default function ImageViewer(props: Props) {
  const imgSource = props.selectedImage ? { uri: props.selectedImage } : props.imgSource;

  return <Image source={imgSource} style={styles.image} />;
}
