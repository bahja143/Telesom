import React, { useState } from "react";
import { View, StyleSheet, FlatList, Linking } from "react-native";

import CenterItem from "../components/CenterItem";
import ItemSeparator from "../components/ItemSeparator";
import PermissionsModal from "../components/PermissionsModal";
import * as Location from "expo-location";
import colors from "../config/colors";

const initialData = [
  {
    id: 1,
    name: "Durdur center",
    address: "26th june, Togdheer",
    location: { latitude: 9.561287, longitude: 44.058293 },
  },
  {
    id: 2,
    name: "Xera-awr center",
    address: "Xera-awr district, Maroodi-jeex Hargeisa-Somaliland",
    location: { latitude: 9.612016, longitude: 43.882136 },
  },
  {
    id: 3,
    name: "150 ka center",
    address: "150 district, Hargiesa",
    location: { latitude: 9.523422, longitude: 44.07887 },
  },
];

const CentersScreen = ({ navigation }) => {
  const [data] = useState(initialData);
  const [showPermissions, setShowPermissions] = useState(false);
  const [message, setMessage] = useState(
    "You need to enable Location permissions to get Telesom center."
  );

  const redirect = async (item) => {
    try {
      const { granted, canAskAgain } =
        await Location.requestForegroundPermissionsAsync();

      !canAskAgain &&
        setMessage(`To get Telesom center, allow Telesom app access to your location.
Tap Settings > Permissions, and turn Location on.`);

      if (!granted) return setShowPermissions(true);

      navigation.navigate("centersMap", item);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePermissions = async () => {
    try {
      const { canAskAgain } =
        await Location.requestForegroundPermissionsAsync();

      return canAskAgain ? redirect() : Linking.openSettings();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <PermissionsModal
        show={showPermissions}
        setShow={setShowPermissions}
        rerequest={handlePermissions}
        message={message}
      />
      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <CenterItem item={item} onPress={() => redirect(item)} />
          )}
          ItemSeparatorComponent={() => (
            <ItemSeparator height={2} color={colors["light"]} />
          )}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors["light"],
  },
});

export default CentersScreen;
