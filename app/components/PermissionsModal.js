import React from "react";
import AwesomeAlert from "react-native-awesome-alerts";

import { StyleSheet } from "react-native";
import colors from "../config/colors";

const PermissionsModal = ({ message, show, setShow, rerequest }) => {
  return (
    <AwesomeAlert
      show={show}
      showProgress={false}
      title="Permissions"
      titleStyle={styles.title}
      message={message}
      messageStyle={styles.messages}
      contentContainerStyle={styles.container}
      closeOnTouchOutside={false}
      closeOnHardwareBackPress={false}
      showCancelButton={true}
      showConfirmButton={true}
      confirmText="Continue"
      cancelText="Not now"
      contentStyle={styles.contentStyle}
      actionContainerStyle={styles.actionsContainer}
      cancelButtonTextStyle={styles.cancelBtnText}
      cancelButtonColor={colors["white"]}
      confirmButtonTextStyle={styles.confirmbtnText}
      confirmButtonColor={colors["white"]}
      onCancelPressed={() => {
        setShow(false);
      }}
      onConfirmPressed={() => {
        setShow(false);
        rerequest && rerequest();
      }}
    />
  );
};

const styles = StyleSheet.create({
  contentStyle: {
    height: 110,
  },
  container: {
    borderRadius: 10,
    margin: 0,
    elevation: 15,
  },
  title: {
    fontSize: 22.5,
    fontFamily: "sans-serif-medium",
    color: colors["primary"],
    left: -75,
  },
  messages: {
    color: colors["black"],
    fontSize: 15.5,
    width: 300,
    left: 7,
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
    marginLeft: 90,
    marginTop: 10,
  },
});

export default PermissionsModal;
