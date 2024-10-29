import { View, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Home = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
    {/* Immagine del logo */}
    <Image className="mt-12" source={require('../../assets/images/logo/logo.png')} style={{ width: 150, height: 40 }} />

    {/* StatusBar per impostazioni automatiche */}
    <StatusBar style="auto" />
  </View>
  )
}

export default Home

