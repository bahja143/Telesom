import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";

import NotificationItem from "../components/NotificationItem";

const initialData = [
  {
    id: 1,
    title: "Discount",
    text: "Macmiil waxaa lagu soo kordhiyay adeega Aqoon-maal oo aad oga faa'ideysan karto",
    date: "1/10/2021",
    visible: true,
  },
  {
    id: 2,
    title: "Ogeysiis",
    text: "Macmiil waxaa lagu soo kordhiyay adeega Aqoon-maal oo aad oga faa'ideysan karto",
    date: "30/9/2021",
    visible: false,
  },
  {
    id: 3,
    title: "Offer",
    text: "Macmiil waxaa lagu soo kordhiyay adeega Aqoon-maal oo aad oga faa'ideysan karto",
    date: "30/9/2021",
    visible: false,
  },
  {
    id: 4,
    title: "5G Services",
    text: "Macmiil waxaa lagu soo kordhiyay adeega Aqoon-maal oo aad oga faa'ideysan karto",
    date: "28/9/2021",
    visible: true,
  },
  {
    id: 5,
    title: "Discount",
    text: "Macmiil waxaa lagu soo kordhiyay adeega Aqoon-maal oo aad oga faa'ideysan karto",
    date: "27/9/2021",
    visible: false,
  },
  {
    id: 6,
    title: "AROOSWACAN",
    text: `Si aad uga qayb qaadato barnaamijka aroos wacan U dir lambarkaaga oo ka bilaabmaya 063- lambarka gaaban ee 111, kadibna asxaabtaaduna ha u soo diraan lambarkaaga 111 si aad u hesho codad badan oo kuu sahlaaya in aad ku guuleysato aroos wacan. Ku taageer asxaabtaada in ay ka mid noqdaan guuleystayaasha Aroos wacan.`,
    date: "27/9/2021",
    visible: false,
  },
];

const NotificationsScreen = ({ navigation }) => {
  const [data] = useState(initialData);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <NotificationItem
            item={item}
            onPress={() => navigation.navigate("ViewNotifications", item)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default NotificationsScreen;
