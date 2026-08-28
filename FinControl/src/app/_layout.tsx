import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack initialRouteName="login/loginSemBiometria">

      <Stack.Screen
        name="login/index"
        options={{
          title: "login",
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

      <Stack.Screen
        name="cadastro/index"
        options={{
          title: "cadastro",
          headerShown: false
        }}
      />
    </Stack>
  );
}