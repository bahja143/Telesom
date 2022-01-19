import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as MediaLibrary from "expo-media-library";
import { Audio } from "expo-av";

import AudiosModal from "./AudiosModal";
import MediaPlayerModal from "./MediaPlayerModal";
import PermissionsModal from "./PermissionsModal";
import colors from "../config/colors";

const VoiceRecord = ({ audio, setAudio }) => {
  const [audioFiles, setAudioFiles] = useState([]);
  const [showAudiosModal, setShowAudiosModal] = useState(false);
  const [showMediaPlayer, setShowMediaPlayer] = useState(false);
  const [showPermissions, setShowPermissions] = useState(false);
  const [message, setMessage] = useState(
    "You need to enable Storage permissions to upload Audio."
  );

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

    const { sound } = await Audio.Sound.createAsync(audio, {}, (update) => {
      update.didJustFinish && setPlay(false);
      update.isLoaded && setProgress(update.positionMillis);
      update.isLoaded && setDuration(update.durationMillis);
    });
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
    const { granted, canAskAgain } =
      await MediaLibrary.requestPermissionsAsync();

    !canAskAgain &&
      setMessage(`To upload audio, allow Telesom app access to your storage files.
Tap Settings > Permissions, and turn Storage on.`);

    if (!granted) return setShowPermissions(true);

    const media = await MediaLibrary.getAssetsAsync({ mediaType: "audio" });
    setAudioFiles(media.assets);
    setShowAudiosModal(true);
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

  const handleBackward = async () => {
    console.log(progress);
    try {
      progress <= duration && progress - 1000 > 0
        ? audioFile.setStatusAsync({ positionMillis: progress - 1000 })
        : "";

      setProgress(progress - 1000);
    } catch (error) {
      console.log("CompleteSliding: ", error);
    }
  };

  const handlePermissions = async () => {
    const { canAskAgain } = await await MediaLibrary.requestPermissionsAsync();

    return canAskAgain ? loadSounds() : Linking.openSettings();
  };

  return (
    <>
      <PermissionsModal
        show={showPermissions}
        setShow={setShowPermissions}
        rerequest={handlePermissions}
        message={message}
      />
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
      <AudiosModal
        show={showAudiosModal}
        setShow={setShowAudiosModal}
        audioFiles={audioFiles}
        selectedAudio={setAudio}
      />
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.file}
          onPress={() => audio && handleShowMediaPlayer()}
        >
          <Text style={styles.text} numberOfLines={1}>
            {audio ? audio.filename : "Upload Audio File"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.uploadBtn} onPress={loadSounds}>
          <MaterialCommunityIcons
            name="folder-upload-outline"
            size={35}
            color={colors["secondary"]}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors["light"],
    width: "100%",
    height: 60,
    flexDirection: "row",
    borderRadius: 50,
    overflow: "hidden",
    paddingRight: 15,
    paddingLeft: 25,
  },
  file: {
    height: 60,
    width: "70%",
    justifyContent: "center",
  },
  text: {
    color: colors["medium"],
    fontSize: 16.5,
    fontFamily: "sans-serif-medium",
  },
  uploadBtn: {
    flex: 1,
    backgroundColor: colors["primary"],
    justifyContent: "center",
    alignItems: "center",
    left: 15,
    height: 60,
    flexDirection: "row",
    paddingHorizontal: 10,
    borderRadius: 7,
    elevation: 1,
  },
});

export default VoiceRecord;
