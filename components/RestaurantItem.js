import { Text, View, StyleSheet } from "react-native";
import Offer from "./Offer";
import Price from "./Price";
import Rating from "./Rating";

const RestaurantItem = ({ data }) => {
  const { name, serveTimeMin, serveTimeMax, distance, rating, offers, price } =
    data;

  return (
    <View style={styles.container}>
      <View styls={styles.left}>
        <View style={styles.image}></View>
      </View>
      <View style={styles.right}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.time}>
            {serveTimeMin} - {serveTimeMax} min • {distance} m
          </Text>
          <View style={styles.tags}>
            {offers.length > 0 && (
              <View style={styles.offers}>
                {offers.map((offer) => (
                  <View id={offer}>
                    <Offer offer={offer} />
                  </View>
                ))}
              </View>
            )}
            <View style={styles.rating}>
              <Rating rating={rating} />
            </View>
          </View>
        </View>
        <Price price={price} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 15,
    padding: 15,
  },
  left: {},
  right: {
    marginLeft: 18,
    justifyContent: "space-between",
  },
  image: {
    width: 150,
    height: 150,
    backgroundColor: "#dde0e5",
    borderRadius: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  time: {
    marginTop: 8,
    color: "#a3a9b7",
  },
  tags: {
    // flexDirection: "row",
    marginTop: 8,
    alignItems: "flex-start",
  },
  offers: {
    marginBottom: 6,
  },
});

export default RestaurantItem;
