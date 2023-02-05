import { StyleSheet, View } from "react-native"

const ProgressBar = ({ progress }) => {
  return (
    <View style={styles.bar}>
      <View style={[styles.fill, { width: progress * 100}]}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: "#b2b7c6",
    borderRadius: 999,
    width: 100,
    height: 6,
  },
  fill: {
    backgroundColor: "#DF1995",
    height: 6,
    borderRadius: 999,
  }
})

export default ProgressBar