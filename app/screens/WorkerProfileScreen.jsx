import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import * as Yup from "yup";

import { Form, TextInput, Submit } from "../components/form";
import BookingModal from "../components/BookingModal";
import colors from "../config/colors";

const schema = Yup.object({ body: Yup.string().required() });

const WorkerProfileScreen = ({ route }) => {
  const [message] = useState({ body: "" });
  const worker = route.params;
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
  const [showBooking, setShowBooking] = useState(false);
  const [booked, setBooked] = useState({});

  const handlePhoneCall = () => {
    Linking.openURL(`tel: ${worker.number}`);
  };

  const handleBooking = (item) => {
    setShowBooking(true);
    setBooked(item);
  };

  return (
    <>
      <BookingModal
        show={showBooking}
        setShow={setShowBooking}
        booked={booked}
      />
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior="position"
          style={styles.keyboardOffSet}
          keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -75}
        >
          <View style={styles.background} />
          <View style={styles.profile}>
            <View style={styles.headerContainer}>
              <View style={styles.imageBackground}>
                <Entypo name="user" size={100} color={colors["primary"]} />
              </View>

              <View style={styles.textContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {worker.name}
                </Text>
                <Text style={styles.subtitle} numberOfLines={1}>
                  {categories.find((c) => c.id === worker.profition)?.name}
                </Text>
                <Text style={styles.location}>
                  <MaterialIcons
                    name="call"
                    size={12}
                    color={colors["secondary"]}
                  />{" "}
                  {worker.number}
                </Text>
                <Text style={styles.location}>
                  <MaterialIcons
                    name="gps-fixed"
                    size={12}
                    color={colors["secondary"]}
                  />{" "}
                  {cities.find((c) => c.id === worker.place)?.name}
                </Text>
              </View>
            </View>
            <View style={styles.subContainer}>
              <View>
                <Text style={styles.text}>Jobs</Text>
                <Text style={styles.number}>34</Text>
              </View>
              <View>
                <Text style={styles.text}>Rating</Text>
                <Text style={styles.number}>8.9</Text>
              </View>
            </View>
            <View style={styles.actionsContainer}>
              <TouchableOpacity
                style={[styles.Btn, styles.BtnCall]}
                onPress={handlePhoneCall}
              >
                <Text>
                  <Ionicons name="call" color={colors["secondary"]} size={30} />
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.Btn, styles.BtnBook]}
                onPress={handleBooking}
              >
                <Text style={styles.BtnText}>Book Now</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.messageContainer}>
            <Form
              initialValues={message}
              validationSchema={schema}
              onSubmit={(values) => console.log(values)}
            >
              <TextInput icon="message" placeholder="Message" name="body" />
              <Submit title="Send Message" color="secondary" />
            </Form>
          </View>
        </KeyboardAvoidingView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors["white"],
  },
  background: {
    backgroundColor: colors["primary"],
    width: "100%",
    height: 225,
    borderBottomEndRadius: 27,
    borderBottomLeftRadius: 27,
  },
  profile: {
    backgroundColor: colors["white"],
    width: "87%",
    height: 325,
    alignSelf: "center",
    borderRadius: 15,
    top: -150,
    elevation: 7,
    overflow: "hidden",
  },
  headerContainer: {
    flexDirection: "row",
  },
  textContainer: {
    top: 20,
    left: 40,
  },
  title: {
    fontSize: 18,
    fontFamily: "sans-serif-medium",
    marginBottom: 2,
    width: 180,
  },
  subtitle: {
    color: colors["medium"],
    fontFamily: "sans-serif-light",
    width: 150,
    marginBottom: 10,
  },
  imageBackground: {
    backgroundColor: colors["light"],
    width: 120,
    height: 110,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    top: 20,
    left: 20,
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: colors["light"],
    width: 315,
    height: 78,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingTop: 7,
    top: 40,
    alignSelf: "center",
  },
  text: {
    color: colors["lightBlack"],
    fontSize: 16,
    fontFamily: "sans-serif-light",
  },
  number: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 5,
    marginLeft: 7,
    fontFamily: "sans-serif-medium",
    color: colors["lightBlack"],
  },
  actionsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 25,
  },
  Btn: {
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  BtnCall: {
    borderWidth: 1.5,
    borderColor: colors["primary"],
  },
  BtnBook: {
    backgroundColor: colors["primary"],
  },
  BtnText: {
    color: colors["white"],
    fontSize: 18,
  },
  location: {
    color: colors["primary"],
    marginTop: 4,
    left: -4,
    fontSize: 13.5,
  },
  messageContainer: {
    width: "90%",
    alignSelf: "center",
    height: 135,
    justifyContent: "space-between",
    top: -100,
  },
  keyboardOffSet: {
    flex: 1,
  },
});

export default WorkerProfileScreen;
