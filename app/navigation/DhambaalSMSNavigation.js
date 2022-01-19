import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import DhambaalFormScreen from "../screens/DhambaalFormScreen";
import DhambaalSMSScreen from "../screens/DhambaalSMSScreen";
import ViewDhambaalScreen from "../screens/ViewDhambaalScreen";

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
      name="DhambaalSMS"
      component={DhambaalSMSScreen}
      options={{ title: "Dhambaal SMS" }}
    />
    <Stack.Screen
      name="Dhambaalform"
      component={DhambaalFormScreen}
      options={{ title: "Dhambaal Voice SMS" }}
    />
    <Stack.Screen
      name="ViewSMS"
      component={ViewDhambaalScreen}
      options={{ title: "" }}
    />
  </Stack.Navigator>
);

const DhambaalSMSNavigation = () => {
  return <StackNavigator />;
};

export default DhambaalSMSNavigation;
