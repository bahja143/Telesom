import React, { useState } from "react";
import { View, StyleSheet, FlatList, RefreshControl } from "react-native";

import BookingItem from "../components/BookingItem";
import ItemSeparator from "../components/ItemSeparator";
import CancelModal from "../components/CancelModal";
import colors from "../config/colors";

const initialData = [
  {
    id: 1,
    name: "Keyse Hussein Kahin",
    number: "0633176281",
    profition: 1,
    place: 6,
    status: null,
  },
  {
    id: 2,
    name: "Jama Osman Yusuf",
    number: "0634153275",
    profition: 2,
    place: 4,
    status: null,
  },
  {
    id: 3,
    name: "Abdisamad Elmi Buuni",
    number: "0633176281",
    profition: 3,
    place: 1,
    status: true,
  },
  {
    id: 4,
    name: "Amin Abdirahman Dayib",
    number: "0634880468",
    profition: 4,
    place: 2,
    status: false,
  },
  {
    id: 5,
    name: "Mohamed Hassan Ali",
    number: "0634880468",
    profition: 5,
    place: 1,
    status: true,
  },
];

const MyBookingsScreen = () => {
  const [data, setData] = useState(initialData);
  const [refreshing, setRefreshing] = useState(false);
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

  const [show, setShow] = useState(false);
  const [item, setItem] = useState({});

  const handleBooking = (item) => {
    setItem(item);
    setShow(true);
  };

  const handleCancel = () => {
    const bookings = data.map((d) => {
      if (d.id === item.id) {
        d.status = false;
      }

      return d;
    });
    setData(bookings);
    setShow(false);
  };

  return (
    <>
      <CancelModal
        show={show}
        setShow={setShow}
        item={item}
        handleConfirm={handleCancel}
        message={`Are you sure that you want to cancel this booking for mr ${item.name} ?`}
      />
      <View styles={styles.container}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <BookingItem
              worker={item}
              categories={categories}
              cities={cities}
              onSwipeable={handleBooking}
            />
          )}
          ItemSeparatorComponent={() => (
            <ItemSeparator color={colors["light"]} />
          )}
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
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors["white"],
  },
});

export default MyBookingsScreen;
