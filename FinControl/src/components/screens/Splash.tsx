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

                try {
                    // Busca se existe o token salvo no dispositivo
                    const tokenSalvo = await AsyncStorage.getItem(
                        process.env.EXPO_PUBLIC_TOKEN_KEY!
                    );

                    if (tokenSalvo) {
                        // Já fez login antes -> Vai para Biometria
                        router.replace("/login/loginComBiometria");
                    } else {
                        // Primeiro acesso ou fez logout -> Vai para Email/Senha
                        router.replace("/login/loginSemBiometria");
                    }
                } catch (error) {
                    console.error("Erro ao verificar acesso no AsyncStorage:", error);
                    router.replace("/login/loginSemBiometria");
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