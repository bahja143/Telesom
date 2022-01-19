import React, { useState } from "react";
import { Modal, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";

import colors from "../config/colors";

const MediaPlayerModal = ({
  show,
  item,
  play,
  progress,
  duration,
  handleCompleteSliding,
  handleSound,
  hanldeCloseModal,
  handleForward,
  handleBackward,
}) => {
  const handleTime = (input) => {
    const duration = Math.floor(input / 1000);
    let menutes = Math.floor(duration / 60);
    let seconds = 0;

    if (duration % 60 !== 0) {
      seconds = Math.floor((duration / 60 - menutes) * 60);
    }

    return menutes + ":" + seconds;
  };

  return (
    <Modal visible={show} style={styles.container} transparent>
      <View style={styles.container}>
        <View style={styles.player}>
          <View style={styles.headerContainer}>
            <Text style={styles.title} numberOfLines={1}>
              {item?.filename}
            </Text>
            <TouchableOpacity
              style={styles.closeBtn}
              onPress={hanldeCloseModal}
            >
              <MaterialCommunityIcons
                name="close"
                size={30}
                color={colors["primary"]}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.sliderContainer}>
            <Slider
              style={styles.slider}
              thumbTintColor={colors["primary"]}
              minimumTrackTintColor={colors["primary"]}
              maximumTrackTintColor="#000000"
              minimumValue={0}
              maximumValue={duration}
              step={5}
              value={progress}
              onSlidingComplete={handleCompleteSliding}
            />
          </View>
          <View style={styles.durationContainer}>
            <Text style={styles.duration}>{handleTime(progress)}</Text>
            <Text style={styles.duration}>{handleTime(duration)}</Text>
          </View>
          <View style={styles.actionContainer}>
            <TouchableOpacity
              onPress={() => progress <= duration && handleBackward()}
              disabled={progress < 1000}
            >
              <MaterialCommunityIcons
                name="skip-backward"
                size={40}
                color={progress < 1000 ? colors["medium"] : colors["primary"]}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.playBtn} onPress={handleSound}>
              <MaterialCommunityIcons
                name={play ? "pause" : "play"}
                size={50}
                color={colors["white"]}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => progress < duration && handleForward()}
              disabled={!(progress < duration)}
            >
              <MaterialCommunityIcons
                name="skip-forward"
                size={40}
                color={
                  !(progress < duration) ? colors["medium"] : colors["primary"]
                }
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(102, 102, 102, 0.6)",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  player: {
    backgroundColor: colors["white"],
    width: "100%",
    height: 200,
  },
  closeBtn: {
    backgroundColor: colors["light"],
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    position: "absolute",
    right: 22,
    top: 10,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    color: colors["medium"],
    marginTop: 15,
    width: 225,
  },
  actionContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  playBtn: {
    backgroundColor: colors["primary"],
    width: 60,
    height: 60,
    borderRadius: 37.5,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 25,
    top: -11,
  },
  sliderContainer: {
    marginVertical: 25,
    alignItems: "center",
    transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
  },
  slider: {
    color: colors["primary"],
    width: "70%",
  },
  durationContainer: {
    marginHorizontal: 20,
    top: -10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  duration: {
    color: colors["primary"],
  },
});

export default MediaPlayerModal;
