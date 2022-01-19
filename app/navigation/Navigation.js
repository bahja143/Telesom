import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, Text } from "react-native";

import AppNavigation from "../navigation/AppNavigation";
import Profile from "../screens/ProfileScreen";
import About from "../screens/AboutUsSreen";

import DrawerHeader from "../components/DrawerHeader";
import SideBarDrawer from "../components/SideBarDrawer";
import theme from "../components/BundleThemeNavi";

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => (
  <Drawer.Navigator
    screenOptions={{
      header: ({ navigation }) => <DrawerHeader navigation={navigation} />,
    }}
    drawerContent={() => <SideBarDrawer na />}
  >
    <Drawer.Screen name="home" component={AppNavigation} />
    <Drawer.Screen name="profile" component={Profile} />
    <Drawer.Screen name="about" component={About} />
  </Drawer.Navigator>
);
const Navigation = () => {
  return (
    <NavigationContainer theme={theme}>
      <DrawerNavigation />
    </NavigationContainer>
  );
};

export default Navigation;
