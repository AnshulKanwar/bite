import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import HomeStackScreen from "./screen/HomeStackScreen";
import OrdersScreen from "./screen/OrdersScreen";
import MoreScreen from "./screen/MoreScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "HomeStack") {
              iconName = "home";
            } else if (route.name === "Orders") {
              iconName = "coffee"
            } else if (route.name === "More") {
              iconName = "more-horizontal"
            }

            return <Feather name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="HomeStack" component={HomeStackScreen} />
        <Tab.Screen name="Orders" component={OrdersScreen} />
        <Tab.Screen name="More" component={MoreScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
