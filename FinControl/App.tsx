  import { StatusBar } from 'expo-status-bar';
  import { StyleSheet, Text, View } from 'react-native';
  import { useFonts } from 'expo-font';
  import {Manrope_800ExtraBold} from '@expo-google-fonts/manrope'
  import { JetBrainsMono_400Regular } from '@expo-google-fonts/jetbrains-mono';
  import Login, { LoginSemBiometria } from './src/app/login';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Colors } from './src/constants/theme';
  export default function App() {
  
    const[fontsLoaded,fontError] = useFonts({
      
      Manrope_800ExtraBold,
      JetBrainsMono_400Regular
    });


    if (!fontsLoaded && !fontError) {
      return null;
    }

    return (
      <SafeAreaProvider>
        <View style={styles.container}>
        <StatusBar style='light'/>


        <Login/>
        </View>
      </SafeAreaProvider>
  );

  }

  const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: Colors.backgroundColor,
      alignItems: 'center',
      justifyContent: 'center'
    },
  });