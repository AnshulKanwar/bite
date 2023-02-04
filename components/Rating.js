import { StyleSheet, Text } from "react-native"
import Pill from "./Pill"

const Rating = ({ rating }) => {
  return (
    <Pill bg="#00a110">
      <Text style={styles.text}>{rating}/5.0</Text>
    </Pill>
  )
}

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 11,
  }
})

export default Rating