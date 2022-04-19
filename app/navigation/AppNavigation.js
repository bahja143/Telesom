import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import DashboardScreen from "../navigation/QuickShortNavigation";
import SkilledWorkerScreen from "../navigation/SkilledWorkersNavigation";
import NotificationsScreen from "../navigation/NotificationsNavigation";
import CentersScreen from "../navigation/CentersNavigation";
import { Entypo, MaterialIcons, Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const TabNavigation = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarLabelStyle: { fontSize: 11.5 },
    }}
  >
    <Tab.Screen
      name="Dashboard"
      component={DashboardScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Entypo name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="SkilledWorkers"
      component={SkilledWorkerScreen}
      options={{
        title: "Skilled Workers",
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="engineering" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={NotificationsScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons
            name="notifications-active"
            size={size}
            color={color}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Centers"
      component={CentersScreen}
      options={{
        title: "Branchs",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="location-sharp" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

const AppNavigation = () => {
  return <TabNavigation />;
};

export default AppNavigation;
