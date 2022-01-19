import React, { useRef } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";

import colors from "../config/colors";
import RenderRightCancelBooking from "./RenderRightCancelBooking";

const BookingItem = ({ worker, categories, onPress, onSwipeable }) => {
  const swipeable = useRef();

  const handleBooking = () => {
    swipeable.current?.close();
    onSwipeable(worker);
  };

  return (
    <Swipeable
      ref={swipeable}
      renderRightActions={() => <RenderRightCancelBooking />}
      onSwipeableRightOpen={handleBooking}
      enabled={worker.status === null}
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
            </View>
          </View>
          {worker.status ? (
            <Text style={[styles.booked, styles.done]}>Done</Text>
          ) : worker.status === false ? (
            <Text style={[styles.booked, styles.canceled]}>Canceled</Text>
          ) : (
            <Text style={[styles.booked, styles.pending]}>Pending</Text>
          )}
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
    height: 85,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 20,
  },
  title: {
    fontSize: 17,
    fontFamily: "sans-serif-medium",
  },
  subTitle: {
    color: colors["medium"],
    fontFamily: "sans-serif-light",
  },
  position: {
    color: colors["primary"],
    top: 3,
  },
  textContainer: {
    marginLeft: 7,
    top: 7,
  },
  booked: {
    right: 25,
    fontSize: 12,
    borderWidth: 1,
    padding: 3.5,
    borderRadius: 30,
    fontFamily: "sans-serif-medium",
  },
  pending: {
    color: colors["primary"],
    borderColor: colors["primary"],
    paddingHorizontal: 5,
  },
  done: {
    color: colors["secondary"],
    borderColor: colors["secondary"],
    paddingHorizontal: 12,
  },
  canceled: {
    color: colors["danger"],
    borderColor: colors["danger"],
    paddingHorizontal: 7,
  },
});

export default BookingItem;
