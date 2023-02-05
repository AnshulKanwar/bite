import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import HomeStackScreen from "./screen/HomeStackScreen";
import OrdersScreen from "./screen/OrdersScreen";
import MoreStackScreen from "./screen/MoreStackScreen";
import LoginScreen from "./screen/LoginScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName="Login"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "HomeStack") {
              iconName = "home";
            } else if (route.name === "Cart") {
              iconName = "shopping-cart";
            } else if (route.name === "MoreStack") {
              iconName = "more-horizontal";
            }

            return <Feather name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen
          name="HomeStack"
          options={{ title: "Home" }}
          component={HomeStackScreen}
        />
        <Tab.Screen name="Cart" component={OrdersScreen} />
        <Tab.Screen
          name="MoreStack"
          options={{ title: "More" }}
          component={MoreStackScreen}
        />
        <Tab.Screen
          name="Login"
          options={{ title: "Login" }}
          component={LoginScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
