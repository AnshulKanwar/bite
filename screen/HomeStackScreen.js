import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RestaurantScreen from "./RestaurantScreen";
import HomeScreen from "./HomeScreen";

const Stack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Restaurant" component={RestaurantScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackScreen;
