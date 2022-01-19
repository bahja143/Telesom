import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import DashboardScreen from "../screens/DashboardScreen";
import BundlesScreen from "../screens/BundlesScreen";
import DatatransferScreen from "../screens/DataTransferScreen";
import DhambaalScreen from "../navigation/DhambaalSMSNavigation";

import colors from "../config/colors";

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: colors["primary"] },
      headerTitleStyle: { color: colors["white"] },
    }}
  >
    <Stack.Screen
      name="dashboard"
      component={DashboardScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="bundels"
      component={BundlesScreen}
      options={{ title: "Buy Bundles" }}
    />
    <Stack.Screen
      name="datatransfer"
      component={DatatransferScreen}
      options={{ title: "Data Transfer" }}
    />
    <Stack.Screen
      name="Dhambaal"
      component={DhambaalScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
const QuickShortNavigation = () => {
  return <StackNavigator />;
};

export default QuickShortNavigation;
