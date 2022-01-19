import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import RegisterScreen from "../screens/RegisterScreen";
import VerificationScreen from "../screens/VarificationScreen";

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="register" component={RegisterScreen} />
    <Stack.Screen name="verification" component={VerificationScreen} />
  </Stack.Navigator>
);

const RegisterNavigation = () => {
  return <StackNavigator />;
};

export default RegisterNavigation;
