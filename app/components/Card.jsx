import { View, Text } from 'react-native';

const Card = ({ title }) => {
  return (
    <View className="bg-green-800 p-4 rounded-lg m-2 h-52 w-48">
      <Text className="text-lg">{title}</Text>
    </View>
  );
};

export default Card;