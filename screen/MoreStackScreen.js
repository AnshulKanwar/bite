import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MonthlyPackagesScreen from "./MonthlyPackagesScreen";
import MoreScreen from "./MoreScreen";
import RestauranScreen from "./RestaurantScreen";

const Stack = createNativeStackNavigator();

const MoreStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="More" component={MoreScreen} />
      <Stack.Screen name="Monthly Packages" component={MonthlyPackagesScreen} />
    </Stack.Navigator>
  );
};

export default MoreStackScreen;
