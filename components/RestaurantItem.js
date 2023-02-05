import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet, Pressable, Image } from "react-native";
import MutedText from "./MutedText";
import Offer from "./Offer";
import Price from "./Price";
import Rating from "./Rating";

const RestaurantItem = ({ data }) => {
  const navigation = useNavigation();

  const {
    name,
    serveTimeMin,
    serveTimeMax,
    distance,
    rating,
    offers,
    price,
    image,
  } = data;

  return (
    <Pressable
      onPress={() => {
        navigation.navigate("Restaurant", {name: name, image: image});
      }}
    >
      <View style={styles.container}>
        <View style={styles.left}>
          <Image
            style={styles.image}
            source={{
              uri: image,
            }}
          />
        </View>
        <View style={styles.right}>
          <View>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.stat}>
              <MutedText>
                {serveTimeMin} - {serveTimeMax} min • {distance} m
              </MutedText>
            </View>
            <View style={styles.tags}>
              {offers.length > 0 && (
                <View style={styles.offers}>
                  {offers.map((offer) => (
                    <View key={offer}>
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
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 30,
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
    borderRadius: 18,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  stat: {
    marginTop: 8,
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
