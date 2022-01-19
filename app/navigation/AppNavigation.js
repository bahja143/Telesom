import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Notifications from "expo-notifications";

import DashboardScreen from "../navigation/QuickShortNavigation";
import SkilledWorkerScreen from "../navigation/SkilledWorkersNavigation";
import NotificationsScreen from "../navigation/NotificationsNavigation";
import CentersScreen from "../navigation/CentersNavigation";
import { Entypo, MaterialIcons, Ionicons } from "@expo/vector-icons";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

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
  const handleNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Offer",
        message: "Macmiil waxaa lagugu soo kordhiyay adeegyada...",
        data: { _displayInForeground: true },
      },
      trigger: {
        seconds: 2,
      },
    });

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Aroos wacan",
        message: "Macmiil waxaa lagugu soo kordhiyay adeegyada...",
        data: { _displayInForeground: true },
      },
      trigger: {
        seconds: 5,
      },
    });

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Discount",
        message: "Macmiil waxaa lagugu soo kordhiyay adeegyada...",
        data: { _displayInForeground: true },
      },
      trigger: {
        seconds: 10,
      },
    });
  };

  useEffect(() => {
    handleNotification();
  }, []);

  return <TabNavigation />;
};

export default AppNavigation;
