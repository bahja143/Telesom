import React, { useState } from "react";
import BundleComponent from "../components/BundleComponent";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import colors from "../config/colors";

const initialData = {
  dailyBundle: [
    { id: 1, data: "3GB", valid: "24Hrs", price: "$3" },
    { id: 2, data: "2GB", valid: "24Hrs", price: "$2" },
    { id: 3, data: "1GB", valid: "24Hrs", price: "$1" },
    { id: 4, data: "500MB", valid: "24Hrs", price: "$0.5" },
    { id: 5, data: "200MB", valid: "24Hrs", price: "$0.25" },
  ],
  weeklyBundle: [
    { id: 1, data: "2GB", valid: "7Days", price: "$1" },
    { id: 2, data: "2GB", valid: "7Days", price: "$2" },
    { id: 3, data: "1GB", valid: "7Days", price: "$3" },
    { id: 4, data: "500MB", valid: "7Days", price: "$0.5" },
    { id: 5, data: "200MB", valid: "7Days", price: "$0.25" },
    { id: 6, data: "50MB", valid: "7Days", price: "$0.12" },
  ],
  monthlyBundle: [
    { id: 8, data: "30GB", valid: "1Month", price: "$10" },
    { id: 7, data: "16GB", valid: "1Month", price: "$5" },
    { id: 1, data: "800MB", valid: "1Month", price: "$2" },
    { id: 2, data: "400MB", valid: "1Month", price: "$2" },
    { id: 3, data: "200MB", valid: "1Month", price: "$3" },
    { id: 4, data: "50MB", valid: "1Month", price: "$0.5" },
    { id: 5, data: "25MB", valid: "1Month", price: "$0.25" },
    { id: 6, data: "50MB", valid: "1Month", price: "$0.12" },
  ],
  superfastBundle: [
    { id: 1, data: "80GB", valid: "1Month", price: "$15" },
    { id: 2, data: "100GB", valid: "1Month", price: "$20" },
    { id: 3, data: "133GB", valid: "1Month", price: "$25" },
    { id: 4, data: "150GB", valid: "1Month", price: "$30" },
    { id: 5, data: "210GB", valid: "1Month", price: "$50" },
  ],
};

const Tab = createMaterialTopTabNavigator();

const DailyBundle = () => <BundleComponent data={initialData.dailyBundle} />;

const WeeklyBundle = () => <BundleComponent data={initialData.weeklyBundle} />;

const MonthlyBundle = () => (
  <BundleComponent data={initialData.monthlyBundle} />
);

const SuperfastBundle = () => (
  <BundleComponent data={initialData.superfastBundle} />
);

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={() => ({
      tabBarScrollEnabled: true,
      lazy: true,
      tabBarActiveTintColor: colors["primary"],
      tabBarInactiveTintColor: colors["medium"],
      tabBarLabelStyle: { fontWeight: "700", fontSize: 15 },
    })}
  >
    <Tab.Screen component={DailyBundle} name="daily" />
    <Tab.Screen component={WeeklyBundle} name="weekly" />
    <Tab.Screen component={MonthlyBundle} name="monthly" />
    <Tab.Screen component={SuperfastBundle} name="superfast" />
  </Tab.Navigator>
);

const BundlesScreen = () => {
  return <TabNavigator />;
};

export default BundlesScreen;
