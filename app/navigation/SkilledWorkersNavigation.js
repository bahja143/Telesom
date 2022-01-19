import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import SkilledWorkersScreen from "../screens/SkilledWorkersScreen";
import WorkerProfileScreen from "../screens/WorkerProfileScreen";
import MyBookings from "../screens/MyBookingsScreen";
import colors from "../config/colors";

const Tab = createMaterialTopTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: colors["primary"],
      tabBarInactiveTintColor: colors["medium"],
      tabBarLabelStyle: { fontSize: 14 },
    }}
  >
    <Tab.Screen
      name="workers"
      component={SkilledWorkersScreen}
      options={{
        title: "Skilled Workers",
      }}
    />
    <Tab.Screen
      name="mybookings"
      component={MyBookings}
      options={{
        title: "My Bookings",
      }}
    />
  </Tab.Navigator>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: colors["primary"] },
      headerTitleStyle: { color: colors["white"] },
    }}
  >
    <Stack.Screen
      name="skillerWorkers"
      component={TabNavigator}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="workerProfile"
      component={WorkerProfileScreen}
      options={{ title: "Profile" }}
    />
  </Stack.Navigator>
);

const SkilledWorkersNavigation = () => {
  return <StackNavigator />;
};

export default SkilledWorkersNavigation;
