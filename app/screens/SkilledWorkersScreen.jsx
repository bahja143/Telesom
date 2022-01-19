import React, { useState, useEffect } from "react";
import { FlatList, View, StyleSheet, RefreshControl, Text } from "react-native";

import TechnicianItem from "../components/TechnicianItem";
import ItemSeparator from "../components/ItemSeparator";
import PickerComponent from "../components/PickerComponent";
import BookingModal from "../components/BookingModal";
import { FormGroup } from "../components/form";
import colors from "../config/colors";

const initialData = [
  {
    id: 1,
    name: "Keyse Hussein Kahin",
    number: "0633176281",
    profition: 1,
    place: 6,
  },
  {
    id: 2,
    name: "Jama Osman Yusuf",
    number: "0634153275",
    profition: 2,
    place: 4,
  },
  {
    id: 3,
    name: "Abdisamad Elmi Buuni",
    number: "0633176281",
    profition: 3,
    place: 1,
  },
  {
    id: 4,
    name: "Amin Abdirahman Dayib",
    number: "0634880468",
    profition: 4,
    place: 2,
  },
  {
    id: 5,
    name: "Mohamed Hassan Ali",
    number: "0634880468",
    profition: 5,
    place: 1,
  },
  {
    id: 6,
    name: "Abdirahman Shaqale Abdi",
    number: "0634142064",
    profition: 3,
    place: 1,
  },
  {
    id: 7,
    name: "Faysal Siciid Hassan",
    number: "0633175456",
    profition: 5,
    place: 2,
  },
  {
    id: 8,
    name: "Ahmed Hussein Osman",
    number: "0634574489",
    profition: 7,
    place: 2,
  },
  {
    id: 9,
    name: "Hodan Hassan Amin",
    number: "0634520056",
    profition: 8,
    place: 2,
  },
  {
    id: 10,
    name: "Yasin Mohamed Ahmed",
    number: "0634189663",
    profition: 7,
    place: 3,
  },
  {
    id: 11,
    name: "Keyse Hussein Kahin",
    number: "0633176281",
    profition: 1,
    place: 6,
  },
  {
    id: 12,
    name: "Jama Osman Yusuf",
    number: "0634153275",
    profition: 2,
    place: 4,
  },
  {
    id: 13,
    name: "Abdisamad Elmi Buuni",
    number: "0633176281",
    profition: 3,
    place: 1,
  },
  {
    id: 14,
    name: "Amin Abdirahman Dayib",
    number: "0634880468",
    profition: 4,
    place: 2,
  },
  {
    id: 15,
    name: "Mohamed Hassan Ali",
    number: "0634880468",
    profition: 5,
    place: 1,
  },
  {
    id: 16,
    name: "Abdirahman Shaqale Abdi",
    number: "0634142064",
    profition: 3,
    place: 1,
  },
  {
    id: 17,
    name: "Faysal Siciid Hassan",
    number: "0633175456",
    profition: 5,
    place: 2,
  },
  {
    id: 18,
    name: "Ahmed Hussein Osman",
    number: "0634574489",
    profition: 7,
    place: 2,
  },
  {
    id: 19,
    name: "Hodan Hassan Amin",
    number: "0634520056",
    profition: 8,
    place: 2,
  },
  {
    id: 20,
    name: "Yasin Mohamed Ahmed",
    number: "0634189663",
    profition: 7,
    place: 3,
  },
];

const SkilledWorkersScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [categories] = useState([
    { id: 1, name: "Masonry(Wastaad)" },
    { id: 2, name: "Plumbering(Biyogaliye)" },
    { id: 3, name: "Electrician(Laydhle)" },
    { id: 4, name: "Furniture" },
    { id: 5, name: "Carpenter(Nijaar)" },
    { id: 6, name: "Hospitality and house keeping" },
    { id: 7, name: "Welding(laxaamad)" },
    { id: 8, name: "Aluminium and Class" },
    { id: 9, name: "Auto Mechanics(machanic)" },
    { id: 10, name: "Electronics" },
    { id: 11, name: "Painter (Rinjiile)" },
    { id: 12, name: "Roofing and Internal Decor" },
    { id: 13, name: "Still Fixin(Biro laab)" },
    { id: 14, name: "Tile laying(Marmarle)" },
    { id: 15, name: "Waiter and Cooking" },
  ]);
  const [cities] = useState([
    { id: 1, name: "Hargeisa" },
    { id: 2, name: "Boorama" },
    { id: 3, name: "Burco" },
    { id: 4, name: "Berbera" },
    { id: 5, name: "Ceynabo" },
    { id: 6, name: "Oodweyne" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [booked, setBooked] = useState({});

  const handleFilter = () => {
    if (!selectedCategory && !selectedCity) return setData(initialData);
    else if (selectedCity && selectedCategory)
      return setData([
        ...initialData.filter(
          (d) =>
            d.profition === selectedCategory.id && d.place === selectedCity.id
        ),
      ]);
    else if (selectedCity)
      return setData([
        ...initialData.filter((d) => d.place === selectedCity.id),
      ]);

    return setData([
      ...initialData.filter((d) => d.profition === selectedCategory.id),
    ]);
  };

  const handleBooking = (item) => {
    setShowBooking(true);
    setBooked(item);
  };

  useEffect(() => {
    handleFilter();
  }, [selectedCity, selectedCategory]);

  return (
    <>
      <BookingModal
        show={showBooking}
        setShow={setShowBooking}
        booked={booked}
      />
      <View style={styles.search}>
        <FormGroup margin={7}>
          <PickerComponent
            data={categories}
            selected={selectedCategory}
            setSelected={(item) => setSelectedCategory(item)}
            label="Select Skill"
            icon="tools"
          />
        </FormGroup>
        <FormGroup margin={7}>
          <PickerComponent
            data={cities}
            selected={selectedCity}
            setSelected={(city) => setSelectedCity(city)}
            label="Select City"
            icon="crosshairs-gps"
          />
        </FormGroup>
      </View>
      {data.length === 0 && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>No Result</Text>
        </View>
      )}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TechnicianItem
            worker={item}
            categories={categories}
            cities={cities}
            onPress={() => navigation.navigate("workerProfile", item)}
            onSwipeable={handleBooking}
          />
        )}
        ItemSeparatorComponent={() => <ItemSeparator color={colors["light"]} />}
        refreshControl={
          <RefreshControl
            colors={[colors["primary"]]}
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true);
              setTimeout(() => {
                setRefreshing(false);
              }, 2000);
            }}
          />
        }
      />
    </>
  );
};

const styles = StyleSheet.create({
  search: {
    marginBottom: 17,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  refreshIndicator: {
    color: colors["primary"],
    backgroundColor: colors["primary"],
    margin: 50,
  },
  resultContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  resultText: {
    fontSize: 25,
    color: colors["medium"],
  },
});

export default SkilledWorkersScreen;
