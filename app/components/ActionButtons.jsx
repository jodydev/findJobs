import React from "react";
import { View, TouchableOpacity, Image } from "react-native";

const ActionButtons = () => {
  const buttonSize = 60;
  const primaryColor = "#fa6f6f";

  const CircleButton = ({ children, size }) => (
    <View
      style={{
        width: buttonSize + size,
        height: buttonSize + size,
        borderRadius: (buttonSize + size) / 2,
        marginBottom: -size / 5,
      }}
      className="bg-gray-800 items-center justify-center"
    >
      {children}
    </View>
  );

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20,
      }}
    >
      <CircleButton size={0}>
        <TouchableOpacity>
          <Image
            source={require("../../assets/icons/like-action.png")}
            style={{ width: 30, height: 30, tintColor: primaryColor }}
          />
        </TouchableOpacity>
      </CircleButton>
      <CircleButton size={10}>
        <TouchableOpacity>
          <Image
            source={require("../../assets/icons/boost-action.png")}
            style={{ width: 35, height: 35}}
          />
        </TouchableOpacity>
      </CircleButton>
      <CircleButton size={0}>
        <TouchableOpacity>
          <Image
            source={require("../../assets/icons/superlike-action.png")}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
      </CircleButton>
      <CircleButton size={10}>
        <TouchableOpacity>
          <Image
            source={require("../../assets/icons/repeat-action.png")}
            style={{ width: 35, height: 35, tintColor: "purple" }}
          />
        </TouchableOpacity>
      </CircleButton>
      <CircleButton size={0}>
        <TouchableOpacity>
          <Image
            source={require("../../assets/icons/cancel-action.png")}
            style={{ width: 30, height: 30, tintColor: "red" }}
          />
        </TouchableOpacity>
      </CircleButton>
    </View>
  );
};

export default ActionButtons;
