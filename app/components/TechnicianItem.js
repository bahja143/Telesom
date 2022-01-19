import React, { useRef } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";

import colors from "../config/colors";
import RenderRightAction from "./RenderRightAction";

const TechnicianItem = ({
  worker,
  categories,
  cities,
  onPress,
  onSwipeable,
}) => {
  const swipeable = useRef();

  const handleBooking = () => {
    swipeable.current?.close();
    onSwipeable(worker);
  };

  return (
    <Swipeable
      ref={swipeable}
      renderRightActions={() => <RenderRightAction isBooked={worker.booked} />}
      onSwipeableRightOpen={handleBooking}
    >
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
          <View style={styles.mainContainer}>
            <Ionicons
              name="ios-person-circle"
              size={60}
              color={colors["primary"]}
            />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{worker.name}</Text>
              <Text style={styles.subTitle}>
                {categories.find((c) => c.id === worker.profition)?.name}
              </Text>
              <Text style={styles.position}>
                <MaterialIcons name="gps-fixed" size={12} />{" "}
                {cities.find((c) => c.id === worker.place)?.name}
              </Text>
            </View>
          </View>
          {worker.booked && <Text style={styles.booked}>Booked</Text>}
        </View>
      </TouchableWithoutFeedback>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
  },
  container: {
    backgroundColor: colors["white"],
    width: "100%",
    height: 90,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 20,
  },
  title: {
    fontSize: 17,
    top: -7,
    fontFamily: "sans-serif-medium",
  },
  subTitle: {
    color: colors["medium"],
    fontFamily: "sans-serif-light",
    top: -5,
  },
  position: {
    color: colors["primary"],
    top: 3,
  },
  textContainer: {
    marginLeft: 7,
  },
  booked: {
    color: colors["secondary"],
    right: 25,
    fontSize: 12,
    borderWidth: 1,
    borderColor: colors["secondary"],
    padding: 3.5,
    borderRadius: 30,
  },
});

export default TechnicianItem;
