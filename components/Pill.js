import { View, StyleSheet } from "react-native";

const Pill = ({ bg, children, style }) => {
  return (
    <View style={[styles.container, style, { backgroundColor: bg }]}>{children}</View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#255cea",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 999,
  },
});

export default Pill;
