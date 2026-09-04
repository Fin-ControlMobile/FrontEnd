import { useState } from "react";
import { Splash } from "../../components/screens/Splash";
import { router } from "expo-router";
import { preventAutoHideAsync } from "expo-splash-screen";

preventAutoHideAsync();

export default function App() {

    const [splashComplete, setSplashComplete] = useState(false);

    return (
        <Splash onComplete={setSplashComplete} />
    )
}