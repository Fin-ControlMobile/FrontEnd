import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { Manrope_600SemiBold, Manrope_700Bold, Manrope_800ExtraBold } from '@expo-google-fonts/manrope'
import { JetBrainsMono_400Regular } from '@expo-google-fonts/jetbrains-mono';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Colors } from './src/constants/theme';
<<<<<<< HEAD

=======
import LoginSemBiometria from './src/app/login';
>>>>>>> feature/esquecerSenha
export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    JetBrainsMono_400Regular,
    Manrope_600SemiBold,
    Manrope_700Bold,
    Manrope_800ExtraBold
  })

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
<<<<<<< HEAD
        <StatusBar 
        backgroundColor={Colors.purpleTitleColor}
        />
=======
        <StatusBar style='light' />
        <LoginSemBiometria/>
>>>>>>> feature/esquecerSenha
      </View>
    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    alignItems: 'center',
    justifyContent: 'center'
  },
});