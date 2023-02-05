import { FlatList, StyleSheet, Text, View } from "react-native";
import ProgressBar from "../components/ProgressBar";

const logs = [
  {
    id: 1,
    name: "Cheese French Fries",
    quantity: 2,
    calories: 220,
  },
  {
    id: 2,
    name: "Hot Coffee",
    quantity: 2,
    calories: 60,
  },
  {
    id: 3,
    name: "Spring Roll",
    quantity: 2,
    calories: 240,
  },
  {
    id: 4,
    name: "Masala Tea",
    quantity: 1,
    calories: 20,
  },
];

const CalorieTrackerScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.analysis}>
        Great job! Chad. You had overall healthy meals today.
      </Text>
      <View style={styles.card}>
        <Text style={styles.calories}>640 Cal</Text>
        <View style={styles.row}>
          <View>
            <Text>Protein: 43%</Text>
            <ProgressBar progress={0.43} />
          </View>
          <View>
            <Text>Fats: 51%</Text>
            <ProgressBar progress={0.51} />
          </View>
        </View>
        <View style={styles.row}>
          <View>
            <Text>Carbs: 30%</Text>
            <ProgressBar progress={0.3} />
          </View>
          <View>
            <Text>Fiber: 28%</Text>
            <ProgressBar progress={0.28} />
          </View>
        </View>
      </View>
      <FlatList
        style={styles.card}
        data={logs}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text>
              {item.quantity} x {item.name}
            </Text>
            <Text>{item.calories} Cal</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    marginTop: 60,
  },
  analysis: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 30,
    padding: 20,
    marginTop: 50,
  },
  calories: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
});

export default CalorieTrackerScreen;
