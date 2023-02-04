import { StyleSheet, Text } from "react-native"
import Pill from "./Pill"

const Offer = ({ offer }) => {
  return (
    <Pill bg="#00AED6">
      <Text style={styles.text}>{offer}</Text>
    </Pill>
  )
}

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 11,
  }
})

export default Offer