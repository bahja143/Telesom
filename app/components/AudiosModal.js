import React from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AudioItem from "./AudioItem";
import ItemSeparator from "./ItemSeparator";
import colors from "../config/colors";

const AudiosModal = ({ show, setShow, audioFiles, selectedAudio }) => {
  return (
    <Modal visible={show}>
      <View style={styles.container}>
        <Text style={styles.title}>Audio files in your mobile</Text>
        <TouchableWithoutFeedback onPress={() => setShow(false)}>
          <View style={styles.btn}>
            <MaterialCommunityIcons
              name="close"
              size={30}
              color={colors["primary"]}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <FlatList
        data={audioFiles}
        keyExtractor={audioFiles.fileName}
        renderItem={({ item }) => (
          <AudioItem
            item={item}
            selectedAudio={() => {
              selectedAudio(item);
              setShow(false);
            }}
          />
        )}
        ItemSeparatorComponent={() => <ItemSeparator />}
      />
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 25,
  },
  btn: {
    backgroundColor: colors["light"],
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    top: -2,
    right: -25,
  },
  title: {
    color: colors["medium"],
    fontSize: 20,
  },
});

export default AudiosModal;
