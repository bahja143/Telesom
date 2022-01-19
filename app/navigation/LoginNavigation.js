import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import VarificationScreen from "../screens/VarificationScreen";

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="login" component={LoginScreen} />
    <Stack.Screen
      name="varification"
      component={VarificationScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const LoginNavigation = () => {
  return <StackNavigator />;
};

export default LoginNavigation;
