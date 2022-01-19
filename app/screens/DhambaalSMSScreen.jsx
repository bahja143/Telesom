import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  RefreshControl,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import DhambaalItem from "../components/DhambaalItem";
import InputText from "../components/InputText";
import ItemSeparator from "../components/ItemSeparator";
import { FormGroup } from "../components/form";

import colors from "../config/colors";

const initialData = [
  { id: 1, name: "Covid-19 Awareness", groupId: 1 },
  { id: 2, name: "Education", groupId: 1 },
  { id: 3, name: "Covid Vaccine", groupId: 2 },
  { id: 4, name: "Advertisement", groupId: 3 },
  { id: 5, name: "Awareness", groupId: 1 },
  { id: 6, name: "Covid-19 Awareness", groupId: 1 },
  { id: 7, name: "Education", groupId: 1 },
  { id: 8, name: "Covid Vaccine", groupId: 2 },
  { id: 9, name: "Advertisement", groupId: 3 },
  { id: 10, name: "Awareness", groupId: 1 },
  { id: 11, name: "Covid-19 Awareness", groupId: 1 },
  { id: 12, name: "Education", groupId: 1 },
  { id: 13, name: "Covid Vaccine", groupId: 2 },
  { id: 14, name: "Advertisement", groupId: 3 },
  { id: 15, name: "Awareness", groupId: 1 },
];

const DhambaalSMSScreen = ({ navigation }) => {
  const [data] = useState(initialData);
  const [filteredData, setData] = useState(data);
  const [groups] = useState([
    { id: 1, name: "Business" },
    { id: 2, name: "Awarness" },
    { id: 3, name: "Education" },
  ]);

  const [refreshing, setRefreshing] = useState(false);
  const [filter, setFilter] = useState("");

  const handleDelete = (id) => {
    setData(filteredData.filter((d) => d.id !== id));
  };

  const handleFilter = () => {
    setData(data.filter((d) => d.name.startsWith(filter)));
  };

  useEffect(() => {
    handleFilter();
  }, [filter]);

  return (
    <View style={styles.container}>
      <FormGroup margin={25}>
        <View style={styles.input}>
          <InputText
            placeholder="Search"
            icon="email-search"
            onChangeText={(text) => setFilter(text)}
          />
        </View>
      </FormGroup>
      {data.length === 0 && (
        <View style={styles.textContainer}>
          <Text style={styles.text}>Empty</Text>
        </View>
      )}
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <DhambaalItem
            title={item.name}
            subtitle={groups.find((d) => d.id === item.groupId).name}
            onDelete={() => handleDelete(item.id)}
            onPress={() =>
              navigation.navigate("ViewSMS", {
                name: item.name,
                group: groups.find((d) => d.id === item.groupId).name,
              })
            }
          />
        )}
        ItemSeparatorComponent={() => <ItemSeparator />}
        refreshControl={
          <RefreshControl
            colors={[colors["primary"]]}
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true);
              setTimeout(() => {
                setRefreshing(false);
                setData(initialData);
              }, 2000);
            }}
          />
        }
      />
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("Dhambaalform")}
      >
        <View style={styles.iconCotainer}>
          <MaterialCommunityIcons
            name="plus"
            size={40}
            color={colors["white"]}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  input: {
    paddingHorizontal: 10,
  },
  text: {
    color: colors["medium"],
    fontSize: 20,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "sans-serif-medium",
  },
  iconCotainer: {
    backgroundColor: colors["primary"],
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    position: "absolute",
    right: 50,
    bottom: 30,
  },
});

export default DhambaalSMSScreen;
