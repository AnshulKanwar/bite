import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RestaurantScreen from "./RestaurantScreen";
import HomeScreen from "./HomeScreen";

const Stack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Restaurant"
        options={{
          headerShown: false,
        }}
        component={RestaurantScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeStackScreen;
