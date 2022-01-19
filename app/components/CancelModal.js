import React from "react";
import AwesomeAlert from "react-native-awesome-alerts";

import { StyleSheet } from "react-native";
import colors from "../config/colors";

const CancelModal = ({ item, show, setShow, handleConfirm, message }) => {
  return (
    <AwesomeAlert
      show={show}
      showProgress={false}
      title="Cancel Booking"
      titleStyle={styles.title}
      message={message}
      messageStyle={styles.messages}
      contentContainerStyle={styles.container}
      closeOnTouchOutside={false}
      closeOnHardwareBackPress={false}
      showCancelButton={true}
      showConfirmButton={true}
      confirmText="Cancel"
      cancelText="No"
      actionContainerStyle={styles.actionsContainer}
      cancelButtonTextStyle={styles.cancelBtnText}
      contentStyle={styles.contentStyle}
      cancelButtonColor={colors["white"]}
      confirmButtonTextStyle={styles.confirmbtnText}
      confirmButtonColor={colors["white"]}
      onCancelPressed={() => {
        setShow(false);
      }}
      onConfirmPressed={() => {
        handleConfirm(item);
        setShow(false);
      }}
    />
  );
};

const styles = StyleSheet.create({
  contentStyle: {
    height: 110,
  },
  container: {
    borderRadius: 20,
    margin: 0,
    elevation: 15,
  },
  title: {
    fontSize: 21.75,
    fontFamily: "sans-serif-medium",
    color: colors["primary"],
    left: -65,
    top: -10,
  },
  messages: {
    color: colors["black"],
    fontSize: 15.5,
    width: 300,
    fontFamily: "sans-serif-light",
  },
  confirmbtnText: {
    fontSize: 18,
    color: colors["secondary"],
    textAlign: "left",
    fontFamily: "sans-serif-medium",
  },
  cancelBtnText: {
    fontSize: 18,
    color: colors["secondary"],
    fontFamily: "sans-serif-medium",
  },
  actionsContainer: {
    marginLeft: 150,
  },
});

export default CancelModal;
