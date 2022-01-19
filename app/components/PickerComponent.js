import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  FlatList,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

import colors from "../config/colors";
import PickerItem from "./PickerItem";

const PickerComponent = ({
  data,
  selected,
  setSelected,
  label,
  icon,
  width,
}) => {
  const [show, setShow] = useState(false);

  const handleSelect = (item) => {
    setSelected(item);
    setShow(false);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setShow(true)}>
        <View style={[styles.container, { width: width }]}>
          <MaterialCommunityIcons
            name={icon}
            color={colors["primary"]}
            size={24}
          />
          <Text style={styles.text}>{selected ? selected.name : label}</Text>
        </View>
      </TouchableWithoutFeedback>

      <Modal visible={show} style={styles.modal}>
        <View style={styles.modalHeader}>
          <Text style={styles.modalTitle}>{label}</Text>
          <TouchableOpacity
            style={styles.closeBtn}
            onPress={() => setShow(false)}
          >
            <AntDesign name="close" color={colors["medium"]} size={30} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <PickerItem item={item} onPress={() => handleSelect(item)} />
          )}
        />
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors["light"],
    height: 62.5,
    alignItems: "center",
    paddingHorizontal: 25,
    borderRadius: 50,
    flexDirection: "row",
  },
  text: {
    fontSize: 16,
    fontFamily: "sans-serif-medium",
    color: colors["medium"],
    marginLeft: 5,
  },
  modal: {
    height: 200,
    marginTop: 25,
    backgroundColor: colors["light"],
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalTitle: {
    fontSize: 22.5,
    color: colors["lightBlack"],
    fontFamily: "sans-serif-medium",
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 50,
  },
  closeBtn: {
    backgroundColor: colors["light"],
    color: colors["medium"],
    left: -30,
    top: 15,
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});
export default PickerComponent;
