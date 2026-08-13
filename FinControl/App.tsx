import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Manrope_800ExtraBold, Manrope_700Bold, Manrope_600SemiBold } from '@expo-google-fonts/manrope';
import Seguranca from './src/app/seguranca';
import { useFonts } from 'expo-font';
import { JetBrainsMono_400Regular } from '@expo-google-fonts/jetbrains-mono';
export default function App() {

  const [loaded] = useFonts({
    JetBrainsMono_400Regular,
    Manrope_600SemiBold,
    Manrope_700Bold,
    Manrope_800ExtraBold
  })

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Seguranca />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001021',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
