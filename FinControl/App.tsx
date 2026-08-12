import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Footer from './src/component/footer/footer';
export default function App() {
  return (
    <View style={styles.container}>
      <Footer />
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
