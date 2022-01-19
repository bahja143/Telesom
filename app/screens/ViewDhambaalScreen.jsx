import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Polygon, Svg } from "react-native-svg";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as MediaLibrary from "expo-media-library";
import { Audio } from "expo-av";

import MediaPlayerModal from "../components/MediaPlayerModal";
import colors from "../config/colors";

const ViewDhambaalScreen = ({ route }) => {
  const { params: sms } = route;
  const [audio, setAudio] = useState();
  const [showMediaPlayer, setShowMediaPlayer] = useState(false);

  const [play, setPlay] = useState(false);
  const [audioFile, setAudioFile] = useState();
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const handlePlay = async () => {
    try {
      setPlay(true);
      setProgress(0);

      await audioFile.stopAsync();
      await audioFile.playAsync();
    } catch (error) {
      console.log("Play: ", error);
    }
  };

  const handlePause = async () => {
    try {
      setPlay(false);
      await audioFile.pauseAsync();
    } catch (error) {
      console.log("Pause: ", error);
    }
  };

  const handleReplay = async () => {
    try {
      setPlay(true);
      setProgress(0);
      await audioFile.playAsync();
    } catch (error) {
      console.log("Replay", error);
    }
  };

  const handleCloseModiaPlayer = () => {
    try {
      setShowMediaPlayer(false);
      setPlay(false);
      setProgress(0);
      setDuration(0);
      audioFile.unloadAsync();
    } catch (error) {
      console.log("CloseModal");
    }
  };

  const handleShowMediaPlayer = async () => {
    setShowMediaPlayer(true);

    const { sound } = await Audio.Sound.createAsync(
      require("../assets/Audio/bensound-ukulele.mp3"),
      {},
      (update) => {
        update.didJustFinish && setPlay(false);
        update.isLoaded && setProgress(update.positionMillis);
        update.isLoaded && setDuration(update.durationMillis);
      }
    );
    setAudioFile(sound);
  };

  const handleCompleteSliding = (positionMillis) => {
    try {
      audioFile.setStatusAsync({ positionMillis: positionMillis });
      !play && audioFile.pauseAsync();
    } catch (error) {
      console.log("CompleteSliding: ", error);
    }
  };

  const handleSound = () => {
    play
      ? handlePause()
      : progress !== duration
      ? handleReplay()
      : handlePlay();
  };

  const loadSounds = async () => {
    // const { sound } = await Audio.Sound.createAsync(
    //   require("../assets/Audio/mixkit-classic-alarm-995.wav")
    // );
    // setAudio(sound);
  };

  const handleForward = async () => {
    try {
      progress < duration && progress - 1000 > 0
        ? audioFile.setStatusAsync({ positionMillis: progress + 1000 })
        : "";

      setProgress(progress + 1000);
    } catch (error) {
      console.log("CompleteSliding: ", error);
    }
  };

  useEffect(() => {
    loadSounds();
  }, []);

  const handleBackward = async () => {
    try {
      progress <= duration && progress - 1000 > 0
        ? audioFile.setStatusAsync({ positionMillis: progress - 1000 })
        : "";

      setProgress(progress - 1000);
    } catch (error) {
      console.log("CompleteSliding: ", error);
    }
  };

  return (
    <>
      <MediaPlayerModal
        show={showMediaPlayer}
        item={audio}
        play={play}
        progress={progress}
        duration={duration}
        handleCompleteSliding={handleCompleteSliding}
        handleSound={handleSound}
        hanldeCloseModal={handleCloseModiaPlayer}
        handleForward={handleForward}
        handleBackward={handleBackward}
      />
      <View style={styles.container}>
        <Svg height="1000" width="100%">
          <Polygon
            points="410 0, 410 250, 0 330, 0 0"
            fill={colors["secondary"]}
            strokeWidth="1"
          />
          <Text style={styles.title}>Dhambaal SMS</Text>
          <View>
            <Text style={styles.name}>{sms.name}</Text>
            <Text style={styles.subText}>{sms.group}</Text>
          </View>
        </Svg>
        <TouchableWithoutFeedback onPress={handleShowMediaPlayer}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons
              name="play"
              color={colors["white"]}
              size={50}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBackground: {
    width: "100%",
    height: 250,
    borderBottomEndRadius: 300,
  },
  title: {
    color: colors["white"],
    fontSize: 35,
    fontFamily: "sans-serif-medium",
    position: "absolute",
    top: 100,
    left: 70,
  },
  iconContainer: {
    backgroundColor: colors["primary"],
    width: 75,
    height: 75,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 250,
    left: 170,
  },
  name: {
    color: colors["lightBlack"],
    fontSize: 21,
    fontFamily: "sans-serif-medium",
    top: 360,
    textAlign: "center",
    textTransform: "capitalize",
  },
  subText: {
    color: colors["medium"],
    fontSize: 18,
    top: 360,
    textAlign: "center",
    textTransform: "capitalize",
  },
});

export default ViewDhambaalScreen;
