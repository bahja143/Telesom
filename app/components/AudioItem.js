import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Audio } from "expo-av";

import colors from "../config/colors";

const AudioItem = ({ item, selectedAudio }) => {
  const [play, setPlay] = useState(false);
  const [audio, setAudio] = useState();
  const [progress, setProgress] = useState(0);

  const handlePlay = async () => {
    setPlay(true);
    const { sound } = await Audio.Sound.createAsync(item, {}, (update) => {
      update.didJustFinish && setPlay(false);
      update.isLoaded && setProgress(update.positionMillis);
    });
    setAudio(sound);
    await sound.playAsync();
  };

  const handlePause = async () => {
    setPlay(false);
    await audio.pauseAsync();
  };

  const handleReplay = async () => {
    setPlay(true);
    await audio.playAsync();
  };

  const handleSound = () => {
    play
      ? handlePause()
      : progress !== 0 && progress !== 1
      ? handleReplay()
      : handlePlay();
  };

  const handleTime = (duration) => {
    let menutes = Math.floor(duration / 60);
    let seconds = 0;

    if (duration % 60 !== 0) {
      seconds = Math.floor((duration / 60 - menutes) * 60);
    }

    return menutes + ":" + seconds;
  };

  return (
    <TouchableOpacity style={styles.container} onPress={selectedAudio}>
      <TouchableWithoutFeedback onPress={handleSound}>
        <MaterialCommunityIcons
          name={play ? "pause" : "play"}
          color={colors["primary"]}
          size={55}
        />
      </TouchableWithoutFeedback>
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {item.filename}
        </Text>
        <Text style={styles.duration}>{handleTime(item.duration)}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors["light"],
    width: "100%",
    height: 75,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
  },
  textContainer: {
    flexDirection: "row",
    flex: 1,
  },
  title: {
    fontSize: 19,
    textTransform: "capitalize",
    flex: 1,
    color: colors["lightBlack"],
    width: 150,
  },
  duration: {
    color: colors["primary"],
    fontSize: 16,
    marginRight: 30,
  },
});

export default AudioItem;
