import { AVPlaybackStatus, ResizeMode, Video } from "expo-av"
import { useRouter } from "expo-router";
import { hideAsync } from "expo-splash-screen";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet } from "react-native"

type Props = {
    onComplete: (status: boolean) => void;
}

export function Splash({ onComplete }: Props) {

    const router = useRouter();
    const [lastStatus, setStatus] = useState<AVPlaybackStatus>({} as AVPlaybackStatus)

    async function onPlaybackStatusUpdate(status: AVPlaybackStatus) {
        if (status.isLoaded) {
            if (lastStatus.isLoaded !== status.isLoaded) {
                hideAsync();
            }

            if (status.didJustFinish) {
                onComplete(true);

                const primeiroAcesso = await AsyncStorage.getItem("primeiroAcesso");

                if (!primeiroAcesso) {

                    //! MUDAR O CAMINHO PARA O LOGIN SEM BIOMETRIA
                    router.replace("/login");

                    await AsyncStorage.setItem(
                        "primeiroAcesso",
                        "true"
                    );
                }
                else {
                    //! MUDAR O CAMINHO PARA O LOGIN COM BIOMETRIA
                    router.replace("/home")
                }
            }
        }

        setStatus(() => status);
    }

    return (
        <Video
            style={StyleSheet.absoluteFill}
            resizeMode={ResizeMode.COVER}
            source={require('../../../assets/imgs/SplashScreen.mp4')}
            isLooping={false}
            shouldPlay={true}
            onPlaybackStatusUpdate={onPlaybackStatusUpdate}
        />
    )
}