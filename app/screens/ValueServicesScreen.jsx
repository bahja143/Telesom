import React, { useState } from "react";
import { FlatList } from "react-native";

import ValueServiceItem from "../components/ValueServiceItem";
import ItemSeparator from "../components/ItemSeparator";
import SubscriptionModal from "../components/SubscriptionModal";

const initialdata = [
  {
    id: 1,
    icon: "school",
    title: "M-Education",
    text: "M-education is a mobile education based service that allows you to increase your knowledge.",
    price: "0.5$",
    on: false,
  },
  {
    id: 2,
    icon: "cellphone-sound",
    title: "CRBT (Ila Maqal)",
    text: "Want to share your favourite audio with friends and family? Subscribe CRBT, so the caller will hear your favourite audio while calling.",
    price: "0.75$",
    on: false,
  },
  {
    id: 3,
    icon: "twitter",
    title: "Twitter",
    text: "Twitter is a service where users can tweet, retweet, follow and receive notifications. the application idea is to notify subscribers about a change of the Timeline(TL) of twitter user.",
    price: "0.3$",
    on: false,
  },
  {
    id: 4,
    icon: "cart",
    title: "Mobile Market",
    text: "Mobile market is a modern service that allows customers to buy, sell and rent online or release their services for sale or rent in the commercial market cities in Somaliland",
    price: "0.5$",
    on: false,
  },
  {
    id: 5,
    icon: "account-group",
    title: "SMS Group (Fariin wadaag)",
    text: "SMS Group is a services where groups within the community can send short messages and share their opinions, workshops.",
    price: "0.8$",
    on: false,
  },
  {
    id: 6,
    icon: "food",
    title: "Mama Khadija",
    text: "Is a mobile USSD service where subscribers get daily updated lessons about cooking skills, parenting and childcare, maternity and breastfeeding. the main audience of the service are women.",
    price: "0.4$",
    on: false,
  },
];

const ValueServicesScreen = () => {
  const [data, setData] = useState(initialdata);
  const [showSubsribe, setShowSubsribe] = useState(false);
  const [showUnSubsribe, setShowUnSubsribe] = useState(false);
  const [item, setItem] = useState([]);

  const handleSubscribtion = (item) => {
    const values = data.map((d) => {
      if (d.id === item.id) d.on = d.on ? false : true;

      return d;
    });

    setData(values);
  };

  const handleOnOff = (item) => {
    setItem(item);
    if (!item.on) return setShowSubsribe(true);

    setShowUnSubsribe(true);
  };

  return (
    <>
      <SubscriptionModal
        show={showSubsribe}
        setShow={setShowSubsribe}
        handleSubscribtion={handleSubscribtion}
        subscribe
        item={item}
      />
      <SubscriptionModal
        show={showUnSubsribe}
        setShow={setShowUnSubsribe}
        handleSubscribtion={handleSubscribtion}
        item={item}
      />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ValueServiceItem
            icon={item.icon}
            title={item.title}
            text={item.text}
            price={item.price}
            on={item.on}
            onPress={() => handleOnOff(item)}
          />
        )}
        ItemSeparatorComponent={() => <ItemSeparator />}
      />
    </>
  );
};

export default ValueServicesScreen;
