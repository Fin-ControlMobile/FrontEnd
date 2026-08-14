import { Stack } from "expo-router";

export default function RootLayout(){
  return(
    <Stack>
        
        <Stack.Screen
        name="login/index"
        options={{title:"login", 
        headerShown: false}} 
        />

        <Stack.Screen
        name="home/index"
        options={{title:"home",
        headerShown: false}}
        />

        <Stack.Screen
        name="detalhes/index"
        options={{title:"Dashboard",
        headerShown: false}}
        />
        <Stack.Screen
        name="movimentacoes/index"
        options={{title:"Tela de movimentacoes",
          headerShown: false}}
        />
        <Stack.Screen
        name="seguranca/index"
        options={{title:"Tela de Seguranca",
        headerShown: false}}
        />
    </Stack>
  );
}