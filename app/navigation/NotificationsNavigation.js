import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import NotificationsScreen from "../screens/NotificationsScreen";
import ViewNotifications from "../screens/ViewNotificationsScreen";

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
      name="notifications"
      component={NotificationsScreen}
      options={{ title: "Notifications" }}
    />
    <Stack.Screen
      name="ViewNotifications"
      component={ViewNotifications}
      options={{ title: "Notification Detail" }}
    />
  </Stack.Navigator>
);

const NotificationsNavigation = () => {
  return <StackNavigator />;
};

export default NotificationsNavigation;
