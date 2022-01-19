import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import WellcomeScreen from "../screens/WellcomeScreen";
import RegisterScreen from "../navigation/RegisterNavigation";
import LoginScreen from "../navigation/LoginNavigation";

import theme from "../components/BundleThemeNavi";

const Stack = createStackNavigator();
const StackNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="wellcome"
      component={WellcomeScreen}
      options={{ headerShown: false, title: "" }}
    />
    <Stack.Screen
      name="registerNow"
      component={RegisterScreen}
      options={{ title: "Register Now" }}
    />
    <Stack.Screen
      name="signIn"
      component={LoginScreen}
      options={{ title: "Sign In" }}
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
