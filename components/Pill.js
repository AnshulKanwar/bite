import { View, StyleSheet } from "react-native";

const Pill = ({ bg, children }) => {
  return (
    <View style={[styles.container, { backgroundColor: bg }]}>{children}</View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#255cea",
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 999,
  },
});

export default Pill;
