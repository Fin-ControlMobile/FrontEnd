import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Movimentacoes from './src/app/movimentacoes';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeareaview}>
        <Movimentacoes />
        <StatusBar style='dark' />
      </SafeAreaView>
    </SafeAreaProvider>


  );
}

const styles = StyleSheet.create({
  safeareaview: {
    flex: 1
  }
});
