import { StyleSheet, Text } from "react-native";

const MutedText = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: "#a3a9b7",
  },
});

export default MutedText;
