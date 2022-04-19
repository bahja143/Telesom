import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import WellcomeScreen from "../screens/WellcomeScreen";
import RegisterScreen from "../navigation/RegisterNavigation";
import LoginScreen from "../navigation/LoginNavigation";
import VarificationScreen from "../screens/VarificationScreen";

import theme from "../components/BundleThemeNavi";

const Stack = createStackNavigator();
const StackNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="signIn"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="registerNow"
      component={RegisterScreen}
      options={{ title: "Register Now" }}
    />
    <Stack.Screen
      name="varification"
      component={VarificationScreen}
      options={{ title: "" }}
    />
  </Stack.Navigator>
);

const AuthNavigation = () => {
  return (
    <NavigationContainer theme={theme}>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default AuthNavigation;
