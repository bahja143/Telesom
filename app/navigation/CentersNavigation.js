import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CentersScreen from "../screens/CentersScreen";
import CentersMapScreen from "../screens/CentersMapScreen";
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
      name="centers"
      component={CentersScreen}
      options={{ title: "Telesom centers" }}
    />
    <Stack.Screen
      name="centersMap"
      component={CentersMapScreen}
      options={({ route: { params } }) => ({ title: params.name })}
    />
  </Stack.Navigator>
);

const CentersNavigation = () => {
  return <StackNavigator />;
};

export default CentersNavigation;
