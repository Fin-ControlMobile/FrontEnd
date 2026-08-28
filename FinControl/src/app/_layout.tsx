import { Stack } from "expo-router";
import { StackScreen } from "react-native-screens";


export default function RootLayout() {

  return (
    <Stack screenOptions={{ headerShown: false }}>

      <Stack.Screen
        name="splash/index"
        options={{
          title: "splash",
          headerShown: false
        }}
        />

      <Stack.Screen
        name="login/index"
        options={{
          title: "login",
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
    </Stack>
  );
}