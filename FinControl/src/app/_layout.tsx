import { router, Stack } from "expo-router";
import { StatusBar } from "react-native"
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Manrope_600SemiBold, Manrope_700Bold, Manrope_800ExtraBold, useFonts } from '@expo-google-fonts/manrope'
import { JetBrainsMono_400Regular } from '@expo-google-fonts/jetbrains-mono';
import { Colors } from "../constants/theme";
import { StackScreen } from "react-native-screens";
import { AuthProvider } from "../context/AuthContext";
import { useEffect } from "react";
import * as Notifications from 'expo-notifications'


export default function RootLayout() {

  const [fontsLoaded, fontError] = useFonts({
    JetBrainsMono_400Regular,
    Manrope_600SemiBold,
    Manrope_700Bold,
    Manrope_800ExtraBold
  })

  if (!fontsLoaded && !fontError) {
    return null;
  }

   useEffect(() => {
    const subscription =
      Notifications.addNotificationResponseReceivedListener(response => {
        const data =
          response.notification.request.content.data;
      
        if (data.tipo === 'movimentacao') {
          router.push('/')
        }
      });
    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <AuthProvider>
      <SafeAreaProvider>
        <StatusBar
          backgroundColor={Colors.purpleTitleColor}
        />

        <Stack screenOptions={{ headerShown: false }}>

          <Stack.Screen
            name="splash/index"
            options={{
              title: "splash",
              headerShown: false
            }}
          />

          <Stack.Screen
            name="login/loginSemBiometria"
            options={{
              title: "loginSemBiometria",
              headerShown: false
            }}
          />

          <Stack.Screen
            name="login/loginComBiometria"
            options={{
              title: "loginComBiometria",
              headerShown: false
            }}
          />

          <Stack.Screen
            name="home/index"
            options={{
              title: "home",
              headerShown: false
            }}
          />

          <Stack.Screen
            name="esqueceuSenha/index"
            options={{
              title: "esqueceuSenha",
              headerShown: false
            }}
          />

          <Stack.Screen
            name="detalhes/index"
            options={{
              title: "wallet",
              headerShown: false
            }}
          />
          <Stack.Screen
            name="movimentacoes/index"
            options={{
              title: "Tela de movimentacoes",
              headerShown: false
            }}
          />
          <Stack.Screen
            name="seguranca/index"
            options={{
              title: "shield",
              headerShown: false
            }}
          />

          <Stack.Screen
            name="cadastro/index"
            options={{
              title: "cadastro",
              headerShown: false
            }}
          />

          <Stack.Screen
            name="redefinirSenha/index"
            options={{
              title: "redefinirSenha",
              headerShown: false
            }}
          />

        </Stack>
      </SafeAreaProvider>
    </AuthProvider>
  );
}
