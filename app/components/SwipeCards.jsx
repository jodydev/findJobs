import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import SwipeCards from "react-native-swipe-cards";
import location from "../../assets/icons/location.png";
import { LinearGradient } from "expo-linear-gradient";
import ActionButtons from "./ActionButtons";

const Card = ({ image }) => {
  return (
    <View className="relative w-screen h-full rounded-t-2xl bg-black">
      <Image
        className="w-full h-screen rounded-t-2xl"
        source={{ uri: image }}
      />

      <View
        className="absolute bottom-0 left-0 right-0 p-4"
        style={styles.lineargradient}
      >
        <Text className="text-white text-2xl font-psemibold">
          Jody <Text className="text-white text-2xl font-psemibold">23</Text>{" "}
        </Text>

        <View className="flex-row items-start gap-1">
          <Image source={location} className="w-4 h-4 " />
          <Text className="text-white font-psemibold">6 km away</Text>
        </View>

        <ActionButtons />
      </View>
    </View>
  );
};

const cards = [
  {
    name: "1",
    image:
      "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
  },
  {
    name: "2",
    image:
      "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
  },
  {
    name: "3",
    image:
      "https://t3.ftcdn.net/jpg/03/02/88/46/360_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg",
  },
  {
    name: "4",
    image:
      "https://www.shutterstock.com/shutterstock/photos/1617540484/display_1500/stock-photo-closeup-photo-of-amazing-short-hairdo-lady-looking-up-empty-space-deep-thinking-creative-person-arm-1617540484.jpg",
  },
];

// const cards2 = [
//   { name: '10', image: 'https://media.giphy.com/media/12b3E4U9aSndxC/giphy.gif' },
//   { name: '11', image: 'https://media4.giphy.com/media/6csVEPEmHWhWg/200.gif' },
//   { name: '12', image: 'https://media4.giphy.com/media/AA69fOAMCPa4o/200.gif' },
//   { name: '13', image: 'https://media.giphy.com/media/OVHFny0I7njuU/giphy.gif' },
// ];

const Swipe = () => {
  const [cardsState, setCardsState] = useState({
    cards: cards,
    outOfCards: false,
  });

  const handleYup = () => {
    console.log("yup");
  };

  const handleNope = () => {
    console.log("nope");
  };

  const cardRemoved = (index) => {
    console.log(`The index is ${index}`);

    let CARD_REFRESH_LIMIT = 3;

    if (cardsState.cards.length - index <= CARD_REFRESH_LIMIT + 1) {
      console.log(
        `There are only ${cardsState.cards.length - index - 1} cards left.`
      );

      // if (!cardsState.outOfCards) {
      //   console.log(`Adding ${cards2.length} more cards`);

      //   setCardsState({
      //     cards: [...cardsState.cards, ...cards2],
      //     outOfCards: true
      //   });
      // }
    }
  };

  return (
    <SwipeCards
      cards={cardsState.cards}
      loop={false}
      renderCard={(cardData) => <Card {...cardData} />}
      renderNoMoreCards={() => <NoMoreCards />}
      showYup={true}
      showNope={true}
      handleYup={handleYup}
      handleNope={handleNope}
      cardRemoved={cardRemoved}
    />
  );
};

const styles = StyleSheet.create({
  lineargradient: {
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});

export default Swipe;
