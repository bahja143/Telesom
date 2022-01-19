import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import AuthContext from "../auth/context";
import colors from "../config/colors";

const SideBarBody = () => {
  const { navigate } = useNavigation();
  const { setUser } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item} onPress={() => navigate("home")}>
        <MaterialCommunityIcons
          name="home-outline"
          size={30.5}
          color={colors["primary"]}
        />
        <Text style={styles.title}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => navigate("profile")}>
        <MaterialCommunityIcons
          name="account-circle-outline"
          size={30}
          color={colors["primary"]}
          style={styles.icon}
        />
        <Text style={styles.title}>My Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => navigate("about")}>
        <Ionicons
          name="information-circle-outline"
          size={30}
          color={colors["primary"]}
          style={styles.icon}
        />
        <Text style={styles.title}>About Us</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <MaterialCommunityIcons
          name="currency-usd-circle-outline"
          size={31}
          color={colors["primary"]}
          style={styles.icon}
        />
        <Text style={styles.title}>Zaad</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => setUser(null)}>
        <MaterialCommunityIcons
          name="logout"
          size={30}
          color={colors["primary"]}
          style={styles.icon}
        />
        <Text style={styles.title}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
    paddingLeft: 22.5,
  },
  item: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 25,
  },
  title: {
    fontFamily: "sans-serif-light",
    fontSize: 16.5,
    marginLeft: 25,
    top: 7,
  },
  icon: {
    top: 5,
  },
});

export default SideBarBody;
