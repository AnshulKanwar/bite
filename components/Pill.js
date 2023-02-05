import { View, StyleSheet, Pressable } from "react-native";

const Pill = ({ bg, children, style, callback, tag }) => {
  const handleCallback = () => {
    if(tag===1)
      callback(1)
    else if(tag===2)
      callback(2)
    else if(tag===3)
      callback(3)
  }
  return (
    <Pressable onPress={handleCallback}>
      <View style={[styles.container, style, { backgroundColor: bg }]}>{children}</View>
    </Pressable>
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
