import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView } from "react-native";
import { Link } from "expo-router";
import { Avatar } from "native-base";
import Menu from "./components/Menu";
import Card from "./components/Card";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function App() {
  return (
    <View className="flex-1 bg-gray-100 px-3">
      <View className="flex-row  items-center pt-16">
        <View className="flex-1">
          <Menu />
        </View>
        <View className="flex-1 items-center" />
        <View className="flex-1 items-end mx-5">
          <Avatar
            source={{ uri: "https://example.com/avatar.png" }}
            size="md"
          />
        </View>
      </View>
      <View className="items-start mx-2 mt-2">
        <View className="flex-row p-1 rounded-xl">
          <Ionicons name="checkmark-circle" size={20} color="gray" />
          <Text className="text-sm text-gray-500 font-semibold p-2">
            Lunedì, 1 Gennaio 2024
          </Text>
        </View>
        <View className="flex-row gap-12">
          <Text className="text-3xl font-bold mb-3">
            Let's Find Jobs Opportunity Here
          </Text>
          <View className="bg-green-800 rounded-full p-3 my-8">
            <Ionicons name="search" size={30} color="white" />
          </View>
        </View>
      </View>
      <ScrollView horizontal indicatorStyle="white">
        <View className="flex flex-row">
          <Card title="Card 1" />
          <Card title="Card 2" />
          <Card title="Card 3" />
          <Card title="Card 4" />
          <Card title="Card 5" />
          <Card title="Card 6" />
          {/* Aggiungi altre card se necessario */}
        </View>
      </ScrollView>
      <StatusBar style="auto" />
      <Link href="/home">Go to Home</Link>
    </View>
  );
}
