import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CalorieTrackerScreen from "./CalorieTrackerScreen";
import MonthlyPackagesScreen from "./MonthlyPackagesScreen";
import OrderHistoryScreen from "./OrderHistory";
import MoreScreen from "./MoreScreen";

const Stack = createNativeStackNavigator();

const MoreStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="More" component={MoreScreen} />
      <Stack.Screen name="Monthly Packages" component={MonthlyPackagesScreen} />
      <Stack.Screen name="Calorie Tracker" component={CalorieTrackerScreen} />
      <Stack.Screen name="Order History" component={OrderHistoryScreen} />
    </Stack.Navigator>
  );
};

export default MoreStackScreen;
