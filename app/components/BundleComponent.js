import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import BundleItem from "../components/BundleItem";
import ItemSeparator from "./ItemSeparator";
import ConfirmModal from "./ConfirmModal";

const BundleComponent = ({ data }) => {
  const [show, setShow] = useState();
  const [item, setItem] = useState({});

  const handleConfirm = (item) => {
    console.log(item);
    setShow(false);
  };

  return (
    <>
      <ConfirmModal
        item={item}
        show={show}
        setShow={setShow}
        handleConfirm={handleConfirm}
      />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <BundleItem
            data={item}
            onPress={() => {
              setItem(item);
              setShow(true);
            }}
          />
        )}
        ItemSeparatorComponent={() => <ItemSeparator height={15} />}
        style={styles.list}
      />
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    width: "90%",
    alignSelf: "center",
    marginLeft: 5,
    marginTop: 25,
  },
});

export default BundleComponent;
