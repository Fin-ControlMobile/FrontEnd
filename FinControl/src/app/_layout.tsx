import { Stack } from "expo-router";

export default function RootLayout(){
  return(
    <Stack>
        
        <Stack.Screen
        name="login/index"
        options={{title:"login", 
        headerShown: false}} />


    </Stack>

  )
}
