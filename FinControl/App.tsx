import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Movimentacoes from './src/movimentacoes';

export default function App() {
  return (
    <View style={styles.container}>
     <Movimentacoes/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
