import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Movimentacoes from './src/app/movimentacoes';
import { JetBrainsMono_400Regular } from '@expo-google-fonts/jetbrains-mono';
import { Manrope_800ExtraBold, Manrope_700Bold, Manrope_600SemiBold } from '@expo-google-fonts/manrope';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
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
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeareaview}>
        <Movimentacoes />
        <StatusBar style='auto' />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeareaview: {
    flex: 1
  }
});
