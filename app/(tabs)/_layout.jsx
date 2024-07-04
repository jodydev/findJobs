import { StatusBar } from "expo-status-bar";
import { Redirect, Tabs } from "expo-router";
import { Image, Text, View } from "react-native";

import { icons } from "../../constants";
// import { Loader } from "../../components";
// import { useGlobalContext } from "../../context/GlobalProvider";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="flex items-center justify-center gap-1 mt-3">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-8 h-8"
      />
    </View>
  );
};

const TabLayout = () => {
  //   const { loading, isLogged } = useGlobalContext();
  const loading = true;

  if (!loading && !isLogged) return <Redirect href="/sign-in" />;

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "black",
            height: 84,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={icons.love} color={color} focused={focused} />
            ),
          }}
        />

        <Tabs.Screen
          name="matches"
          options={{
            title: "Matches",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={icons.star} color={color} focused={focused} />
            ),
          }}
        />

        <Tabs.Screen
          name="chats"
          options={{
            title: "Chats",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={icons.chat} color={color} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={icons.man} color={color} focused={focused} />
            ),
          }}
        />
      </Tabs>

      {/* <Loader isLoading={loading} /> */}
      <StatusBar backgroundColor="#894222" style="light" />
    </>
  );
};

export default TabLayout;
