import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Footer from './src/component/footer/footer';
import Header from './src/component/header/header';
import { JetBrainsMono_400Regular } from '@expo-google-fonts/jetbrains-mono';
import { Manrope_800ExtraBold, Manrope_700Bold, Manrope_600SemiBold } from '@expo-google-fonts/manrope';
import { useFonts } from 'expo-font';
import Home from './src/app/home/index';
export default function App() {

   const[loaded] = useFonts({
    JetBrainsMono_400Regular,
    Manrope_600SemiBold,
    Manrope_700Bold,
    Manrope_800ExtraBold
  })

   if(!loaded){
    return null;
  }

  return (
        <Home />
  );
}

